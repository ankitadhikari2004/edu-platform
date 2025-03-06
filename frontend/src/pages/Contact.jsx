import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Perform your form submission logic here
      // For example, you can use axios to send the form data to your backend
      // const response = await axios.post('/api/contact', formData);
      // if (response.status === 200) {
      //     // Reset form after successful submission
      //     setFormData({
      //         name: '',
      //         email: '',
      //         message: ''
      //     });
      //     setIsSubmitting(false);
      //     toast.success('Message sent successfully!');
      // }
      setIsSubmitting(false);
      toast.success('Message sent successfully!');
    } catch (error) {
      setIsSubmitting(false);
      toast.error('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto px-5 md:px-10 py-8 gap-10">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <FiMail className="text-xl text-gray-600" />
            <span>Email: <a href="mailto:contact@educate.com" className="text-blue-500">contact@educate.com</a></span>
          </div>
          <div className="flex items-center space-x-4">
            <FiPhone className="text-xl text-gray-600" />
            <span>Phone: +1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <FiMapPin className="text-xl text-gray-600" />
            <span>Address: 123 Education Street, Cityville, State, Country</span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-3 md:min-w-[400px] w-[400px] md:w-1/3 h-fit bg-[#0e1c2b] border border-neutral-800 rounded-lg">
        <h2 className="text-2xl text-gray-100 text-center font-semibold mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Your Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Your Name'
            required
          />
          <InputField
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email Address'
            required
          />
          <TextareaField
            label="Your Message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder={'Enter your message here...'}
            required
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type, value, onChange, required, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-400 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-transparent flex flex-row w-full h-[2.7rem] items-center justify-center px-3 enter border-2 border-gray-500 placeholder:text-gray-500 text-gray-100 rounded-lg"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      spellCheck={false}
      autoComplete='off'
    />
  </div>
);

const TextareaField = ({ label, name, rows, value, onChange, required, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-400 mb-1">{label}</label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      className="bg-transparent text-gray-100 resize-none flex flex-row w-full h-[22dvh] p-2 items-center justify-center px-3 enter border-2 border-gray-500 placeholder:text-gray-500 rounded-lg"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      autoComplete='off'
    ></textarea>
  </div>
);
