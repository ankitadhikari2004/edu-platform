import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const NotesCard = ({ item }) => {
    const renderStars = (starCount) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className={index < starCount ? "text-yellow-400" : "text-neutral-500/50"} />
        ));
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    return (
        <div key={item?._id} className="w-[17rem] h-[20rem] border border-neutral-500 rounded-lg overflow-hidden">
            <Link to={item?.link}>
                <img src={item?.image} className="h-[60%] w-full object-cover" alt={item?.title} />
            </Link>
            <div className="flex flex-col h-[40%] w-full px-2 py-2">
                <div className="flex items-stretch justify-between gap-1">
                    <div className="flex w-max items-center justify-center tracking-wide bg-gray-600/20 rounded-md py-1 px-3 text-neutral-900 text-xs gap-2">
                        <p className="font-medium text-sm truncate">Price:</p>
                        <p className="font-medium text-sm truncate">₹{item.price}</p>
                    </div>
                    <div className="flex items-center justify-center tracking-wide bg-gray-600/20 rounded-md py-1 px-3 text-yellow-400 text-xs">
                        {renderStars(item.star)}
                    </div>
                </div>
                <Link to={item?.link}>
                    <p className="mt-2 text-lg font-medium leading-snug">{truncateText(item?.title, 25)}</p>
                </Link>
                <p className="text-base">{truncateText(item?.description, 55)}</p>
            </div>
        </div>
    )
}
