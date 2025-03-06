import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { server } from '../../../server.js';

export const ChangeUsername = ({ id }) => {
    const [newUsername, setNewUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeUsername = async (e) => {
        e.preventDefault();
        if (!newUsername) {
            toast.error('Please enter a new username.');
            return;
        }

        // Your logic to send the new username to the server
        try {
            setIsLoading(true);
            const response = await axios.post(`${server}/users/${id}/change-username`, { newUsername }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            // Handle response accordingly
            setIsLoading(false);
            setNewUsername('');
            toast.success('Username Changed');
            // Show success message or navigate to another page
        } catch (error) {
            setIsLoading(false);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="max-w-sm py-2">
            <form onSubmit={handleChangeUsername} className="space-y-4">
                <div>
                    <label htmlFor="new-username" className="block mb-1">New Username</label>
                    <input
                        type="text"
                        id="new-username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder='Enter new username'
                        className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Changing...' : 'Change'}
                    </button>
                </div>
            </form>
            <div className="mt-4 text-sm text-gray-600">
                <p>By changing your username, you agree to the terms and conditions.</p>
                <p>Make sure to choose a username that complies with our guidelines.</p>
            </div>
        </div>
    );
};
