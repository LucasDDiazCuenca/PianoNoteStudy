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

import { NoteValue, ClefValue } from "../../helpers/types";
import { NOTES } from "../../helpers/Constants";
import { pickRandomNote, pickRandomClef } from "../../helpers/helpers";

interface PianoKeysProps {
  currentNote: NoteValue;
  setCurrentNote: (note: NoteValue) => void;
  score: number;
  setScore: (score: number) => void;
  setResetTimer: (reset: boolean) => void;
  useBothClefs: boolean;
  currentClef: ClefValue;
  setCurrentClef: (clef: ClefValue) => void;
  volume: number;
  onFeedbackChange: (type: "correct" | "incorrect" | null) => void;
}

const PianoKeys: React.FC<PianoKeysProps> = ({
  currentNote,
  setCurrentNote,
  score,
  setScore,
  setResetTimer,
  useBothClefs,
  currentClef,
  setCurrentClef,
  volume,
  onFeedbackChange,
}) => {
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
    audio.volume = volume / 100;
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
          console.error("Error playing audio:", error);
        });
    }
  }

  function handleResponseClick(noteFromKey: NoteValue, currentNote: NoteValue) {
    if (isProcessing) return;

    setIsProcessing(true);

    if (noteFromKey === currentNote) {
      setScore(score + 5);
      setResetTimer(true);

      const newNote = pickRandomNote(NOTES);
      if (newNote === currentNote) {
        setCurrentNote(
          pickRandomNote(NOTES.filter((note) => note !== currentNote))
        );
      } else {
        setCurrentNote(newNote);
      }

      if (useBothClefs) {
        setCurrentClef(pickRandomClef(currentClef));
      }

      onFeedbackChange("correct");

      setTimeout(() => {
        setIsProcessing(false);
        setResetTimer(false);
        onFeedbackChange(null);
      }, 1000);
    } else {
      console.log("%cIncorrect note", "color: red");
      setScore(Math.max(0, score - 3));
      setResetTimer(true);
      onFeedbackChange("incorrect");

      setTimeout(() => {
        setIsProcessing(false);
        setResetTimer(false);
        onFeedbackChange(null);
      }, 1500);
    }
  }

  return (
    <motion.div
      className="piano-keys bg-gradient-to-b from-zinc-800 to-zinc-900 h-[280px] flex justify-center items-center relative shadow-2xl border-t border-zinc-600"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="relative top-[-120px] w-[387px]">
        {/* White keys */}
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[4px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="doKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("do");
            handleResponseClick("do", currentNote);
          }}
        />
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[58px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="reKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("re");
            handleResponseClick("re", currentNote);
          }}
        />
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[112px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="miKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("mi");
            handleResponseClick("mi", currentNote);
          }}
        />
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[166px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="faKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("fa");
            handleResponseClick("fa", currentNote);
          }}
        />
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[220px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="solKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("sol");
            handleResponseClick("sol", currentNote);
          }}
        />
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[274px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="laKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("la");
            handleResponseClick("la", currentNote);
          }}
        />
        <motion.img
          src={whiteKeyImg}
          alt="whiteKey"
          className="absolute left-[328px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="siKey"
          width={55}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
          onClick={() => {
            playSound("si");
            handleResponseClick("si", currentNote);
          }}
        />

        {/* Black keys */}
        <motion.img
          src={blackKeyImg}
          alt="blackKey"
          className="absolute left-[41px] h-[155px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="doSharpKey"
          width={35}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
        />
        <motion.img
          src={blackKeyImg}
          alt="blackKey"
          className="absolute left-[95px] h-[155px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="reSharpKey"
          width={35}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
        />
        <motion.img
          src={blackKeyImg}
          alt="blackKey"
          className="absolute left-[203px] h-[155px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="miSharpKey"
          width={35}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
        />
        <motion.img
          src={blackKeyImg}
          alt="blackKey"
          className="absolute left-[257px] h-[155px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="faSharpKey"
          width={35}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
        />
        <motion.img
          src={blackKeyImg}
          alt="blackKey"
          className="absolute left-[310px] h-[155px] cursor-pointer hover:brightness-110 transition-all duration-150"
          id="solSharpKey"
          width={35}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, y: 4 }}
        />
      </div>
    </motion.div>
  );
};

export default PianoKeys;
