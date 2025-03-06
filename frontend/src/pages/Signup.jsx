import { server } from '../server.js';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { OTPForm } from '../components/OTPForm';

const InputField = ({ type, name, value, onChange, placeholder, required, maxLength, pattern, options }) => {
  return (
    <div className='flex flex-row w-full h-[2.7rem] items-center justify-center px-3 enter border-2 border-gray-600 rounded-lg'>
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full h-full text-base outline-none bg-transparent tracking-wide text-gray-600"
        >
          <option value="">{`Select ${name}`}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          pattern={pattern}
          className="w-full h-full text-base outline-none bg-transparent tracking-wide placeholder:text-gray-500 placeholder:text-base"
        />
      )}
    </div>
  );
};

export const Signup = () => {
  const [otpContinue, setOtpContinue] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    course: '',
    college: '',
    mobileNumber: '',
    password: '',
    role: 'student'
  });
  const [course, setCourse] = useState([]);
  const [colleges, setColleges] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColleges = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const realCourses = ['Engineering', 'Medical', 'Arts', 'Science', 'Commerce'];
      const realColleges = ['Harvard University', 'Stanford University', 'Massachusetts Institute of Technology', 'University of Oxford', 'University of Cambridge'];

      setCourse(realCourses);
      setColleges(realColleges);
    };

    fetchColleges();
  }, []);

  const handleEmailSubmit = async () => {
    try {
      const response = await axios.post(`${server}/sendemail/send`, { email: formData.email }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setOtpContinue(!otpContinue);;
        toast.success(response.data.message);
      } else {
        toast.error("Failed to send OTP. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await handleEmailSubmit();
    // setOtpContinue(!otpContinue);
    try {
      const response = await axios.post(`${server}/users/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        console.log(formData)
        setFormData({
          name: '',
          email: '',
          course: '',
          college: '',
          mobileNumber: ''
        });
        toast.success(response?.data?.message);
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Server Error!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'email' ? value.toLowerCase() : value;
    const numericValue = name === 'mobileNumber' ? newValue.replace(/\D/g, '') : newValue;
    setFormData({
      ...formData,
      [name]: numericValue
    });
  };

  const fields = [
    { label: 'Name', name: 'username', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Course', name: 'course', type: 'select', options: course },
    { label: 'College', name: 'college', type: 'select', options: colleges },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full h-screen">
      {!otpContinue ? (
        <div className="flex flex-col items-center justify-center w-[400px] md:w-1/3 gap-8 mt-12">
          <div className="w-3/4">
            <p className="font-bold text-4xl">Sign up</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-2" method="post" ref={formRef}>
            <div className="flex flex-col w-3/4 gap-4">
              {fields.map((field, index) => (
                <InputField
                  key={index}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label}`}
                  required={true}
                  options={field.options}
                />
              ))}
              <div className='flex flex-row w-full h-[2.7rem] items-center justify-center px-3 enter border-2 border-gray-600 rounded-lg'>
                <span className="text-lg tracking-wider font-medium pr-2 text-gray-800">+91</span>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  maxLength={10}
                  required={true}
                  placeholder="Enter Mobile Number"
                  pattern="[0-9]{10}"
                  className="w-full h-full text-lg outline-none bg-transparent tracking-wide placeholder:text-gray-500 placeholder:text-base"
                />
              </div>
            </div>
            <button type='submit' className='h-[2.7rem] my-6 rounded-lg bg-sky-900 w-3/4'><span className='font-medium text-lg text-white'>Continue</span></button>
            <div className="flex gap-2 text-center pb-3">
              <span>Already have an account?</span>
              <Link to="/login" className="text-blue-600">Login</Link>
            </div>
          </form>
        </div>
      ) : (
        <OTPForm email={formData.email} resend={handleEmailSubmit} />
      )}
    </div>
  );
};
