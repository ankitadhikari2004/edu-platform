import { MdArticle } from "react-icons/md";

const researchPapers = [
  {
    id: 1,
    title: 'Exploring the Impact of Artificial Intelligence on Healthcare',
    authors: ['John Doe', 'Jane Smith'],
    journal: 'Journal of Healthcare Technology',
    publicationDate: '2022-03-15',
    paperUrl: 'https://example.com/research-papers/ai-healthcare.pdf',
  },
  {
    id: 2,
    title: 'The Future of Renewable Energy: Trends and Challenges',
    authors: ['Alice Johnson', 'Michael Brown', 'Emily Davis'],
    journal: 'Renewable Energy Journal',
    publicationDate: '2022-04-20',
    paperUrl: 'https://example.com/research-papers/renewable-energy.pdf',
  },
  {
    id: 3,
    title: 'Advancements in Quantum Computing',
    authors: ['David Wilson', 'Sarah Thompson'],
    journal: 'Quantum Computing Review',
    publicationDate: '2022-05-10',
    paperUrl: 'https://example.com/research-papers/quantum-computing.pdf',
  },
  {
    id: 4,
    title: 'Applications of Machine Learning in Finance',
    authors: ['Robert Johnson', 'Emma White'],
    journal: 'Finance Technology Journal',
    publicationDate: '2022-05-20',
    paperUrl: 'https://example.com/research-papers/machine-learning-finance.pdf',
  },
  {
    id: 5,
    title: 'Climate Change and Global Warming: Impacts and Solutions',
    authors: ['Mark Davis', 'Sophia Brown'],
    journal: 'Climate Science Journal',
    publicationDate: '2022-06-05',
    paperUrl: 'https://example.com/research-papers/climate-change.pdf',
  },
  {
    id: 6,
    title: 'Advancements in Medical Imaging Technologies',
    authors: ['Jennifer Wilson', 'Daniel Evans'],
    journal: 'Medical Imaging Review',
    publicationDate: '2022-06-15',
    paperUrl: 'https://example.com/research-papers/medical-imaging.pdf',
  },
  {
    id: 7,
    title: 'Future Prospects of Space Exploration',
    authors: ['Laura Brown', 'James Taylor'],
    journal: 'Space Science Journal',
    publicationDate: '2022-07-01',
    paperUrl: 'https://example.com/research-papers/space-exploration.pdf',
  },
  {
    id: 8,
    title: 'Impact of Social Media on Mental Health',
    authors: ['Sophia Wilson', 'Michael Johnson'],
    journal: 'Psychology Review',
    publicationDate: '2022-07-15',
    paperUrl: 'https://example.com/research-papers/social-media-mental-health.pdf',
  },
  {
    id: 9,
    title: 'Future Trends in Artificial Intelligence and Robotics',
    authors: ['Emma Brown', 'David Smith'],
    journal: 'AI Robotics Journal',
    publicationDate: '2022-08-01',
    paperUrl: 'https://example.com/research-papers/ai-robotics.pdf',
  },
  {
    id: 10,
    title: 'Advancements in Sustainable Agriculture',
    authors: ['Olivia Johnson', 'Noah Evans'],
    journal: 'Agricultural Technology Review',
    publicationDate: '2022-08-15',
    paperUrl: 'https://example.com/research-papers/sustainable-agriculture.pdf',
  },
];

export const Research = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Research Papers</h1>
      {researchPapers.map((paper) => (
        <div key={paper.id} className="text-neutral-900 flex flex-col items-start justify-between w-[60%] h-fit px-3 py-3 gap-1 bg-gray-300 backdrop-blur-sm rounded-xl border border-neutral-600 mb-6">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-start gap-2">
              <span className="bg-slate-400/30 rounded-full p-2">
                <MdArticle fontSize={30} className="text-orange-500" />
              </span>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">{paper.title}</p>
                <p className="text-base text-neutral-700 font-normal"><span className="font-medium">Authors:</span> {paper.authors.join(', ')}</p>
                <p className="text-base text-neutral-700 font-normal"><span className="font-medium">Journal:</span> {paper.journal}</p>
                <p className="text-base text-neutral-700 font-normal"><span className="font-medium">Published:</span> {paper.publicationDate}</p>
              </div>
            </div>
            <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1.5 rounded-md hover:bg-blue-600 focus:outline-none">
              <button type="button" className="text-xs text-nowrap">Read Paper</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
