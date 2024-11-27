import React from "react";
import { motion } from "framer-motion";

import lucasLogo from "../../assets/icons/lucas-logo.png";

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
				<h2 className="text-3xl font-bold mb-6">
					<img src={lucasLogo} alt="lucas logo" className="inline-block ml-2 mr-2" width={45} /> About Me
				</h2>
				<p className="mb-4">Hello! 👋🏻 </p>
				<p className="mb-4">I am a developer passionate about music 🎹 and programming 💻.</p>
				<p className="mb-4">
					I created this application to practice and improve my sheet music reading skills 🎵.
				</p>
				<p className="mb-4">I added a timer and a basic scoring system to make it a bit more fun 👹.</p>
				<p className="mb-4">
					Check out my personal portfolio if you want to know more about me{" "}
					<a href="https://lucasdiaz.site/" className="text-blue-500 underline">
						here
					</a>
					.
				</p>
				<footer className="mt-8 text-center text-sm text-gray-400">
					<p>&copy; 2024 Lucas Diaz. All rights reserved.</p>
				</footer>
			</div>
		</motion.div>
	);
};

export default AboutMe;
