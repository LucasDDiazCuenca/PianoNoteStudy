import React, { useState } from "react";
import { motion } from "framer-motion";

import pianoLogo from "../../assets/icons/pianoLogo.svg";
import settingsIcon from "../../assets/icons/settings.svg";

import AboutMe from "./AboutMe";
import Settings from "./Settings";

import { ClefValue } from "../../helpers/types";

interface MenuProps {
	currentClef: ClefValue;
	setCurrentClef: (clef: ClefValue) => void;
	useBothClefs: boolean;
	setUseBothClefs: (use: boolean) => void;
	volume: number;
	setVolume: (volume: number) => void;
}

const Menu: React.FC<MenuProps> = ({
	currentClef,
	setCurrentClef,
	useBothClefs,
	setUseBothClefs,
	volume,
	setVolume,
}) => {
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	return (
		<>
			<motion.div
				className="menu bg-[#202020] text-white p-4 flex justify-between items-center"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h2>
					<img src={pianoLogo} alt="piano logo" className="h-8 w-auto" />
				</h2>
				<ul className="flex gap-4 items-center">
					<li>
						<button onClick={() => setIsAboutOpen(true)} className="hover:text-gray-300 transition-colors">
							About
						</button>
					</li>
					<li>
						<motion.img
							src={settingsIcon}
							alt="settings icon"
							className="h-6 w-6 cursor-pointer"
							whileHover={{ scale: 1.1 }}
							animate={{ rotate: 360 }}
							transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
							onClick={() => setIsSettingsOpen(true)}
						/>
					</li>
				</ul>
			</motion.div>

			<AboutMe isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

			<Settings
				isOpen={isSettingsOpen}
				onClose={() => setIsSettingsOpen(false)}
				currentClef={currentClef}
				setCurrentClef={setCurrentClef}
				useBothClefs={useBothClefs}
				setUseBothClefs={setUseBothClefs}
				volume={volume}
				setVolume={setVolume}
			/>
		</>
	);
};

export default Menu;
