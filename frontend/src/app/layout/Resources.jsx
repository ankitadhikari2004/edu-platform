import { FaFolder, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

export const Resources = () => {
  const resources = [
    {
      id: 1,
      name: 'Web Development Guide',
      details: 'Comprehensive guide covering HTML, CSS, and JavaScript fundamentals.',
      type: 'folder',
    },
    {
      id: 2,
      name: 'Machine Learning Dataset',
      details: 'A collection of datasets for practicing machine learning algorithms.',
      type: 'file',
    },
    {
      id: 3,
      name: 'Digital Marketing Handbook',
      details: 'Essential handbook covering various digital marketing strategies and techniques.',
      type: 'file',
    },
    {
      id: 4,
      name: 'Python Programming Resources',
      details: 'Resources and tutorials for learning Python programming language.',
      type: 'file',
    },
    {
      id: 5,
      name: 'Graphic Design Essentials',
      details: 'Learn the basics of graphic design with these essential resources.',
      type: 'question_paper',
    },
    {
      id: 6,
      name: 'Finance and Investment Guide',
      details: 'Comprehensive guide to finance and investment strategies for beginners.',
      type: 'file',
    },
  ];

  return (
    <div className="px-6 py-2">
      {resources ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <div className="space-y-6">
            {resources.map(resource => (
              <div key={resource.id} className="bg-slate-100/80 rounded-lg shadow-md p-5">
                <div className="flex gap-3">
                  <div className='flex items-center justify-center bg-slate-200/90 rounded-full h-fit p-3'>
                    {resource.type === 'folder' ? (
                      <FaFolder fontSize={20} className="text-yellow-500" />
                    ) : resource.type === 'question_paper' ? (
                      <FaQuestionCircle fontSize={20} className="text-blue-500" />
                    ) : (
                      <FaFileAlt fontSize={20} className="text-gray-500" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{resource.name}</h3>
                    <p className="text-gray-600">{resource.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-lg">No resources available</p>
      )}
    </div>
  );
};