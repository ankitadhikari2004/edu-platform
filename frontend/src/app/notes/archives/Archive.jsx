import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';

const archivedData = [
  {
    id: 1,
    type: 'Question Paper',
    subject: 'Mathematics',
    class: '1st Year',
    course: 'Algebra',
    topic: 'Solving Quadratic Equations',
    paperUrl: 'https://example.com/archived/question-papers/mathematics-algebra-solving-quadratic-equations.pdf',
    description: 'This question paper contains questions on solving quadratic equations.',
    archivedDate: '2022-04-10',
  },
  {
    id: 2,
    type: 'Notes',
    subject: 'Science',
    class: '2nd Year',
    course: 'Physics',
    topic: 'Mechanics',
    notesUrl: 'https://example.com/archived/notes/science-physics-mechanics.pdf',
    description: 'Detailed notes on mechanics covering various topics.',
    archivedDate: '2022-03-25',
  },
  {
    id: 3,
    type: 'Exercise',
    subject: 'Chemistry',
    class: '3rd Year',
    course: 'Organic Chemistry',
    topic: 'Reaction Mechanisms',
    exerciseUrl: 'https://example.com/archived/exercises/chemistry-organic-reaction-mechanisms.pdf',
    description: 'Practice exercise on reaction mechanisms in organic chemistry.',
    archivedDate: '2022-03-15',
  },
  {
    id: 4,
    type: 'Question Paper',
    subject: 'Physics',
    class: '1st Year',
    course: 'Mechanics',
    topic: 'Newton\'s Laws of Motion',
    paperUrl: 'https://example.com/archived/question-papers/physics-mechanics-newtons-laws.pdf',
    description: 'This question paper contains questions on Newton\'s Laws of Motion.',
    archivedDate: '2022-05-01',
  },
  {
    id: 5,
    type: 'Notes',
    subject: 'Chemistry',
    class: '2nd Year',
    course: 'Inorganic Chemistry',
    topic: 'Chemical Bonding',
    notesUrl: 'https://example.com/archived/notes/chemistry-inorganic-chemical-bonding.pdf',
    description: 'Detailed notes on chemical bonding in inorganic chemistry.',
    archivedDate: '2022-05-05',
  },
  {
    id: 6,
    type: 'Exercise',
    subject: 'Biology',
    class: '3rd Year',
    course: 'Genetics',
    topic: 'Mendelian Genetics',
    exerciseUrl: 'https://example.com/archived/exercises/biology-genetics-mendelian-genetics.pdf',
    description: 'Practice exercise on Mendelian genetics.',
    archivedDate: '2022-05-10',
  },
  {
    id: 7,
    type: 'Question Paper',
    subject: 'Mathematics',
    class: '2nd Year',
    course: 'Calculus',
    topic: 'Differentiation',
    paperUrl: 'https://example.com/archived/question-papers/mathematics-calculus-differentiation.pdf',
    description: 'This question paper contains questions on differentiation.',
    archivedDate: '2022-05-15',
  },
  {
    id: 8,
    type: 'Notes',
    subject: 'Physics',
    class: '3rd Year',
    course: 'Thermodynamics',
    topic: 'Laws of Thermodynamics',
    notesUrl: 'https://example.com/archived/notes/physics-thermodynamics-laws-of-thermodynamics.pdf',
    description: 'Detailed notes on the laws of thermodynamics in physics.',
    archivedDate: '2022-05-20',
  },
  {
    id: 9,
    type: 'Exercise',
    subject: 'Chemistry',
    class: '2nd Year',
    course: 'Organic Chemistry',
    topic: 'Hydrocarbons',
    exerciseUrl: 'https://example.com/archived/exercises/chemistry-organic-hydrocarbons.pdf',
    description: 'Practice exercise on hydrocarbons in organic chemistry.',
    archivedDate: '2022-05-25',
  },
  {
    id: 10,
    type: 'Question Paper',
    subject: 'Biology',
    class: '1st Year',
    course: 'Ecology',
    topic: 'Ecosystems',
    paperUrl: 'https://example.com/archived/question-papers/biology-ecology-ecosystems.pdf',
    description: 'This question paper contains questions on ecosystems.',
    archivedDate: '2022-05-30',
  },
];

export const Archive = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Archived Data</h1>
      {archivedData.map((data) => (
        <div key={data.id} className="text-neutral-900 flex flex-col items-start justify-between w-[50%] h-fit px-3 py-3 gap-1 bg-gray-300 backdrop-blur-sm rounded-xl border border-neutral-600 mb-6">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="bg-slate-400/30 rounded-full p-2">
                <IoDocumentTextOutline fontSize={35} className="text-red-500" />
              </span>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">{data.type}</p>
                <p className="text-base text-neutral-700 font-normal">{data.subject} - {data.course}</p>
              </div>
            </div>
            {data.type === 'Question Paper' && (
              <a href={data.paperUrl} download className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-600 focus:outline-none">
                <FiDownload fontSize={16} />
                <span className="text-xs">Download</span>
              </a>
            )}
            {data.type === 'Notes' && (
              <a href={data.notesUrl} download className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-600 focus:outline-none">
                <FiDownload fontSize={16} />
                <span className="text-xs">Download</span>
              </a>
            )}
            {data.type === 'Exercise' && (
              <a href={data.exerciseUrl} download className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-600 focus:outline-none">
                <FiDownload fontSize={16} />
                <span className="text-xs">Download</span>
              </a>
            )}
          </div>
          <p className="text-gray-600"><span className="font-medium">Description:</span> {data.description}</p>
          <p className="text-gray-600"><span className="font-medium">Archived Date:</span> {data.archivedDate}</p>
        </div>
      ))}
    </div>
  );
};
