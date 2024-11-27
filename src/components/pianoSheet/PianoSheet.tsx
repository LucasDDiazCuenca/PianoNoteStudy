import { motion } from "framer-motion";

import sheetBarsImg from "../../assets/sheet-bars.svg";
import trebleClefImg from "../../assets/treble.svg";
import bassClefImg from "../../assets/bass.svg";

import CurrentNote from "./CurrentNote";

import { NoteRandomInfo, ClefValue } from "../../helpers/types";
import { CLEF } from "../../helpers/Constants";

type PianoSheetProps = {
	currentClef: ClefValue;
	currentNoteInfo: NoteRandomInfo | undefined;
};

const PianoSheet: React.FC<PianoSheetProps> = ({ currentClef, currentNoteInfo }) => {
	return (
		<motion.div
			className="piano-sheet h-52 bg-zinc-800 flex justify-center items-center relative"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Sheet Bars */}
			<img src={sheetBarsImg} alt="sheet bars" className="z-10" />

			{/* Clefs */}
			{currentClef && currentClef === CLEF[0] && (
				<img src={trebleClefImg} alt="treble clef" className="absolute left-20 z-20" />
			)}
			{currentClef && currentClef === CLEF[1] && (
				<img src={bassClefImg} alt="bass clef" className="absolute left-20 top-[68px] w-12 z-20" />
			)}

			<CurrentNote currentClef={currentClef} currentNoteInfo={currentNoteInfo} />
		</motion.div>
	);
};

export default PianoSheet;
