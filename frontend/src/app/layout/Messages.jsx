import React from 'react';
import { FaEnvelope, FaUser, FaCalendar } from 'react-icons/fa';

export const Messages = () => {
  const messages = [
    {
      id: 1,
      subject: 'Regarding upcoming webinar',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tellus tempus, lobortis sapien sed, placerat lorem.',
      sender: 'John Doe',
      date: 'April 20, 2024',
    },
    {
      id: 2,
      subject: 'Assignment submission deadline extension',
      content: 'Vivamus vitae sapien ultricies, volutpat eros eget, lacinia nulla. Suspendisse non dapibus est.',
      sender: 'Jane Smith',
      date: 'April 18, 2024',
    },
    {
      id: 3,
      subject: 'Important announcement: Server maintenance',
      content: 'Fusce feugiat tortor eu neque interdum eleifend. Etiam non convallis lacus, vel dapibus neque.',
      sender: 'Admin',
      date: 'April 15, 2024',
    },
  ];

  return (
    <div className="px-6 py-2">
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      {messages.length > 0 ? (
        <div className="space-y-6">
          {messages.map(message => (
            <div key={message.id} className="bg-slate-100/80 rounded-lg shadow-md p-5">
              <h3 className="text-lg font-semibold">{message.subject}</h3>
              <p className="text-gray-600 mb-4">{message.content}</p>
              <div className="flex items-center text-gray-500">
                <FaUser className="mr-2" />
                <p className='text-gray-500 font-medium'>Sent by: {message.sender}</p>
                <div className="ml-auto flex items-center">
                  <FaCalendar className="mr-2" />
                  <p>{message.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">No messages available</p>
      )}
    </div>
  );
};