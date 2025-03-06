import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const Context = createContext();

const ContextApi = ({ children }) => {
    const [user, setUser] = useState({});
    const [adminAuth, setAdminAuth] = useState(() => {
        return localStorage.getItem("adminAuth") === "true";  // check if user is admin or not
    });

    useEffect(() => {
        localStorage.setItem("adminAuth", adminAuth);
    }, [adminAuth]);


    return (
        <Context.Provider value={{
            user, setUser,
            adminAuth, setAdminAuth,
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextApi };