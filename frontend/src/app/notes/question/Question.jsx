import { FiDownload } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

const questions = [
  {
    id: 1,
    subject: "Mathematics",
    class: "1st Year",
    course: "Algebra",
    topic: "Solving Linear Equations",
    paperUrl: "https://example.com/questions/mathematics-algebra-solving-linear-equations.pdf",
    description: "This question paper contains questions on solving linear equations.",
    createdAt: "2022-04-18",
  },
  {
    id: 2,
    subject: "Science",
    class: "2nd Year",
    course: "Biology",
    topic: "Cell Structure",
    paperUrl: "https://example.com/questions/science-biology-cell-structure.pdf",
    description: "This question paper contains questions on cell structure.",
    createdAt: "2022-04-19",
  },
  {
    id: 3,
    subject: "English",
    class: "3rd Year",
    course: "Literature",
    topic: "Shakespearean Sonnets",
    paperUrl: "https://example.com/questions/english-literature-shakespearean-sonnets.pdf",
    description: "This question paper contains questions on Shakespearean sonnets.",
    createdAt: "2022-04-20",
  },
  // Additional questions
  {
    id: 4,
    subject: "Physics",
    class: "2nd Year",
    course: "Mechanics",
    topic: "Newton's Laws of Motion",
    paperUrl: "https://example.com/questions/physics-mechanics-newtons-laws.pdf",
    description: "This question paper contains questions on Newton's Laws of Motion.",
    createdAt: "2022-04-21",
  },
  {
    id: 5,
    subject: "Chemistry",
    class: "1st Year",
    course: "Inorganic Chemistry",
    topic: "Chemical Bonding",
    paperUrl: "https://example.com/questions/chemistry-inorganic-chemical-bonding.pdf",
    description: "This question paper contains questions on chemical bonding.",
    createdAt: "2022-04-22",
  },
  {
    id: 6,
    subject: "Biology",
    class: "3rd Year",
    course: "Genetics",
    topic: "Mendelian Genetics",
    paperUrl: "https://example.com/questions/biology-genetics-mendelian-genetics.pdf",
    description: "This question paper contains questions on Mendelian genetics.",
    createdAt: "2022-04-23",
  },
  {
    id: 7,
    subject: "Mathematics",
    class: "2nd Year",
    course: "Calculus",
    topic: "Differentiation",
    paperUrl: "https://example.com/questions/mathematics-calculus-differentiation.pdf",
    description: "This question paper contains questions on differentiation.",
    createdAt: "2022-04-24",
  },
  {
    id: 8,
    subject: "Physics",
    class: "3rd Year",
    course: "Thermodynamics",
    topic: "Laws of Thermodynamics",
    paperUrl: "https://example.com/questions/physics-thermodynamics-laws-of-thermodynamics.pdf",
    description: "This question paper contains questions on the laws of thermodynamics.",
    createdAt: "2022-04-25",
  },
  {
    id: 9,
    subject: "Chemistry",
    class: "2nd Year",
    course: "Organic Chemistry",
    topic: "Hydrocarbons",
    paperUrl: "https://example.com/questions/chemistry-organic-hydrocarbons.pdf",
    description: "This question paper contains questions on hydrocarbons.",
    createdAt: "2022-04-26",
  },
  {
    id: 10,
    subject: "Biology",
    class: "1st Year",
    course: "Ecology",
    topic: "Ecosystems",
    paperUrl: "https://example.com/questions/biology-ecology-ecosystems.pdf",
    description: "This question paper contains questions on ecosystems.",
    createdAt: "2022-04-27",
  },
];

export const Question = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Question Papers</h1>
      {questions.map(question => (
        <div key={question.id} className='text-neutral-900 flex flex-col items-start justify-between w-[50%] h-fit px-3 py-3 gap-1 bg-gray-300 backdrop-blur-sm rounded-xl border border-neutral-600 mb-6'>
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="bg-slate-400/30 rounded-full p-2">
                <IoDocumentTextOutline fontSize={35} className="text-red-500" />
              </span>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">{question.subject} - {question.course}</p>
                <p className="text-base text-neutral-700 font-normal"><span className='font-medium'>{question.topic}</span> - {question.class}</p>
              </div>
            </div>
            <a href={question.paperUrl} download className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-600 focus:outline-none">
              <FiDownload fontSize={16} />
              <span className="text-xs">Download</span>
            </a>
          </div>
          <p className="text-gray-600"><span className='font-medium'>Description:</span> {question.description}</p>
        </div>
      ))}
    </div>
  );
};