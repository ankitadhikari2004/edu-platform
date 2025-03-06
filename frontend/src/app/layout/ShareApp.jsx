import { useContext, useState, useEffect } from 'react';
import { FiCopy } from 'react-icons/fi';
import QRCode from "react-qr-code";
import toast from 'react-hot-toast';
import { Context } from '../../context/Context';

export const ShareApp = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const appLink = window.location.origin;
  const qrContent = `${appLink}/${userId}`;

  useEffect(() => {
    setLoading(true);
    if (user) {
      setTimeout(() => {
        setUserId(btoa(user._id));
        setLoading(false);
      }, 1000);
    }
  }, [user]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${appLink}/${userId}`);
    toast.success('Link copied successfully!');
  };

  return (
    <div className="px-6 py-2">
      <h2 className="text-3xl font-semibold mb-6">Share the App</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:mr-8">
          <div className="mb-6">
            <p className="text-lg mb-2">Scan the QR code or copy the link below to share the app:</p>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-slate-100/90 border border-gray-300 rounded-lg py-2 px-4 mb-2"
                value={loading ? 'Generating link...' : userId ? `${appLink}/${userId}` : 'N/A'}
                readOnly
              />
              <button
                className="absolute top-0 right-0 mt-2 mr-3 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={handleCopyLink}
              >
                <FiCopy className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="text-gray-700 text-sm">
            <p className="mb-4">
              By sharing the app link, you can earn rewards when other users sign up using your link.
            </p>

            {user && (
              <p className="mt-2">
                Hello, {user.username}! Share the link to earn rewards.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center w-[200px] h-[200px] justify-center p-4 bg-gradient-to-tr from-blue-200 to-orange-200 rounded-md shadow-lg">
          {userId ? (
            <QRCode value={qrContent} size={200} bgColor="transparent" />
          ) : (
            loading ? <p>Loading...</p> : <p className="text-red-500">User ID not available</p>
          )}
        </div>
      </div>
    </div>
  );
};
