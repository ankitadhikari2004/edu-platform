import React, { useState } from 'react';

export const PrivacySettings = () => {
    const [privacySettings, setPrivacySettings] = useState({
        profileVisibility: 'public',
        showLastSeen: true,
        showActivityStatus: true,
    });

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setPrivacySettings(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div>
            <div className="mt-4">
                <label className="block text-gray-700 mb-2">
                    Profile Visibility
                </label>
                <select
                    name="profileVisibility"
                    value={privacySettings.profileVisibility}
                    onChange={handleChange}
                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
            <div className="mt-4">
                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        name="showLastSeen"
                        checked={privacySettings.showLastSeen}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Show Last Seen
                </label>
            </div>
            <div className="mt-2">
                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        name="showActivityStatus"
                        checked={privacySettings.showActivityStatus}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Show Activity Status
                </label>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </div>
    );
};