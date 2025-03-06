import React, { useState } from 'react';

export const ChangePassword = ({ id }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = () => {
        // Logic to change the password
    };

    return (
        <div>
            <form onSubmit={handleChangePassword}>
                <label htmlFor="current-password" className="block mb-2">Current Password</label>
                <input
                    type="password"
                    id="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                />
                <label htmlFor="new-password" className="block mt-4 mb-2">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                />
                <label htmlFor="confirm-new-password" className="block mt-4 mb-2">Confirm New Password</label>
                <input
                    type="password"
                    id="confirm-new-password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                />
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                    Change Password
                </button>
            </form>
        </div>
    );
};
