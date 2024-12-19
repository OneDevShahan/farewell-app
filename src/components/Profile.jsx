import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Shahan Ahmad</h1>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="text-center">
        Hi, I'm <strong>Shahan Ahmad</strong>! It's been an incredible journey
        here. I'm leaving on <strong>13th Jan 2025</strong>, but this is not a
        goodbye!
      </p>
      <ul className="mt-6 list-disc text-left mx-auto max-w-lg">
        <li>Started as a Software Engineer in 2018.</li>
        <li>Promoted to Associate in 2021.</li>
        <li>Contributed to [Notable Projects].</li>
      </ul>
    </div>
  );
};

export default Profile;
