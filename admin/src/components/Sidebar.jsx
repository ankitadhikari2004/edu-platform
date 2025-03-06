import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { IoCube } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { server } from '../main';
import { Context } from '../context/Context';
import { useContext } from 'react';

// import { GoHomeFill } from "react-icons/go";
// import { MdOutlinePayments } from "react-icons/md";
// import { IoSettings } from "react-icons/io5";
// import { BsStars } from "react-icons/bs";

export const Sidebar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { setAdminAuth } = useContext(Context);

    const sidelinks = [
        {
            id: 2,
            label: 'Dashboard',
            icon: <BiSolidDashboard fontSize={22} />,
            link: '/dashboard'
        },
        // {
        //     id: 3,
        //     label: 'Report',
        //     icon: <MdOutlinePayments fontSize={22} />,
        //     link: '/report'
        // },
        {
            id: 4,
            label: 'Products',
            icon: <IoCube fontSize={22} />,
            link: '/products'
        },
        {
            id: 5,
            label: 'Notification',
            icon: <FaBell fontSize={22} />,
            link: '/notification'
        },
        // {
        //     id: 6,
        //     label: 'Settings',
        //     icon: <IoSettings fontSize={22} />,
        //     link: '/settings'
        // },
        {
            id: 7,
            label: 'Profile',
            icon: <FaUser fontSize={22} />,
            link: '/profile'
        },
    ];

    const handleLogout = async () => {
        try {
            const response = await axios.get(`${server}/api/auth/admin/logout`, {
                withCredentials: true,
            });
            if (response.status >= 200 && response.status < 300) {
                toast.success(response.data.message);
                localStorage.removeItem('adminAuth');
                setAdminAuth(false);
                navigate('/admin-login');
            }
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    }


    return (
        <>
            <div className="flex justify-center w-full h-fit pb-3 border-b border-neutral-500">
                <p className='text-2xl font-semibold'>Admin Dashboard</p>
            </div>
            <div className="flex justify-start items-start h-[-webkit-fill-available] pt-5">
                <div className="flex flex-col justify-between h-[-webkit-fill-available] w-full gap-5">
                    <div className="flex flex-col gap-2">
                        {sidelinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.link}
                                className={`flex items-center gap-4 px-3 py-3 rounded-md transition-all ${pathname === link.link ? 'bg-neutral-600 hover:bg-neutral-600' : 'hover:bg-neutral-800'
                                    }`}
                            >
                                <span className="text-neutral-400">{link.icon}</span>
                                <p className="text-lg font-semibold">{link.label}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={handleLogout}
                            className={`mt-auto flex items-center gap-4 px-3 py-2.5 rounded-md bg-orange-500 hover:shadow-orange-600 duration-300 ease-in-out transition-all`}
                        >
                            <span className="text-neutral-100"><PiSignIn fontSize={22} /></span>
                            <p className="text-lg font-semibold">Logout</p>
                        </button>
                        {/* <Link
                            to={'/upgrade-to-pro'}
                            className={`flex items-center gap-4 px-3 py-2 rounded-md bg-orange-500 hover:shadow-orange-600 shadow-lg transition duration-300 ease-in-out`}
                        >
                            <span className="text-neutral-400"><BsStars fontSize={22} /></span>
                            <p className="text-lg font-semibold">Upgrade to pro</p>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}
