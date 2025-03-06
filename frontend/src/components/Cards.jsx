import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";

export const Card = ({ item }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="border border-gray-100/80 bg-slate-100/80 shadow-lg rounded-lg overflow-hidden">
      <div className="flex gap-2 p-4">
        <div className="flex items-center justify-center min-w-16 min-h-16 w-16 h-16 rounded-full bg-slate-300/80 p-3">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-gray-600 mb-4">{truncateText(item.description, 80)}</p>
        </div>
      </div>
      <div className="p-4">
        <Link to={item.link} className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Start Exploring <FiExternalLink className="ml-2" />
        </Link>
      </div>
    </div>
  );
};
