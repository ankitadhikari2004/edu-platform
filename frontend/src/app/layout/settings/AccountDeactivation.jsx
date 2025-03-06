import React from 'react';

export const AccountDeactivation = () => {
    const handleDeactivateAccount = () => {
        // Implement account deactivation logic here
    };

    return (
        <div>
            <p className="text-gray-600">Deactivate your account temporarily or permanently.</p>
            <button onClick={handleDeactivateAccount} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Deactivate Account
            </button>
        </div>
    );
};
