import React from 'react';
import { BsPlayCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

export const Courses = () => {
  const courses = [
    {
      id: 1,
      name: 'Web Development Bootcamp',
      description: 'Learn web development from scratch with this comprehensive bootcamp course.',
      difficulty: 'Intermediate',
    },
    {
      id: 2,
      name: 'Machine Learning Fundamentals',
      description: 'Explore the basics of machine learning and its applications in various industries.',
      difficulty: 'Advanced',
    },
    {
      id: 3,
      name: 'Digital Marketing Essentials',
      description: 'Master the fundamentals of digital marketing and grow your online presence.',
      difficulty: 'Beginner',
    },
    {
      id: 4,
      name: 'iOS App Development',
      description: 'Create powerful and engaging iOS applications using Swift and Xcode.',
      difficulty: 'Intermediate',
    },
    {
      id: 5,
      name: 'Data Structures and Algorithms',
      description: 'Master the fundamentals of data structures and algorithms for efficient problem-solving.',
      difficulty: 'Advanced',
    },
    {
      id: 6,
      name: 'Graphic Design Basics',
      description: 'Learn the principles and techniques of graphic design for digital and print media.',
      difficulty: 'Beginner',
    },
    {
      id: 7,
      name: 'Python for Data Science',
      description: 'Explore Python programming language and its applications in data science.',
      difficulty: 'Intermediate',
    },
    {
      id: 8,
      name: 'Game Development with Unity',
      description: 'Create your own games using Unity game engine and C# programming language.',
      difficulty: 'Advanced',
    },
    {
      id: 9,
      name: 'Social Media Marketing',
      description: 'Learn how to create effective marketing strategies for social media platforms.',
      difficulty: 'Beginner',
    },
    {
      id: 10,
      name: 'Blockchain Fundamentals',
      description: 'Explore the basics of blockchain technology and its real-world applications.',
      difficulty: 'Intermediate',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-500';
      case 'Intermediate':
        return 'text-yellow-500';
      case 'Advanced':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="px-6 py-2">
      {courses ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course.id} className="flex flex-col rounded-lg shadow-md p-4 bg-gray-100/80">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg h-32 mb-4">
                  <BsPlayCircle className="text-4xl text-blue-500" />
                </div>
                <div className="flex flex-col h-max">
                  <h3 className="text-lg font-semibold mb-1">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
                <div className="flex flex-col gap-3 mt-auto mb-0">
                  <p className='font-medium text-gray-700'><span>Difficulty:</span> <span className={`${getDifficultyColor(course.difficulty)}`}>{course.difficulty}</span></p>
                  <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"><span>Start Learning</span> <IoIosArrowForward fontSize={20} className='mt-1' /></button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-lg">No courses available</p>
      )}
    </div>
  );
};

