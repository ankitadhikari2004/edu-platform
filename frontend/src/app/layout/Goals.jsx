import React from 'react';
import { IoMdCalendar, IoMdAlarm } from 'react-icons/io';

export const Goals = () => {
  const goals = [
    {
      id: 1,
      title: 'Complete Web Development Course',
      description: 'Finish all the modules and projects in the web development course.',
      date: 'April 30, 2024',
      time: '10:00 AM',
    },
    {
      id: 2,
      title: 'Prepare for Machine Learning Test',
      description: 'Study and practice machine learning algorithms for the upcoming test.',
      date: 'May 10, 2024',
      time: '2:00 PM',
    },
    {
      id: 3,
      title: 'Attend Digital Marketing Workshop',
      description: 'Participate in a workshop to learn advanced digital marketing strategies.',
      date: 'May 15, 2024',
      time: '9:00 AM',
    },
  ];

  return (
    <div className="px-6 py-2">
      {goals ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">Goals</h2>
          <div className="space-y-6">
            {goals.map(goal => (
              <div key={goal.id} className="bg-slate-100/80 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <IoMdCalendar className="text-gray-500 mr-2" />
                    <p className="text-gray-500">{goal.date}</p>
                  </div>
                  <div className="flex items-center">
                    <IoMdAlarm className="text-gray-500 mr-2" />
                    <p className="text-gray-500">{goal.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-lg">No goals available</p>
      )}
    </div>
  );
};
