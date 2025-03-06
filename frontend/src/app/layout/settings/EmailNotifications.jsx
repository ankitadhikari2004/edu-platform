import React, { useState } from 'react';

export const EmailNotifications = () => {
    const [emailNotifications, setEmailNotifications] = useState({
        newMessage: true,
        friendRequest: true,
        eventReminder: false,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setEmailNotifications(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div>
            <p className="text-gray-600">Manage email notifications for various activities on the platform.</p>
            <div className="mt-4">
                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        name="newMessage"
                        checked={emailNotifications.newMessage}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    New Messages
                </label>
            </div>
            <div className="mt-2">
                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        name="friendRequest"
                        checked={emailNotifications.friendRequest}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Friend Requests
                </label>
            </div>
            <div className="mt-2">
                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        name="eventReminder"
                        checked={emailNotifications.eventReminder}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Event Reminders
                </label>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </div>
    );
};