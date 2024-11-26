import React, { useState } from "react";

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
}

const PianoKeys: React.FC<PianoKeysProps> = ({ currentNote, setCurrentNote }) => {
	const [isCorrectNoteMessageOn, setIsCorrectNoteMessageOn] = useState(false);
	const [isIncorrectNoteMessageOn, setIsIncorrectNoteMessageOn] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	// Precargamos los audios al inicio
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
			}, 1000);
		} else {
			console.log("%cNo es la nota correcta", "color: red");
			setIsIncorrectNoteMessageOn(true);
			setTimeout(() => {
				setIsIncorrectNoteMessageOn(false);
				setIsProcessing(false);
			}, 1500);
		}
	}

	return (
		<div className="piano-keys bg-zinc-500 h-[240px] flex justify-center items-center relative">
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
				className="absolute top-[11px] left-[41px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
				id="doSharpKey"
				width={35}
			/>
			<img
				src={blackKeyImg}
				alt="blackKey"
				className="absolute top-[11px] left-[95px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
				id="reSharpKey"
				width={35}
			/>
			<img
				src={blackKeyImg}
				alt="blackKey"
				className="absolute top-[11px] left-[203px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
				id="miSharpKey"
				width={35}
			/>
			<img
				src={blackKeyImg}
				alt="blackKey"
				className="absolute top-[11px] left-[257px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
				id="faSharpKey"
				width={35}
			/>
			<img
				src={blackKeyImg}
				alt="blackKey"
				className="absolute top-[11px] left-[310px] h-[155px] transition-transform active:translate-y-1 active:brightness-95 cursor-pointer"
				id="solSharpKey"
				width={35}
			/>
			{isCorrectNoteMessageOn && (
				<p className="text-xl absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-green-500">
					Es la nota correcta
				</p>
			)}
			{isIncorrectNoteMessageOn && (
				<p className="text-xl absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-red-500">
					No es la correcta
				</p>
			)}
		</div>
	);
};

export default PianoKeys;
