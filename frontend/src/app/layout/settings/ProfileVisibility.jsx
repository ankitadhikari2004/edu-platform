import React, { useState } from 'react';

export const ProfileVisibility = () => {
    const [profileVisibility, setProfileVisibility] = useState('public');

    const handleChange = (event) => {
        setProfileVisibility(event.target.value);
    };

    return (
        <div>
            <p className="text-gray-600">Control the visibility of your profile to other users.</p>
            <div className="mt-4">
                <label className="block text-gray-700 mb-2">
                    Profile Visibility
                </label>
                <select
                    value={profileVisibility}
                    onChange={handleChange}
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
        </div>
    );
};