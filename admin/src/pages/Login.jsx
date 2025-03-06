import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Context } from '../context/Context';
import { server } from '../main';

export const Login = () => {
    const navigate = useNavigate();
    const { setAdminAuth } = useContext(Context);

    const [adminData, setAdminData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        const checkAuth = localStorage.getItem("adminAuth");
        if (checkAuth === "true") {
            setAdminAuth(true);
            navigate('/');
        }
    }, [setAdminAuth, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${server}/api/auth/admin/login`, adminData, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (response.status >= 200 && response.status < 300 || response.status === 401) {
                setAdminData({ username: '', password: '' });
                toast.success(response?.data?.message);
                setAdminAuth(true);
                localStorage.setItem('adminAuth', "true");
                navigate('/');
            }
        } catch (error) {
            console.error('Error in login ', error);
            setAdminAuth(false);
            toast.error(error.response?.data?.message || "Server Error");
            navigate('/admin-login');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-slate-300 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl mb-4 text-center font-semibold">Login</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 border-slate-900/50 text-neutral-900 placeholder:text-neutral-500/80 bg-neutral-900/10 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name="username"
                        type="password"
                        placeholder="Admin Username"
                        value={adminData.username}
                        onChange={handleChange}
                        required
                        autoComplete="false"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 border-slate-900/50 text-neutral-900 placeholder:text-neutral-500/80 bg-neutral-900/10 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Admin Password"
                        value={adminData.password}
                        onChange={handleChange}
                        required
                        autoComplete="false"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
