import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Products } from './pages/Products';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { useContext, useEffect } from 'react';
import { Context } from './context/Context';
import { server } from './main';
import { Toaster } from 'react-hot-toast';
import { SignUp } from './pages/SignUp';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const { adminAuth } = useContext(Context);
  if (!adminAuth) {
    return <Navigate to="/admin-login" />;
  }
  return <>{children}</>;
};

const App = () => {
  const { pathname } = useLocation();
  const { adminAuth, setAdminAuth, setUser } = useContext(Context);

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const response = await axios.get(`${server}/api/auth/admin/profile`, {
          withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
          setAdminAuth(true);
          setUser(response.data.admin);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        setAdminAuth(false);
        setUser({});
      }
    };
    checkUserAuth();
  }, [setAdminAuth, setUser]);

  // Show the login page if not authenticated
  if (!adminAuth) {
    return <Login />;
  }

  const currentPageName = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);

  return (
    <div className="flex flex-row bg-slate-200 w-full h-screen gap-5">
      <div className="flex flex-col min-w-[270px] w-[270px] h-[-webkit-fill-available] text-neutral-200 bg-neutral-900 m-3 p-4 rounded-xl">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col gap-8 my-2 pt-2 overflow-x-hidden overflow-y-scroll">
        <h1 className="text-3xl font-bold">{currentPageName || 'Home'}</h1>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin-board" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/notification" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
