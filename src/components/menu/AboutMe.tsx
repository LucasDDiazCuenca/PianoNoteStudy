import React from "react";
import { motion } from "framer-motion";

import studioCristalLogo from "../../assets/studioCristal/whiteCristal.svg";

interface AboutMeProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="fixed top-0 right-0 h-screen w-screen z-40 bg-[#202020] text-white p-8"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", damping: 20 }}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
        ×
      </button>

      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">
          <img
            src={studioCristalLogo}
            alt="Studio Cristal logo"
            className="inline-block ml-2 mr-2"
            width={45}
          />{" "}
          About Studio Cristal
        </h2>
        <p className="mb-4">Welcome to Studio Cristal! 👋🏻 </p>
        <p className="mb-4">
          We are passionate about music education and creating innovative tools
          for musicians 🎹.
        </p>
        <p className="mb-4">
          This piano practice application was designed to help musicians improve
          their sheet music reading skills 🎵.
        </p>
        <p className="mb-4">
          We've included a timer and scoring system to make practice sessions
          more engaging and fun 👹.
        </p>
        <p className="mb-4">
          Visit our website to learn more about Studio Cristal and our music
          education initiatives{" "}
          <a
            href="https://www.studiocristal.site/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <footer className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Studio Cristal. All rights reserved.</p>
        </footer>
      </div>
    </motion.div>
  );
};

export default AboutMe;
