import React, { useState } from "react";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: `${process.env.PUBLIC_URL}/images/MM_1stDayAfterCorona.jpg`,
      alt: "First Day After Corona",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/TeamLunch.jpg`,
      alt: "Team Lunch",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_BirthdayCelebration.jpg`,
      alt: "Birthday Celebration",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_Photo.jpg`,
      alt: "Photo",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_Flip.jpg`,
      alt: "Team Outing",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_Sameer_Marriage.jpg`,
      alt: "Sameer's Marriage",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_LeadershipVisit.jpg`,
      alt: "Leadership Visit",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_OG.jpg`,
      alt: "Real OGs",
    },
    { src: `${process.env.PUBLIC_URL}/images/MM_TedX.jpg`, alt: "TEDx" },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_Travel.jpg`,
      alt: "Team Travel",
    },
    { src: `${process.env.PUBLIC_URL}/images/MM_Card.jpg`, alt: "Some Night" },
    {
      src: `${process.env.PUBLIC_URL}/images/MM_Diwali.jpg`,
      alt: "Diwali Celebrations",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Shahan Ahmad</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/Rohtang.jpg`}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <p className="text-center">
        Hi, I'm <strong>Shahan Ahmad</strong>. My journey at MM has been a blend
        of challenges, learning, and incredible memories. I'm grateful for all
        the friendships and unforgettable moments. Although I'm leaving on{" "}
        <strong>13th Jan 2025</strong>, MM will always hold a special place in
        my heart.
      </p>
      <h2 className="text-2xl font-semibold mt-8">Cherished Memories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            />
            <p className="text-center text-sm font-medium mt-2">{image.alt}</p>
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full-Screen View"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
