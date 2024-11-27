import React, { useState } from "react";
import { motion } from "framer-motion";

import doSound from "/sounds/do.mp3";
import reSound from "/sounds/re.mp3";
import miSound from "/sounds/mi.mp3";
import faSound from "/sounds/fa.mp3";
import solSound from "/sounds/sol.mp3";
import laSound from "/sounds/la.mp3";
import siSound from "/sounds/si.mp3";

import whiteKeyImg from "../../assets/keyboard/whiteKey.svg";
import blackKeyImg from "../../assets/keyboard/blackKey.svg";

import { NoteValue } from "../../helpers/types";
import { NOTES } from "../../helpers/Constants";
import { pickRandomNote } from "../../helpers/helpers";

interface PianoKeysProps {
	currentNote: NoteValue;
	setCurrentNote: (note: NoteValue) => void;
	score: number;
	setScore: (score: number) => void;
	setResetTimer: (reset: boolean) => void;
}

const PianoKeys: React.FC<PianoKeysProps> = ({ currentNote, setCurrentNote, score, setScore, setResetTimer }) => {
	const [isCorrectNoteMessageOn, setIsCorrectNoteMessageOn] = useState(false);
	const [isIncorrectNoteMessageOn, setIsIncorrectNoteMessageOn] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	const audioElements = React.useMemo(
		() => ({
			do: new Audio(doSound),
			re: new Audio(reSound),
			mi: new Audio(miSound),
			fa: new Audio(faSound),
			sol: new Audio(solSound),
			la: new Audio(laSound),
			si: new Audio(siSound),
		}),
		[]
	);
	const currentAudio = React.useRef<HTMLAudioElement | null>(null);

	function playSound(key: keyof typeof audioElements) {
		if (currentAudio.current) {
			currentAudio.current.pause();
			currentAudio.current.currentTime = 0;
		}

		const audio = audioElements[key];
		currentAudio.current = audio;

		audio.currentTime = key === "si" ? 1 : 0.4;

		const playPromise = audio.play();

		if (playPromise !== undefined) {
			playPromise
				.then(() => {
					setTimeout(() => {
						audio.pause();
						audio.currentTime = 0;
						currentAudio.current = null;
					}, 2000);
				})
				.catch((error) => {
					console.error("Error reproduciendo el audio:", error);
				});
		}
	}

	function handleResponseClick(noteFromKey: NoteValue, currentNote: NoteValue) {
		if (isProcessing) return;

		setIsProcessing(true);

		if (noteFromKey === currentNote) {
			console.log("%cEs la nota correcta", "color: green");
			setScore(score + 5);
			setResetTimer(true);

			const newNote = pickRandomNote(NOTES);
			if (newNote === currentNote) {
				setCurrentNote(pickRandomNote(NOTES.filter((note) => note !== currentNote)));
			} else {
				setCurrentNote(newNote);
			}

			setIsCorrectNoteMessageOn(true);

			setTimeout(() => {
				setIsCorrectNoteMessageOn(false);
				setIsProcessing(false);
				setResetTimer(false);
			}, 1000);
		} else {
			console.log("%cNo es la nota correcta", "color: red");
			setScore(Math.max(0, score - 3));
			setResetTimer(true);
			setIsIncorrectNoteMessageOn(true);

			setTimeout(() => {
				setIsIncorrectNoteMessageOn(false);
				setIsProcessing(false);
				setResetTimer(false);
			}, 1500);
		}
	}

	return (
		<motion.div
			className="piano-keys bg-zinc-700 h-[240px] flex justify-center items-center relative"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.9 }}
		>
			<div className="relative top-[-110px] w-[387px]">
				{/* White keys */}
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[4px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="doKey"
					width={55}
					onClick={() => {
						playSound("do");
						handleResponseClick("do", currentNote);
					}}
				/>
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[58px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="reKey"
					width={55}
					onClick={() => {
						playSound("re");
						handleResponseClick("re", currentNote);
					}}
				/>
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[112px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="miKey"
					width={55}
					onClick={() => {
						playSound("mi");
						handleResponseClick("mi", currentNote);
					}}
				/>
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[166px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="faKey"
					width={55}
					onClick={() => {
						playSound("fa");
						handleResponseClick("fa", currentNote);
					}}
				/>
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[220px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="solKey"
					width={55}
					onClick={() => {
						playSound("sol");
						handleResponseClick("sol", currentNote);
					}}
				/>
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[274px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="laKey"
					width={55}
					onClick={() => {
						playSound("la");
						handleResponseClick("la", currentNote);
					}}
				/>
				<img
					src={whiteKeyImg}
					alt="whiteKey"
					className="absolute left-[328px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="siKey"
					width={55}
					onClick={() => {
						playSound("si");
						handleResponseClick("si", currentNote);
					}}
				/>

				{/* Black keys */}
				<img
					src={blackKeyImg}
					alt="blackKey"
					className="absolute left-[41px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="doSharpKey"
					width={35}
				/>
				<img
					src={blackKeyImg}
					alt="blackKey"
					className="absolute left-[95px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="reSharpKey"
					width={35}
				/>
				<img
					src={blackKeyImg}
					alt="blackKey"
					className="absolute left-[203px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="miSharpKey"
					width={35}
				/>
				<img
					src={blackKeyImg}
					alt="blackKey"
					className="absolute left-[257px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="faSharpKey"
					width={35}
				/>
				<img
					src={blackKeyImg}
					alt="blackKey"
					className="absolute left-[310px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
					id="solSharpKey"
					width={35}
				/>
			</div>

			{isCorrectNoteMessageOn && (
				<motion.p
					className="text-xl absolute bottom-[-50px] -translate-x-1/2 text-green-400 font-semibold"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					¡Nota correcta!
				</motion.p>
			)}
			{isIncorrectNoteMessageOn && (
				<motion.p
					className="text-xl absolute bottom-[-50px] -translate-x-1/2 text-red-400 font-semibold"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Nota incorrecta
				</motion.p>
			)}
		</motion.div>
	);
};

export default PianoKeys;
