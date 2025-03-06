import notes from '../assets/notes.png';
import pages from '../assets/pages.png';
import docs from '../assets/docs.png';
import archives from '../assets/folders.png';
import books from '../assets/book.png';
import research from '../assets/research.png';
import civil from '../assets/civil.jpg';
import maths from '../assets/maths.jpg';
import mechanical from '../assets/mechanical.jpg';
import physics from '../assets/physics.jpg';
import programming from '../assets/programming.jpg'
import electrical from '../assets/electrical.jpg';
import { IoIosCheckmarkCircleOutline, IoMdDownload } from 'react-icons/io';
import { FaRegLightbulb, FaUsers } from 'react-icons/fa';
import { PiCertificateLight } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserGraduate, FaClipboardList, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

export const features = [
    {
        title: 'Personalized Recommendations',
        description: 'Get personalized recommendations based on your preferences and browsing history.',
        icon: IoIosCheckmarkCircleOutline,
        color: 'text-green-500',
    },
    {
        title: 'Interactive Learning Modules',
        description: 'Engage with interactive learning modules to reinforce your understanding of key concepts.',
        icon: FaRegLightbulb,
        color: 'text-yellow-500',
    },
    {
        title: 'Progress Tracking',
        description: 'Track your progress with detailed analytics and performance metrics to stay motivated.',
        icon: BsGraphUpArrow,
        color: 'text-red-500',
    },
    {
        title: 'Community Forums',
        description: 'Join community forums to discuss topics, ask questions, and collaborate with others.',
        icon: FaUsers,
        color: 'text-blue-500',
    },
    {
        title: 'Offline Access',
        description: 'Access course materials and resources offline, so you can learn anytime, anywhere.',
        icon: IoMdDownload,
        color: 'text-purple-500',
    },
    {
        title: 'Certificate of Completion',
        description: 'Earn a certificate upon completing courses to showcase your achievements.',
        icon: PiCertificateLight,
        color: 'text-orange-500',
    },
];

export const CardsData = [
    {
        id: 1,
        title: "Study Material",
        description: "Explore a wide range of study materials for various subjects.",
        image: books,
        link: "/notes/study-material"
    },
    {
        id: 2,
        title: "Assignments",
        description: "Access assignments to practice and test your understanding.",
        image: pages,
        link: "/notes/assignments"
    },
    {
        id: 3,
        title: "Previous Year Questions",
        description: "Browse through a collection of previous year questions for exam preparation.",
        image: docs,
        link: "/notes/questions"
    },
    {
        id: 4,
        title: "Notes",
        description: "Access concise and comprehensive notes for quick revision.",
        image: notes,
        link: "/notes/note"
    },
    {
        id: 5,
        title: "Research Paper",
        description: "Explore research papers and scholarly articles for in-depth study.",
        image: research,
        link: "/notes/research-paper"
    },
    {
        id: 6,
        title: "Archives",
        description: "Access archived materials and resources for reference.",
        image: archives,
        link: "/notes/archives"
    }
];

//this array is for user review data
export const ReviewData = [
    {
        id: 1,
        name: "John Doe",
        profile: "https://randomuser.me/api/portraits/men/1.jpg",
        position: "Student at XYZ University",
        rating: 5,
        comment: "This platform has been incredibly helpful for my studies. The resources are comprehensive and well-organized. I highly recommend it!",
        socialLink: "https://www.linkedin.com/in/johndoe"
    },
    {
        id: 2,
        name: "Jane Smith",
        profile: "https://randomuser.me/api/portraits/women/2.jpg",
        position: "Teacher at ABC School",
        rating: 4,
        comment: "I've been using this platform to supplement my classroom teaching, and it's been fantastic. The interactive lessons engage students and reinforce concepts effectively.",
        socialLink: "https://twitter.com/janesmith"
    },
    {
        id: 3,
        name: "Alice Johnson",
        profile: "https://randomuser.me/api/portraits/women/3.jpg",
        position: "Parent",
        rating: 5,
        comment: "As a parent, I appreciate how this platform supports my child's learning journey. The content is age-appropriate, and the progress tracking feature helps me stay informed.",
        socialLink: "https://www.facebook.com/alicejohnson"
    },
    {
        id: 4,
        name: "Michael Brown",
        profile: "https://randomuser.me/api/portraits/men/4.jpg",
        position: "High School Student",
        rating: 4,
        comment: "I've been using this platform for exam preparation, and it's been a game-changer. The practice tests are especially helpful.",
        socialLink: "https://www.instagram.com/michaelbrown"
    },
    {
        id: 5,
        name: "Emily Wilson",
        profile: "https://randomuser.me/api/portraits/women/5.jpg",
        position: "College Student",
        rating: 5,
        comment: "This platform offers a wide range of study materials. It's convenient and easy to use. Highly recommended!",
        socialLink: "https://www.linkedin.com/in/emilywilson"
    },
];

export const Detaildata = [
    {
        id: 1,
        title: "Happy Students",
        description: "Join over 5000 satisfied students.",
        icon: FaUserGraduate,
        color: "text-purple-400"
    },
    {
        id: 2,
        title: "Mock Tests",
        description: "Access 500+ mock tests for exam preparation.",
        icon: FaClipboardList,
        color: "text-blue-400"
    },
    {
        id: 3,
        title: "Previous Year Questions",
        description: "Get access to a collection of 1000+ previous year questions.",
        icon: FaQuestionCircle,
        color: "text-green-400"
    },
    {
        id: 4,
        title: "Practice Papers",
        description: "Practice with over 2000+ practice papers.",
        icon: FaFileAlt,
        color: "text-yellow-400"
    }
];
export const NotesData = [
    {
        _id: 1,
        title: "Physics Notes",
        image: physics,
        star: 4.2,
        price: 1500,
        link: "/notes/physics",
        description: "Comprehensive physics notes covering classical mechanics, electromagnetism, thermodynamics, and modern physics.",
    },
    {
        _id: 2,
        title: "Mathematics Workbook",
        image: maths,
        star: 4.5,
        price: 1200,
        link: "/notes/mathematics",
        description: "Mathematics workbook covering calculus, algebra, geometry, and trigonometry with exercises and solutions.",
    },
    {
        _id: 3,
        title: "Computer Science Notes",
        image: programming,
        star: 4.3,
        price: 1000,
        link: "/notes/computer-science",
        description: "Computer science notes covering programming languages, algorithms, data structures, and software engineering principles.",
    },
    {
        _id: 4,
        title: "Electrical Engineering Notes",
        image: electrical,
        star: 4.4,
        price: 1800,
        link: "/notes/electrical-engineering",
        description: "Comprehensive electrical engineering notes including circuit analysis, power systems, electronics, and control systems.",
    },
    {
        _id: 5,
        title: "Mechanical Engineering Formulas",
        image: mechanical,
        star: 4.6,
        price: 1600,
        link: "/notes/mechanical-engineering",
        description: "Essential mechanical engineering formulas and equations for statics, dynamics, thermodynamics, and fluid mechanics.",
    },
    {
        _id: 6,
        title: "Civil Engineering Study Guide",
        image: civil,
        star: 4.1,
        price: 1100,
        link: "/notes/civil-engineering",
        description: "Detailed civil engineering study guide including structural analysis, transportation engineering, geotechnical engineering, and construction management.",
    },
];
