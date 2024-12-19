import React, { useEffect, useState } from "react";
import { BsChat } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate) - new Date();
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft("It's time!");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100">
      <h3 className="text-3xl md:text-4xl font-semibold mb-4 animate-pulse">
        Time Left Until My Farewell
      </h3>
      <p className="text-xl md:text-2xl font-medium mb-8">{timeLeft}</p>

      {/* Buttons Section */}
      <div className="flex space-x-8">
        <Link
          to="/wish"
          className="flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          <BsChat size={20} className="mr-2" />
          Wish
        </Link>
        <Link
          to="/profile"
          className="flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          <CiUser size={20} className="mr-2" />
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Countdown;
