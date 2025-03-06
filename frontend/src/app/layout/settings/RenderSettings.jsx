import { useNavigate } from 'react-router-dom';
import { BiBlock,BiGlobe, BiHide } from 'react-icons/bi';
import { GoUnlock,GoLock, GoShieldLock } from "react-icons/go";
import { BsTrash3 } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";
import {  PiUser } from 'react-icons/pi';



export const RenderSettings = () => {
  const settings = [
    {
      id: 1,
      name: 'Change Username',
      description: 'Change your username associated with your account.',
      icon: PiUser,
      path: `change-username`,
    },
    {
      id: 2,
      name: 'Change Password',
      description: 'Change the password for your account to enhance security.',
      icon: GoLock,
      path: `change-password`,
    },
    {
      id: 3,
      name: 'Email Notifications',
      description: 'Manage email notifications for various activities on the platform.',
      icon: IoMailUnreadOutline,
      path: `email-notifications`,
    },
    {
      id: 4,
      name: 'Privacy Settings',
      description: 'Customize your privacy settings to control who can see your profile information.',
      icon: GoUnlock,
      path: `privacy-settings`,
    },
    {
      id: 5,
      name: 'Account Deactivation',
      description: 'Deactivate your account temporarily or permanently.',
      icon: BiBlock,
      path: `account-deactivation`,
    },
    {
      id: 6,
      name: 'Two-Factor Authentication',
      description: 'Enable two-factor authentication for added security to your account.',
      icon: GoShieldLock,
      path: `two-factor-authentication`,
    },
    {
      id: 7,
      name: 'Language Preferences',
      description: 'Choose your preferred language for the platform interface.',
      icon: BiGlobe,
      path: `language-preferences`,
    },
    {
      id: 8,
      name: 'Profile Visibility',
      description: 'Control the visibility of your profile to other users.',
      icon: BiHide,
      path: `profile-visibility`,
    },    
    {
      id: 8,
      name: 'Account Delete',
      description: 'Permanently delete your account.',
      icon: BsTrash3,
      path: 'account-delete',
    }
  ];

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {settings.map(setting => (
        <div key={setting.id} className="bg-slate-100/80 rounded-lg p-4 shadow-md flex items-start gap-3 cursor-pointer" onClick={() => handleClick(setting.path)}>
          <div className='w-9 h-9 flex items-start justify-center'><setting.icon fontSize={23} className="h-fit pt-1 text-gray-500" /></div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{setting.name}</h3>
            <p className="text-gray-600 cursor-pointer">{setting.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};