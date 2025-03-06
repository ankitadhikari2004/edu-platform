import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BsTrash } from 'react-icons/bs';
import { server } from '../../../server.js';
import { Context } from '../../../context/Context';

export const AccountDelete = () => {
    const { setIsAuthenticated, setUser } = useContext(Context);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        setIsDeleting(true);
        try {
            const response = await axios.delete(`${server}/users/delete-account`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                setIsDeleting(false);
                setIsAuthenticated(false);
                setUser({});
                localStorage.removeItem("isAuthenticated");
                toast.success('Your account has been deleted successfully.');
                navigate('/');
            }
        } catch (error) {
            toast.error('Failed to delete your account. Please try again later.');
            setIsDeleting(false);
            console.error('Error deleting account:', error);
        }
    };

    return (
        <div className="w-full">
            <p className="text-gray-700 mb-2">
                Are you sure you want to delete your account?
            </p>
            <p className="text-red-500 mb-4">
                This action cannot be undone. Deleting your account will remove all your data and you will no longer have access to your account.
            </p>
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2 gap-2"
                onClick={() => setShowModal(true)}
                disabled={isDeleting}
            >
                <BsTrash fontSize={16} />
                {isDeleting ? 'Deleting...' : 'Delete Account'}
            </button>

            {showModal && (
                <Modal closeModal={() => setShowModal(false)}>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Confirmation</p>
                        <p className="text-gray-700 mb-5">By deleting your account, you acknowledge that all your data will be permanently deleted. This action cannot be undone. <br />Are you sure you want to proceed?</p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-red-500 hover:bg-red-600 w-full text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleDeleteAccount}>Delete</button>
                            <button className="bg-gray-300 hover:bg-gray-400 border border-gray-400/50 w-full text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};


const Modal = ({ children, closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 backdrop-blur-sm bg-opacity-50 z-50">
            <div className="bg-slate-100/80 rounded-lg px-8 pb-8 pt-6 max-w-md w-full">
                {children}
                <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 p-2 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700 hover:text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};