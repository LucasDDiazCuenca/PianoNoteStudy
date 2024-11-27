import React from "react";
import { motion } from "framer-motion";

import bassIcon from "../../assets/bass.svg";
import trebleIcon from "../../assets/treble.svg";

import { ClefValue } from "../../helpers/types";

interface SettingsProps {
	isOpen: boolean;
	onClose: () => void;
	currentClef: ClefValue;
	setCurrentClef: (clef: ClefValue) => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose, currentClef, setCurrentClef }) => {
	return (
		<motion.div
			className="fixed top-0 right-0 h-screen w-screen bg-[#202020] text-white p-8 z-40"
			initial={{ x: "100%" }}
			animate={{ x: isOpen ? 0 : "100%" }}
			transition={{ type: "spring", damping: 20 }}
		>
			<button onClick={onClose} className="absolute top-4 right-4 text-2xl">
				×
			</button>

			<div className="max-w-2xl mx-auto mt-10">
				<h2 className="text-3xl font-bold mb-1">Settings</h2>
				<hr className="border-t-2 border-zinc-500 mb-6" />

				<div className="space-y-6">
					<div className="flex flex-col gap-2">
						<h3 className="text-lg font-bold mb-2">Sound :</h3>
						<input
							type="range"
							min="0"
							max="100"
							className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-zinc-500 hover:accent-zinc-600
							[&::-webkit-slider-thumb]:appearance-none
							[&::-webkit-slider-thumb]:w-4
							[&::-webkit-slider-thumb]:h-4
							[&::-webkit-slider-thumb]:bg-zinc-500
							[&::-webkit-slider-thumb]:rounded-full
							[&::-webkit-slider-thumb]:hover:bg-zinc-600
							[&::-webkit-slider-thumb]:transition-all"
						/>
					</div>

					<h3 className="text-lg font-bold">Clef :</h3>
					<div className="flex gap-2">
						<button
							onClick={() => setCurrentClef("bass")}
							className={`p-2 rounded-lg transition-all ${
								currentClef === "bass" ? "bg-zinc-500" : "hover:bg-gray-700"
							}`}
						>
							<img src={bassIcon} alt="bass icon" className="w-16 h-16" />
						</button>
						<button
							onClick={() => setCurrentClef("treble")}
							className={`p-2 rounded-lg transition-all ${
								currentClef === "treble" ? "bg-zinc-500" : "hover:bg-gray-700"
							}`}
						>
							<img src={trebleIcon} alt="treble icon" className="w-16 h-16" />
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Settings;
