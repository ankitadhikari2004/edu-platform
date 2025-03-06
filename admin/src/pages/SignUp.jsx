import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Context } from '../context/Context';
import { server } from '../main';

export const SignUp = () => {
    const navigate = useNavigate();
    const { setAdminAuth } = useContext(Context);

    const [formData, setFormData] = useState({
        rootAdminUsername: '',
        rootAdminPassword: '',
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const checkAuth = localStorage.getItem("adminAuth");
        if (checkAuth === "true") {
            setAdminAuth(true);
            navigate('/');
        }
    }, [setAdminAuth, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${server}/api/auth/admin/create`, formData, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (response.status >= 200 && response.status < 300 || response.status === 401) {
                setFormData({ ...formData, email: '', password: '' });
                toast.success(response?.data?.message);
                setAdminAuth(true);
                localStorage.setItem('adminAuth', "true");
                navigate('/');
            }
        } catch (error) {
            console.log('Error in login ', error);
            setAdminAuth(false);
            toast.error(error.response?.data?.message || "Server Error");
            navigate('/login');
        }
    };

    const inputFields = [
        {
            name: 'rootAdminUsername',
            label: 'Admin Username',
            type: 'password',
            placeholder: 'Super Admin Username',
        },
        {
            name: 'rootAdminPassword',
            label: 'Admin Password',
            type: 'password',
            placeholder: 'Super Admin Password',
        },
        {
            name: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'Username',
        },
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'Email Address',
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
        },
    ];


    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-slate-300 w-[400px] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl mb-4 text-center font-semibold">Admin Board</h1>
                {inputFields.map((field) => (
                    <div key={field.name} className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field.name}>
                            {field.label}
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 border-slate-900/50 text-neutral-900 placeholder:text-neutral-500/80 bg-neutral-900/10 leading-tight focus:outline-none focus:shadow-outline"
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required
                            autoCorrect="false"
                            autoComplete="false"
                        />
                    </div>
                ))}
                <div className="flex items-center justify-between">
                    <button
                        className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Verify Admin
                    </button>
                </div>
            </form>
        </div>
    );
};
