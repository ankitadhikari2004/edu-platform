import { useContext } from 'react';
import { IoMdBook, IoMdStats, IoMdPerson, IoMdSchool, IoIosPeople, IoMdCalendar, IoMdPeople, IoIosGlobe } from 'react-icons/io';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Context } from '../../context/Context';
import Chart from 'react-google-charts';


export const Overview = () => {
  const { user } = useContext(Context);

  const renderOverviewBasedOnRole = () => {
    switch (user.role) {
      case 'student':
        return <AdminOverview user={user} />;
      case 'teacher':
        return <TeacherOverview user={user} />;
      case 'admin':
        return <AdminOverview user={user} />;
      default:
        return <div>User role not recognized</div>;
    }
  };

  return (
    <div className="px-6 py-2">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      {renderOverviewBasedOnRole()}
    </div>
  );
};

const StudentOverview = ({ user }) => {
  const coursesCompleted = 15;
  const lessonsCompleted = 120;
  const nextCourse = { title: 'Advanced Data Science', progress: '45%' };
  const upcomingLessons = [
    { title: 'Introduction to Machine Learning', date: 'April 25, 2024' },
    { title: 'Web Development Fundamentals', date: 'April 28, 2024' },
    { title: 'Digital Marketing Strategies', date: 'May 2, 2024' },
    { title: 'Advanced JavaScript Techniques', date: 'May 5, 2024' },
    { title: 'Data Visualization with D3.js', date: 'May 8, 2024' },
    { title: 'Mobile App Development Basics', date: 'May 12, 2024' },
    { title: 'Cloud Computing Fundamentals', date: 'May 15, 2024' },
    { title: 'Cybersecurity Essentials', date: 'May 18, 2024' },
    { title: 'UI/UX Design Principles', date: 'May 22, 2024' },
    { title: 'Project Management Fundamentals', date: 'May 25, 2024' },
    { title: 'Entrepreneurship and Business Strategy', date: 'May 28, 2024' },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Courses Completed */}
        <div className="p-4 bg-blue-100 border border-blue-300/50 rounded-lg flex items-center justify-center">
          <div className="mr-4">
            <IoMdBook fontSize={55} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Courses Completed</h3>
            <p className="text-gray-600">{coursesCompleted}</p>
          </div>
        </div>
        {/* Lessons Completed */}
        <div className="p-4 bg-green-100 border border-green-300/50 rounded-lg flex items-center justify-center">
          <div className="mr-4">
            <IoMdStats fontSize={50} className="text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Lessons Completed</h3>
            <p className="text-gray-600">{lessonsCompleted}</p>
          </div>
        </div>
        {/* Next Course */}
        <div className="p-4 bg-yellow-100 border border-yellow-300/50 rounded-lg flex items-center justify-center">
          <div className="mr-4">
            <FaRegCalendarAlt fontSize={45} className="text-yellow-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Next Course</h3>
            <p className="text-gray-600">{nextCourse.title}</p>
            <p className="text-gray-600">Progress: {nextCourse.progress}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FaRegCalendarAlt className="text-2xl text-gray-600 mr-2" />
          Upcoming Lessons
        </h3>
        <ul className="space-y-4">
          {upcomingLessons.map((lesson, index) => (
            <li key={index} className="bg-slate-100/80 p-4 border border-gray-200 rounded-lg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IoMdBook fontSize={24} className="text-blue-500 mt-1" />
                <h4 className="text-lg font-semibold">{lesson.title}</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaRegCalendarAlt fontSize={16} className="text-gray-500" />
                {lesson.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const TeacherOverview = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Teacher Overview</h2>
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoMdPerson fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-gray-600">You are currently teaching {user.totalStudents} students.</p>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoMdSchool fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Courses</h3>
            <p className="text-gray-600">You have created {user.totalCourses} courses.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoIosPeople fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Classes Today</h3>
            <p className="text-gray-600">You have {user.totalClassesToday} classes scheduled for today.</p>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoMdCalendar fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Last Day Class Details</h3>
            <p className="text-gray-600">You conducted {user.lastDayClasses} classes yesterday.</p>
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Total Students and Courses Over Time</h3>
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={user.chartData}
          options={{
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Count',
            },
          }}
        />
      </div>
    </div>
  );
}

const AdminOverview = ({ user }) => {
  const chartData = [
    ['Date', 'Total Students', 'Total Courses'],
    ['2023-01-01', 100, 20],
    ['2023-02-01', 120, 25],
    ['2023-03-01', 150, 30],
    ['2023-04-01', 180, 35],
    ['2023-05-01', 200, 40],
    ['2023-06-01', 220, 45],
    ['2023-07-01', 240, 50],
    ['2023-08-01', 260, 55],
    ['2023-09-01', 280, 60],
    ['2023-10-01', 300, 65],
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Overview</h2>
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoMdPeople fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-gray-600">There are {user.totalStudents} registered students.</p>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoMdSchool fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Teachers</h3>
            <p className="text-gray-600">There are {user.totalTeachers} registered teachers.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoIosPeople fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Overall Classes Today</h3>
            <p className="text-gray-600">Total classes scheduled for today: {user.totalClassesToday}.</p>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <IoIosGlobe fontSize={40} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Overall Resources</h3>
            <p className="text-gray-600">Total resources available: {user.totalResources}.</p>
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Overall Students and Teachers Over Time</h3>
        <Chart
          width={'25rem'}
          height={'25rem'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Count',
            },
          }}
        />
      </div>
    </div>
  );
}