import { useState } from 'react';
import axios from 'axios';
import { MdOutlineCloudUpload } from "react-icons/md";
import toast from 'react-hot-toast';

export const CareerPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        resume: null,
        coverLetter: '',
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
            const formDataToSend = new FormData();
            for (let key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await axios.post('YOUR_API_ENDPOINT', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setFormData({
                    fullName: '',
                    email: '',
                    resume: null,
                    coverLetter: '',
                });
                setIsSubmitting(false);
                toast.success('Application submitted successfully!');
            }
        } catch (error) {
            setIsSubmitting(false);
            toast.error('An error occurred while submitting your application. Please try again later.');
        }
    };

    return (
        <div className="relative flex flex-col md:flex-row justify-between px-5 md:px-10 py-8 gap-10">
            <div className="w-full md:w-3/5 pr-8">
                <h1 className="text-3xl font-bold mb-4">Join Our Team</h1>
                <p className="mb-6">
                    We're passionate about education and are always looking for talented individuals to join our team. If you share our vision of providing quality education to students worldwide, we'd love to hear from you.
                </p>

                <h2 className="text-xl font-semibold mb-2">Current Openings</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Educational Content Writer</li>
                    <li>Online Tutor - Mathematics</li>
                    <li>Instructional Designer</li>
                    <li>Customer Support Representative</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">Benefits</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Competitive salaries</li>
                    <li>Flexible working hours</li>
                    <li>Health insurance</li>
                    <li>Paid time off</li>
                    <li>Professional development opportunities</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">Application Process</h2>
                <p className="mb-6">
                    To apply for a position, please send your resume and cover letter to <a href="mailto:careers@educate.com" className="text-blue-500">careers@educate.com</a>. In your cover letter, be sure to include the position you are applying for and explain why you'd be a great fit for our team.
                </p>

                <p className="text-sm text-gray-500">
                    Note: Only shortlisted candidates will be contacted for further steps in the hiring process.
                </p>
            </div>

            <div className="px-5 pb-5 pt-3 md:min-w-[400px] w-[400px] md:w-1/3 h-fit bg-[#0e1c2b] border border-neutral-800 rounded-lg">
                <h2 className="text-2xl text-gray-100 text-center font-semibold mb-4">Submit Your Application</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        label="Full Name"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder='Enter Name'
                        required
                    />
                    <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter Email Address'
                        required
                    />
                    <div className="mb-4">
                        <p className='block text-gray-400 mb-1'>Resume</p>
                        <label htmlFor="resume" className="cursor-pointer flex flex-row w-full h-[2.7rem] items-center px-3 enter border-2 border-gray-600 rounded-lg gap-3">
                            <MdOutlineCloudUpload fontSize={23} className='text-gray-500' />
                            <span className='text-gray-500'>Upload Resume</span>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                className="hidden"
                                accept=".pdf"
                                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                                required
                            />
                        </label>
                    </div>
                    <TextareaField
                        label="Cover Letter"
                        name="coverLetter"
                        rows="10"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder={'Enter your cover letter here...'}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
            className="bg-transparent text-gray-100 flex flex-row w-full h-[2.7rem] items-center justify-center px-3 enter border-2 border-gray-500 placeholder:text-gray-500 rounded-lg"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            autoComplete='off'
            spellCheck={false}
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
            className="bg-transparent resize-none flex flex-row w-full h-[22dvh] p-2 items-center justify-center px-3 enter border-2 border-gray-500 placeholder:text-gray-500 rounded-lg"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            autoComplete='off'
        ></textarea>
    </div>
);