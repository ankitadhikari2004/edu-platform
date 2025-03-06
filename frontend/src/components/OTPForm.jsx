import { server } from '../server.js';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context } from '../context/Context';

export const OTPForm = ({ email, resend }) => {
    const { setUserID } = useContext(Context);

    const [otp, setOTP] = useState('');
    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        const inputs = formRef.current.querySelectorAll('input[type="text"]');
        const submit = formRef.current.querySelector('button[type="submit"]');

        if (
            !/^[0-9]{1}$/.test(e.key)
            && e.key !== 'Backspace'
            && e.key !== 'Delete'
            && e.key !== 'Tab'
            && !e.metaKey
        ) {
            e.preventDefault();
        }

        if (e.key === 'Delete' || e.key === 'Backspace') {
            const index = Array.from(inputs).indexOf(e.target);
            if (index > 0 && e.target.value === '') {
                inputs[index - 1].value = '';
                inputs[index - 1].focus();
            }
        }
    };


    const handleInput = (e) => {
        const inputs = formRef.current.querySelectorAll('input[type="text"]');
        const submit = formRef.current.querySelector('button[type="submit"]');
        const index = Array.from(inputs).indexOf(e.target);
        if (e.target.value) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            } else {
                submit.focus();
            }
        }
        setOTP(prevOTP => prevOTP + e.target.value);
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const inputs = formRef.current.querySelectorAll('input[type="text"]');
        const submit = formRef.current.querySelector('button[type="submit"]');
        const text = e.clipboardData.getData('text');
        if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
            return;
        }
        const digits = text.split('');
        inputs.forEach((input, index) => {
            input.value = digits[index];
            setOTP(prevOTP => prevOTP + digits[index]);
        });
        submit.focus();
    };

    const inputProps = {
        onKeyDown: handleKeyDown,
        onInput: handleInput,
        onFocus: handleFocus,
        onPaste: handlePaste,
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        console.log(email, otp)
        try {
            const response = await axios.post(`${server}/sendemail/verify-otp`, {
                email,
                otp,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (response.status >= 200 && response.status < 300) {
                setUserID(response.data.id);
                toast.success(response.data.message);
                navigate('/profile');
            } else {
                toast.error("Invalid OTP. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="relative font-inter antialiased">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                <div className="flex justify-center">
                    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                        <header className="mb-8">
                            <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                            <p className="text-[15px] text-slate-500">Enter the 6-digit verification code that was sent to your registered email address.</p>
                        </header>
                        <form onSubmit={handleOtpSubmit} ref={formRef} id="otp-form">
                            <div className="flex items-center justify-center gap-3">
                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        className="w-12 md:w-14 h-12 md:h-14 text-center text-2xl font-semibold text-slate-900 bg-slate-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        pattern="\d*"
                                        maxLength="1"
                                        {...inputProps}
                                    />
                                ))}
                            </div>
                            <div className="max-w-[260px] mx-auto mt-4">
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                                >
                                    Verify Account
                                </button>
                            </div>
                        </form>
                        <div className="text-sm text-slate-500 mt-4">Didn't receive code? <span onClick={resend} className="cursor-pointer font-medium text-indigo-500 hover:text-indigo-600">Resend</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
