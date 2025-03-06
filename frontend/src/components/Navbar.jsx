import { useState, useContext, useEffect, useRef } from 'react';
import { PiUserBold } from "react-icons/pi";
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../context/Context';
import { HiMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const { user, isAuthenticated } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.closest(".toggle-button")
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 shadow-sm bg-gray-200 px-4 py-3">
      <div className="container relative mx-auto flex justify-between items-center">
        <Link to={'/'}>
          <div className="text-3xl font-semibold">Educate</div>
        </Link>

        <div className="flex flex-row-reverse md:flex-row items-center gap-4">
          <div className="hidden md:flex items-center gap-5">
            <NavLink to="/" className="font-medium">Home</NavLink>
            <NavLink to="/notes/study-material" className="font-medium">Notes</NavLink>
            <NavLink to="/career" className="font-medium">Career</NavLink>
            <NavLink to="/contact" className="font-medium">Contact</NavLink>
          </div>

          <div onClick={toggleMenu} className='flex items-center justify-center md:hidden cursor-pointer hover:bg-gray-300/80 p-1 h-9 w-9 rounded-full toggle-button'>
            <HiMenuAlt3 fontSize={30} />
          </div>

          <div className="flex items-center gap-2" ref={sidebarRef}>
            {isAuthenticated ? (
              <Link to={`/profile/${user._id}/me`} className="border border-slate-500 flex items-center gap-2 bg-neutral-500/50 rounded-full px-2 md:px-3 py-1 cursor-pointer">
                <PiUserBold fontSize={18} />
                <span className="text-sm md:text-base font-medium cursor-pointer select-none" id="user">Profile</span>
              </Link>
            ) : (
              <Link to={'/login'} className="border border-slate-500 flex items-center gap-2 bg-neutral-500/50 rounded-full px-3 py-1 cursor-pointer">
                <PiUserBold fontSize={18} />
                <span className="text-sm md:text-base font-medium cursor-pointer select-none" id="user">Login</span>
              </Link>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-12 right-0 h-screen w-[50%] bg-gray-200" ref={sidebarRef}>
            <div className="flex flex-col gap-4 items-center py-6">
              <NavLink to="/" className="font-medium text-xl">Home</NavLink>
              <NavLink to="/notes/study-material" className="font-medium text-xl">Notes</NavLink>
              <NavLink to="/career" className="font-medium text-xl">Career</NavLink>
              <NavLink to="/contact" className="font-medium text-xl">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
