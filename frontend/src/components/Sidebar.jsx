import axios from 'axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Context } from '../context/Context';
import { NavLink, useNavigate } from 'react-router-dom';

import { HiOutlineQrCode, HiOutlineBellAlert, HiOutlineFolder, HiOutlineCog8Tooth, HiOutlineChatBubbleBottomCenterText, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";
import { PiUser } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { server } from '../server.js';

export const Sidebar = () => {
    const { user, setUser, setIsAuthenticated } = useContext(Context);
    const navigate = useNavigate();

    const data = [
        { path: `/profile/${user._id}/overview`, icon: CiGrid42, title: 'Overview' },
        { path: `/profile/${user._id}/courses`, icon: IoDocumentTextOutline, title: 'Courses' },
        { path: `/profile/${user._id}/messages`, icon: HiOutlineChatBubbleBottomCenterText, title: 'Messages' },
        { path: `/profile/${user._id}/resources`, icon: HiOutlineFolder, title: 'Resources' },
        { path: `/profile/${user._id}/notification`, icon: HiOutlineBellAlert, title: 'Notification' },
        { path: `/profile/${user._id}/goals`, icon: GoGoal, title: 'Goals' },
        { path: `/profile/${user._id}/settings`, icon: HiOutlineCog8Tooth, title: 'Settings' },
    ];

    const account = [
        { path: `/profile/${user._id}/appshare`, icon: HiOutlineQrCode, title: 'Share App' },
        { path: `/profile/${user._id}/me`, icon: PiUser, title: 'Profile' },
    ];

    const handleLogout = async () => {
        try {
            const response = await axios.get(`${server}/users/logout`, {
                withCredentials: true
            });
            if (response.status === 200) {
                setIsAuthenticated(false);
                toast.success('Logout Successful!');
                setUser({});
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error('Error logging out!');
        }
    }

    return (
        <div className='border flex flex-col h-full border-neutral-900/20 shadow-md w-[250px] rounded-md bg-neutral-200 gap-5 px-3 py-5'>
            <div className='flex w-full h-fit flex-col'>
                <div className='flex w-full flex-col gap-2'>
                    {
                        data.map((item, index) => (
                            <NavLink to={item.path} key={index} className='flex items-center gap-2 w-full cursor-pointer hover:bg-neutral-700/30 py-2 px-3 rounded-md transition-all ease-in-out duration-200'>
                                <item.icon size={20} />
                                <span>{item.title}</span>
                            </NavLink>
                        ))
                    }
                </div>
                <div className="flex w-full flex-col gap-2 border-t border-neutral-900/20 mt-4 pt-4">
                    {
                        account.map((item, index) => (
                            <NavLink to={item.path} key={index} className='flex items-center gap-2 w-full cursor-pointer hover:bg-neutral-700/30 py-2 px-3 rounded-md transition-all ease-in-out duration-200'>
                                <item.icon size={20} />
                                <span>{item.title}</span>
                            </NavLink>
                        ))
                    }
                    <div onClick={handleLogout} className='flex items-center gap-2 border w-full cursor-pointer hover:bg-neutral-700/30 py-2 px-3 rounded-md transition-all ease-in-out duration-200'>
                        <HiOutlineArrowRightOnRectangle size={20} />
                        <span>Log out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
