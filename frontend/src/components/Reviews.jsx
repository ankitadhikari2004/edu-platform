import { FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="max-w-md min-w-96 mx-auto rounded-md overflow-hidden shadow-md bg-slate-100/80 border border-slate-500/20 transition-all duration-200 hover:-translate-y-1">
                <div className="flex flex-col p-6 h-full">
                    <div className="flex items-center mb-4">
                        <img
                            className="h-10 w-10 rounded-full mr-4"
                            src={review.profile}
                            alt={`Profile of ${review.name}`}
                        />
                        <div>
                            <h3 className="text-lg font-bold">{review.name}</h3>
                            <p className="text-gray-500 text-sm">{review.position}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    <a
                        href={review.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-max text-blue-500 hover:text-blue-600 bg-blue-200 rounded-md border border-blue-400 text-sm mt-auto mb-0 px-2 py-1"
                    >
                        <FiExternalLink className="mr-1" />
                        Visit Profile
                    </a>
                </div>
            </div>
        </>
    );
};
