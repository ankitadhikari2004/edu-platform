import { FiWifiOff } from 'react-icons/fi';

export const OfflineComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <FiWifiOff className="text-6xl text-gray-500 mb-4" />
            <h2 className="text-3xl font-semibold text-gray-700 mb-2">You're Offline</h2>
            <p className="text-lg text-gray-600 mb-6">Please check your internet connection and try again.</p>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );
};