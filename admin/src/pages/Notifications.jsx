import { FaUserPlus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { VscError } from "react-icons/vsc";


export const Notifications = () => {
  const notification = [
    {
      id: 1,
      title: "New Order",
      description: "You have received a new order.",
      time: "2 hours ago",
      icon: <FaOpencart />,
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "New User",
      description: "New user registered.",
      time: "3 hours ago",
      icon: <FaUserPlus />,
      color: "text-green-500"
    },
    {
      id: 3,
      title: "Server Error",
      description: "Your server has been down.",
      time: "3 hours ago",
      icon: <BiError />,
      color: "text-yellow-500"
    },
    {
      id: 4,
      title: "Order Cancelled",
      description: "One of your order has been cancelled.",
      time: "4 hours ago",
      icon: <VscError />,
      color: "text-red-500"
    },
    {
      id: 5,
      title: "New Order",
      description: "You have received a new order.",
      time: "5 hours ago",
      icon: <FaOpencart />,
      color: "text-blue-600"
    },
    {
      id: 6,
      title: "New User",
      description: "New user registered.",
      time: "6 hours ago",
      icon: <FaUserPlus />,
      color: "text-green-500"
    },
    {
      id: 7,
      title: "Server Error",
      description: "Your server has been down.",
      time: "7 hours ago",
      icon: <BiError />,
      color: "text-yellow-500"
    },
    {
      id: 8,
      title: "Order Cancelled",
      description: "One of your order has been cancelled.",
      time: "8 hours ago",
      icon: <VscError />,
      color: "text-red-500"
    },
    {
      id: 9,
      title: "New Order",
      description: "You have received a new order.",
      time: "9 hours ago",
      icon: <FaOpencart />,
      color: "text-blue-600"
    },
    {
      id: 10,
      title: "New User",
      description: "New user registered.",
      time: "10 hours ago",
      icon: <FaUserPlus />,
      color: "text-green-500"
    },
    {
      id: 11,
      title: "Server Error",
      description: "Your server has been down.",
      time: "11 hours ago",
      icon: <BiError />,
      color: "text-yellow-500"
    },
    {
      id: 12,
      title: "Order Cancelled",
      description: "One of your order has been cancelled.",
      time: "12 hours ago",
      icon: <VscError />,
      color: "text-red-500"
    },
  ];

  return (
    <div className='relative w-full pr-5 flex items-center justify-center gap-3 flex-col'>
      {
        notification.map((item) => (
          <div key={item.id} className={`flex items-center justify-between w-full px-5 py-2 border border-neutral-900 rounded-lg`}>
            <div className='flex items-center gap-5'>
              <div className={`text-3xl ${item.color}`}>{item.icon}</div>
              <div>
                <h1 className='text-lg font-semibold'>{item.title}</h1>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
            <p className='text-sm text-neutral-700'>{item.time}</p>
          </div>
        ))
      }
    </div>

  )
}
