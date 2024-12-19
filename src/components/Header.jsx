import React from "react";
import { BsChat } from "react-icons/bs";
import { CiBrightnessDown, CiBrightnessUp, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"; // Import Link for routing

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between px-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:bg-gradient-to-r">
      {/* Left side: Name */}
      <Link to="/" className="text-white text-2xl p-3 m-2 font-bold flex items-center">
        Farewell🎉
      </Link>

      {/* Center: Navigation Links */}
      <div className="flex items-center space-x-8 text-white">
        <Link
          to="/wish"
          className="flex items-center justify-center hover:text-gray-300 transition-colors"
          title="Wish Me Luck"
        >
          <BsChat size={24} />
        </Link>
        <Link
          to="/profile"
          className="flex items-center justify-center hover:text-gray-300 transition-colors"
          title="Profile"
        >
          <CiUser size={24} />
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
