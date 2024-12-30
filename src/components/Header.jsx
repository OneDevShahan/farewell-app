import React from "react";
import { BiUser } from "react-icons/bi";
import { CiBrightnessDown, CiBrightnessUp } from "react-icons/ci";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between px-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:bg-gradient-to-r">
      {/* Left side: Name */}
      <Link
        to="/"
        className="text-white text-2xl p-3 m-2 font-bold flex items-center"
      >
        Farewell 🎉
      </Link>

      {/* Center: Navigation Links */}
      <div className="flex items-center space-x-8 text-white">
        <Link
          to="/wish"
          className="flex items-center justify-center hover:text-gray-300 transition-colors"
          title="Wish Me Luck"
        >
          <HiOutlineChatBubbleOvalLeft size={24} />
        </Link>
        <Link
          to="/profile"
          className="flex items-center justify-center hover:text-gray-300 transition-colors"
          title="Profile"
        >
          <BiUser size={24} />
        </Link>
        <Link
          to="/contact"
          className="flex items-center justify-center hover:text-gray-300 transition-colors"
          title="Contact Me"
        >
          <IoCallOutline size={24} />
        </Link>
      </div>

      {/* Right side: Dark Mode Toggle Button */}
      <button
        className="flex items-center justify-center text-white w-10 h-10 rounded-full hover:bg-gray-700 transition-colors"
        onClick={toggleTheme}
        title={darkMode ? "Light Mode" : "Dark Mode"}
      >
        {darkMode ? (
          <CiBrightnessDown size={24} />
        ) : (
          <CiBrightnessUp size={24} />
        )}
      </button>
    </header>
  );
};

export default Header;
