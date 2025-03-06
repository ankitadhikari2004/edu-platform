import './App.css';
import IsOnline from 'is-online';
import { Navbar, Footer } from './components';
import { Home, Profile, Notes } from './app/index.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ContactPage } from './pages/Contact.jsx';
import { AboutPage } from './pages/About.jsx';
import { Context } from './context/Context.jsx';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { server } from './server.js';
import { ShareApp, Layout, Courses, Goals, Messages, Overview, Resources, Settings, Notification, Account } from './app/layout';
import { CareerPage } from './pages/Career.jsx';
import { AccountDeactivation, AccountDelete, ChangePassword, ChangeUsername, EmailNotifications, LanguagePreferences, PrivacySettings, ProfileVisibility, RenderSettings, TwoFactorAuthentication } from './app/layout/settings/setting.js';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { OfflineComponent } from './pages/OfflineComponent.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={'/login'} />;
  }
  return <Layout>{children}</Layout>;
};

const App = () => {
  const { user, setIsAuthenticated, setUser, isOnline, setIsOnline } = useContext(Context);

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const response = await axios.get(`${server}/users/profile`, {
          headers:{
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        }
      } catch (error) {
        console.error('Network error during user authentication:', error);
      }
    };

    const fetchOnline = async () => {
      const online = await IsOnline();
      setIsOnline(online);
    };

    fetchOnline();
    checkUserAuth();
    console.log(user)
  }, [setIsAuthenticated, setUser, setIsOnline]);

  // if (!isOnline) {
  //   return <OfflineComponent />;
  // }

  return (
    <div className='w-full h-screen overflow-y-scroll overflow-x-hidden bg-gray-200'>
      <Navbar />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/getting-started' element={<Signup />} />
        <Route path='/dashboard' element={<Signup />} />
        <Route path='/dashboard' element={<Signup />} />
        <Route path='/notes/:category' element={<Notes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/career' element={<CareerPage />} />

        <Route path='profile/:id' element={<ProtectedRoute />}>
          <Route index element={<Profile />} />
          <Route path='me' element={<Profile />} />
          <Route path='overview' element={<Overview />} />
          <Route path='courses' element={<Courses />} />
          <Route path='messages' element={<Messages />} />
          <Route path='resources' element={<Resources />} />
          <Route path='notification' element={<Notification />} />
          <Route path='goals' element={<Goals />} />
          <Route path='account' element={<Account />} />
          <Route path='appshare' element={<ShareApp />} />

          <Route path='settings' element={<Settings />}>
            <Route index element={<RenderSettings />} />
            <Route path='change-username' element={<ChangeUsername id={user._id} />} />
            <Route path='change-password' element={<ChangePassword id={user._id} />} />
            <Route path='email-notifications' element={<EmailNotifications id={user._id} />} />
            <Route path='privacy-settings' element={<PrivacySettings id={user._id} />} />
            <Route path='account-deactivation' element={<AccountDeactivation id={user._id} />} />
            <Route path='account-delete' element={<AccountDelete />} />
            <Route path='two-factor-authentication' element={<TwoFactorAuthentication id={user._id} />} />
            <Route path='language-preferences' element={<LanguagePreferences id={user._id} />} />
            <Route path='profile-visibility' element={<ProfileVisibility id={user._id} />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
};

export default App;
