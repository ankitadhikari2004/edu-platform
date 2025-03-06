import { GrDocumentPdf } from 'react-icons/gr';
import { AiOutlineFileJpg } from 'react-icons/ai';
import { ImFileText2 } from 'react-icons/im';
import { SiJpeg } from 'react-icons/si';
import { TbFileTypeDocx } from 'react-icons/tb';
import { RiFilePpt2Fill } from 'react-icons/ri';
import { BsFiletypePng } from 'react-icons/bs';


export const productData = [
    {
        id: 1,
        course: "B.Tech",
        branch: "CSE",
        file: "example.pdf",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 2,
        course: "B.Tech",
        branch: "CSE",
        file: "example.jpg",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 3,
        course: "B.Tech",
        branch: "CSE",
        file: "example.txt",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 4,
        course: "B.Tech",
        branch: "CSE",
        file: "example.ppt",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 5,
        course: "B.Tech",
        branch: "CSE",
        file: "example.jpeg",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 6,
        course: "B.Tech",
        branch: "CSE",
        file: "example.docx",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 7,
        course: "B.Tech",
        branch: "CSE",
        file: "example.png",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 8,
        course: "B.Tech",
        branch: "CSE",
        file: "example.txt",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 9,
        course: "B.Tech",
        branch: "CSE",
        file: "example.ppt",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 10,
        course: "B.Tech",
        branch: "CSE",
        file: "example.jpeg",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
    {
        id: 11,
        course: "B.Tech",
        branch: "CSE",
        file: "example.docx",
        subject: "Computer Science",
        date: "05-02-2024",
        time: "9:30 A.M",
    },
];

const FileTypes = {
    pdf: 'pdf',
    jpg: 'jpg',
    txt: 'txt',
    jpeg: 'jpeg',
    docx: 'docx',
    ppt: 'ppt',
    png: 'png',
};

export const getIcon = (type) => {
    const IconComponents = {
        [FileTypes.pdf]: <GrDocumentPdf fontSize={23} className='text-red-500' />,
        [FileTypes.jpg]: <AiOutlineFileJpg fontSize={26} className='text-green-500' />,
        [FileTypes.txt]: <ImFileText2 fontSize={23} className='text-blue-600' />,
        [FileTypes.jpeg]: <SiJpeg fontSize={23} className='text-orange-500' />,
        [FileTypes.docx]: <TbFileTypeDocx fontSize={23} className='text-yellow-500' />,
        [FileTypes.ppt]: <RiFilePpt2Fill fontSize={23} className='text-purple-500' />,
        [FileTypes.png]: <BsFiletypePng fontSize={23} className='text-pink-500' />,
    };

    return IconComponents[type] || null;
};

const getFileExtension = (filename) => {
    const parts = filename.split('.');
    if (parts.length > 1) {
        return parts[parts.length - 1].toLowerCase();
    }
    return null;
};

export const getFileIcon = (filename) => {
    const fileExtension = getFileExtension(filename);
    return getIcon(fileExtension);
};




{/* <div className='w-full flex items-center justify-center gap-2 flex-col'>
    {productData.map((item, index) => (
        <div key={index} className="wrapper w-full border border-black rounded-xl flex justify-between ">
            <div className="type border-r px-2 border-black w-[10%] text-center py-3 flex items-center justify-center">{getFileIcon(item.type)}</div>
            <div className="name w-[40%] px-3 text-center py-3 flex items-center justify-center break-word">{item.name}</div>
            <div className="subject border-x px-3 border-black w-[40%] text-center py-3 flex items-center break-word justify-center">{item.subject}</div>
            <div className="info w-[10%] px-2 text-center py-3 flex items-center justify-center"><button onClick={() => OpenModal(item.type)} className='p-2 hover:bg-neutral-900/10 transition-all rounded-full'><BsInfoCircle /></button></div>
        </div>
    ))}
    {
        isModalOpen && <Modal icon={icon} />
    }
</div>  */}