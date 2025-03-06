import React, { useState } from 'react';

export const TwoFactorAuthentication = () => {
    const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);

    const toggleTwoFactorAuth = () => {
        setTwoFactorAuthEnabled(prevState => !prevState);
    };

    return (
        <div>
            <p className="text-gray-600">Enable two-factor authentication for added security to your account.</p>
            <div className="flex items-center mt-4">
                <input
                    type="checkbox"
                    id="twoFactorAuth"
                    checked={twoFactorAuthEnabled}
                    onChange={toggleTwoFactorAuth}
                    className="mr-2"
                />
                <label htmlFor="twoFactorAuth">Enable Two-Factor Authentication</label>
            </div>
        </div>
    );
};
