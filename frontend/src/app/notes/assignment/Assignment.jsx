import { useState } from 'react';
import { RiInformationLine } from 'react-icons/ri';
import { CgFileDocument } from "react-icons/cg";

const assignments = [
  {
    id: 1,
    subject: "Mathematics",
    class: "1st Year",
    course: "Algebra",
    topic: "Solving Linear Equations",
    description: "Complete the exercises on solving linear equations.",
    givenDate: "2022-04-20",
    deadline: "2022-04-30",
    teacher: "Mr. Smith",
    createdAt: "2022-04-18",
  },
  {
    id: 2,
    subject: "Science",
    class: "2nd Year",
    course: "Biology",
    topic: "Cell Structure",
    description: "Write an essay on the structure and function of cells.",
    givenDate: "2022-04-22",
    deadline: "2022-05-05",
    teacher: "Ms. Johnson",
    createdAt: "2022-04-19",
  },
  {
    id: 3,
    subject: "English",
    class: "3rd Year",
    course: "Literature",
    topic: "Shakespearean Sonnets",
    description: "Analyze and interpret selected Shakespearean sonnets.",
    givenDate: "2022-04-25",
    deadline: "2022-05-10",
    teacher: "Mrs. Brown",
    createdAt: "2022-04-20",
  },
  {
    id: 4,
    subject: "History",
    class: "4th Year",
    course: "World History",
    topic: "The French Revolution",
    description: "Write a research paper on the causes and effects of the French Revolution.",
    givenDate: "2022-04-28",
    deadline: "2022-05-15",
    teacher: "Mr. Davis",
    createdAt: "2022-04-22",
  },
  // Add 10 more assignments
  {
    id: 5,
    subject: "Physics",
    class: "1st Year",
    course: "Mechanics",
    topic: "Newton's Laws of Motion",
    description: "Solve problems based on Newton's laws of motion.",
    givenDate: "2022-05-01",
    deadline: "2022-05-10",
    teacher: "Dr. Johnson",
    createdAt: "2022-04-30",
  },
  {
    id: 6,
    subject: "Chemistry",
    class: "2nd Year",
    course: "Organic Chemistry",
    topic: "Chemical Bonding",
    description: "Understand the concept of chemical bonding and its types.",
    givenDate: "2022-05-03",
    deadline: "2022-05-15",
    teacher: "Dr. Smith",
    createdAt: "2022-05-02",
  },
  {
    id: 7,
    subject: "Literature",
    class: "3rd Year",
    course: "American Literature",
    topic: "The Great Gatsby",
    description: "Read 'The Great Gatsby' and write a critical analysis.",
    givenDate: "2022-05-05",
    deadline: "2022-05-20",
    teacher: "Ms. Thompson",
    createdAt: "2022-05-04",
  },
  {
    id: 8,
    subject: "Geography",
    class: "4th Year",
    course: "Human Geography",
    topic: "Urbanization",
    description: "Study the process of urbanization and its impact.",
    givenDate: "2022-05-08",
    deadline: "2022-05-25",
    teacher: "Mr. Wilson",
    createdAt: "2022-05-07",
  },
  {
    id: 9,
    subject: "Computer Science",
    class: "1st Year",
    course: "Introduction to Programming",
    topic: "Basic Data Structures",
    description: "Learn about basic data structures such as arrays, linked lists, and stacks.",
    givenDate: "2022-05-10",
    deadline: "2022-05-30",
    teacher: "Dr. Brown",
    createdAt: "2022-05-09",
  },
  {
    id: 10,
    subject: "Economics",
    class: "2nd Year",
    course: "Microeconomics",
    topic: "Supply and Demand",
    description: "Understand the concepts of supply and demand and their applications.",
    givenDate: "2022-05-12",
    deadline: "2022-06-05",
    teacher: "Dr. Davis",
    createdAt: "2022-05-11",
  },
];


export const Assignment = () => {
  const [modalData, setModalData] = useState(null);

  const handleModal = (assignment) => {
    setModalData(assignment);
  };

  return (
    <>
      <h1 className='text-3xl font-semibold text-center mt-10'>Assignments</h1>
      <div className='w-full flex flex-col justify-start items-center gap-3 py-10'>
        {assignments.map((assignment) => (
          <div key={assignment.id} className='text-neutral-900 flex flex-row items-start justify-between w-[50%] h-fit px-3 py-3 gap-3 bg-gray-300 backdrop-blur-sm rounded-xl border border-neutral-600'>
            <span className="bg-slate-400/30 rounded-full p-2">
              <CgFileDocument fontSize={25} className="text-green-500" />
            </span>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <p onClick={() => handleModal(assignment)} className='cursor-pointer text-lg font-semibold'>{assignment.topic}</p>
                <RiInformationLine onClick={() => handleModal(assignment)} fontSize={20} className="text-blue-500 cursor-pointer" title="Info" />
              </div>
              <div className="flex items-center justify-between w-full">
                <p className='text-sm cursor-default font-normal text-neutral-800'><span className='font-medium'>{assignment.subject}</span> - {assignment.class}</p>
                <p className="text-xs cursor-default font-normal text-neutral-800"><span className='font-medium text-red-500'>Last Date</span> - {assignment.deadline}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Modal component for displaying assignment details */}
        {modalData && (
          <ModalInstance data={modalData} setModalData={setModalData} />
        )}
      </div>
    </>
  );
};

const ModalInstance = ({ data, setModalData }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="relative w-[50%] bg-white rounded-xl flex flex-col items-center justify-center gap-6 shadow-lg px-8 py-6">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl font-semibold text-neutral-900">Details</h2>
          <button onClick={() => setModalData(null)} className="px-4 py-1.5 bg-red-500 text-neutral-100 rounded-md focus:outline-none">Close</button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="text-lg font-semibold text-neutral-800">Topic:</div>
          <div className="text-lg text-neutral-900">{data.topic}</div>
          <div className="text-lg font-semibold text-neutral-800">Description:</div>
          <div className="text-lg text-neutral-900">{data.description}</div>
          <div className="text-lg font-semibold text-neutral-800">Subject:</div>
          <div className="text-lg text-neutral-900">{data.subject}</div>
          <div className="text-lg font-semibold text-neutral-800">Class:</div>
          <div className="text-lg text-neutral-900">{data.class}</div>
          <div className="text-lg font-semibold text-neutral-800">Course:</div>
          <div className="text-lg text-neutral-900">{data.course}</div>
          <div className="text-lg font-semibold text-neutral-800">Given Date:</div>
          <div className="text-lg text-neutral-900">{data.givenDate}</div>
          <div className="text-lg font-semibold text-neutral-800">Deadline:</div>
          <div className="text-lg text-neutral-900">{data.deadline}</div>
          <div className="text-lg font-semibold text-neutral-800">Teacher:</div>
          <div className="text-lg text-neutral-900">{data.teacher}</div>
        </div>
      </div>
    </div>
  );
};
