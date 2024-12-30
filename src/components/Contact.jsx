// import React from "react";
// import { FaPhone, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 py-16">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//         <p className="text-lg mb-4">
//           Feel free to reach out for collaborations or just a friendly chat.
//         </p>
//         <div className="flex justify-center space-x-6">
//           <a
//             href="tel:+1234567890"
//             className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
//           >
//             <FaPhone size={20} />
//             <span>+91 8445470641</span>
//           </a>
//           <a
//             href="mailto:shahanahmad321@gmail.com"
//             className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
//           >
//             <FaEnvelope size={20} />
//             <span>shahanahmad321@gmail.com</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 py-16">
      <div className="container mx-auto text-center px-6 md:px-0">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you want to collaborate or just say hello, I'd love to hear
          from you! Reach out through the contact methods below.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-6 md:space-y-0">
          <a
            href="tel:+918445470641"
            className="flex items-center space-x-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <FaPhone size={24} />
            <span className="text-xl font-semibold">+91 8445470641</span>
          </a>
          <a
            href="mailto:shahanahmad321@gmail.com"
            className="flex items-center space-x-4 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 ease-in-out"
          >
            <FaEnvelope size={24} />
            <span className="text-xl font-semibold">
              shahanahmad321@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
