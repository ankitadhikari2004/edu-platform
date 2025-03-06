import React, { useState } from 'react';

export const LanguagePreferences = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
            <p className="text-gray-600">Choose your preferred language for the platform interface.</p>
            <div className="mt-4">
                <label className="block text-gray-700 mb-2">
                    Select Language
                </label>
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="block w-[30%] bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                </select>

            </div>
        </div>
    );
};
