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
	useBothClefs: boolean;
	setUseBothClefs: (use: boolean) => void;
	volume: number;
	setVolume: (volume: number) => void;
}

const Settings: React.FC<SettingsProps> = ({
	isOpen,
	onClose,
	currentClef,
	setCurrentClef,
	useBothClefs,
	setUseBothClefs,
	volume,
	setVolume,
}) => {
	const handleClefChange = (clef: ClefValue) => {
		setCurrentClef(clef);
		// Si seleccionamos una clave específica, desactivamos el modo de ambas claves
		setUseBothClefs(false);
	};

	const handleBothClefsChange = (checked: boolean) => {
		setUseBothClefs(checked);
		// Si activamos el modo de ambas claves, establecemos una clave por defecto
		if (checked) {
			setCurrentClef("treble");
		}
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVolume(Number(e.target.value));
	};

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
							value={volume}
							onChange={handleVolumeChange}
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
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id="bothClefs"
								checked={useBothClefs}
								onChange={(e) => handleBothClefsChange(e.target.checked)}
								className="w-4 h-4 accent-zinc-500"
							/>
							<label htmlFor="bothClefs">Use both clefs randomly</label>
						</div>

						<div className="flex gap-2">
							<button
								onClick={() => handleClefChange("bass")}
								className={`p-2 rounded-lg transition-all ${
									currentClef === "bass" && !useBothClefs ? "bg-zinc-500" : "hover:bg-gray-700"
								} ${useBothClefs ? "opacity-50 cursor-not-allowed" : ""}`}
								disabled={useBothClefs}
							>
								<img src={bassIcon} alt="bass icon" className="w-16 h-16" />
							</button>
							<button
								onClick={() => handleClefChange("treble")}
								className={`p-2 rounded-lg transition-all ${
									currentClef === "treble" && !useBothClefs ? "bg-zinc-500" : "hover:bg-gray-700"
								} ${useBothClefs ? "opacity-50 cursor-not-allowed" : ""}`}
								disabled={useBothClefs}
							>
								<img src={trebleIcon} alt="treble icon" className="w-16 h-16" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Settings;
