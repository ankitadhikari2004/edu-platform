import { IoMailOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BsCalendar2Minus } from "react-icons/bs";


export const Notification = () => {
    const notifications = [
        {
            id: 1,
            type: "message",
            content: "You have a new message from John Doe.",
            date: "2024-04-25",
        },
        {
            id: 2,
            type: "success",
            content: "Your payment was successful.",
            date: "2024-04-24",
        },
        {
            id: 3,
            type: "reminder",
            content: "Reminder: Submit your assignment by tomorrow.",
            date: "2024-04-23",
        },
        {
            id: 4,
            type: "alert",
            content: "Alert: Your subscription will expire soon.",
            date: "2024-04-22",
        },
        {
            id: 5,
            type: "error",
            content: "Error: Unable to process your request.",
            date: "2024-04-21",
        },
    ];

    const getIcon = (type) => {
        switch (type) {
            case "message":
                return <IoMailOutline className="text-orange-500" />;
            case "success":
                return <FaCheck className="text-green-500" />;
            case "reminder":
                return <BsCalendar2Minus className="text-blue-500" />;
            case "alert":
                return <GoAlert className="text-yellow-500" />;
            case "error":
                return <MdOutlineErrorOutline className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="px-6 py-2">
            {notifications && notifications.length > 0 ? (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                    <ul>
                        {notifications.map((notification) => (
                            <li key={notification.id} className="py-2">
                                <div className="flex justify-between items-center bg-slate-100/80 rounded-md p-5">
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-gray-300/80 p-2 rounded-full">{getIcon(notification.type)}</span>
                                        <p className="text-lg font-semibold">{notification.content}</p>
                                    </div>
                                    <p className="text-sm text-gray-500">{notification.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p className="text-lg text-gray-500">No notifications available</p>
            )}
        </div>
    );
};
