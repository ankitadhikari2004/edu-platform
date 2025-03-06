import { useContext, useEffect } from "react";
import image from "../../assets/Profile.png";
import { Context } from '../../context/Context';
import { BsClockHistory } from 'react-icons/bs';
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { LiaUserCheckSolid, LiaUser, LiaUserCogSolid } from "react-icons/lia";
import IsOnline from "is-online";

export const Profile = () => {
  const { user, setIsOnline } = useContext(Context);

  useEffect(() => {
    const fetchOnline = async () => {
      const online = await IsOnline();
      setIsOnline(online);
    };

    fetchOnline();
    console.log(user)

  }, [setIsOnline]);

  return (
    <div className="px-6 py-2">
      <h2 className="text-3xl font-semibold mb-6">Account Overview</h2>
      <div className="flex flex-col lg:flex-row items-start gap-16">
        <div className="md:w-1/4 h-max flex flex-col items-center justify-center mb-6 md:mb-0">
          <img className="w-44 h-44 rounded-full border-4 border-slate-100/80 shadow-md" src={image} alt={user?.username} />
          <h1 className="text-3xl font-semibold mt-4 text-center text-gray-800">{user?.username && user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-2 rounded-lg gap-5">
          <div>
            <p className="text-gray-600 mb-4 font-medium text-lg">Profile Details</p>
            <div className="flex flex-col gap-4">
              <ProfileDetail label="Username" value={user?.username} icon={<LiaUser />} />
              <ProfileDetail label="Email" value={user?.email} icon={<IoMailOutline />} />
              {user?.admin && <ProfileDetail label="Role" value="Admin" icon={<LiaUserCheckSolid />} />}
              {user?.root && <ProfileDetail label="Super Admin" value="Yes" icon={<LiaUserCogSolid />} />}
              <ProfileDetail label="Phone" value={user?.phone} icon={<FiPhone />} />
              <ProfileDetail label="User Since" value={user?.createdAt && new Date(user?.createdAt).toLocaleString(undefined, { hour12: true })} icon={<BsClockHistory />} />
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-4 font-medium text-lg">Academic Details</p>
            <div className="flex flex-col gap-4">
              <ProfileDetail label="Course" value={user?.course} icon={<IoSchoolOutline />} />
              <ProfileDetail label="College" value={user?.college} icon={<LuBuilding2 />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileDetail = ({ label, value, icon }) => {
  return (
    <div className="flex items-center">
      {icon && <span className="mr-2 text-xl">{icon}</span>}
      <p className="font-semibold text-gray-800">{label}:</p>
      <p className="ml-2">{value}</p>
    </div>
  );
};
