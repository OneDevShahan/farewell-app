import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={15} />,
      url: "https://www.linkedin.com/in/shahan-ahmad-5aa56b10a/",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={15} />,
      url: "https://github.com/OneDevShahan",
      bgColor: "bg-gray-700 hover:bg-gray-800",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={15} />,
      url: "https://x.com/shahanahmad7",
      bgColor: "bg-blue-400 hover:bg-blue-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={15} />,
      url: "mailto:shahanahmad321@gmail.com",
      bgColor: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={15} />,
      url: "https://www.instagram.com/shahanahmad321/",
      bgColor: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 py-6 mt-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-8 h-8 rounded-md ${link.bgColor} text-white transition-transform transform hover:scale-110 duration-300 ease-in-out`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
