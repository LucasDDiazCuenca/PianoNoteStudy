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
  feedbackType: "correct" | "incorrect" | null;
};

const PianoSheet: React.FC<PianoSheetProps> = ({
  currentClef,
  currentNoteInfo,
  feedbackType,
}) => {
  return (
    <motion.div
      className="piano-sheet h-52 relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Paper Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100">
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle shadow for depth */}
        <div className="absolute inset-0 shadow-inner" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex justify-center items-center">
        {/* Sheet Bars */}
        <motion.img
          src={sheetBarsImg}
          alt="sheet bars"
          className="z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Clefs with animations */}
        {currentClef && currentClef === CLEF[0] && (
          <motion.img
            src={trebleClefImg}
            alt="treble clef"
            className="absolute left-20 z-20 drop-shadow-sm"
            initial={{ opacity: 0, x: -20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              damping: 10,
            }}
          />
        )}
        {currentClef && currentClef === CLEF[1] && (
          <motion.img
            src={bassClefImg}
            alt="bass clef"
            className="absolute left-20 top-[68px] w-12 z-20 drop-shadow-sm"
            initial={{ opacity: 0, x: -20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              damping: 10,
            }}
          />
        )}

        {/* Current Note with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", damping: 8 }}
        >
          <CurrentNote
            currentClef={currentClef}
            currentNoteInfo={currentNoteInfo}
          />
        </motion.div>
      </div>

      {/* Feedback Messages */}
      {feedbackType === "correct" && (
        <motion.div
          className="absolute bottom-4 right-4 z-30"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          transition={{ duration: 0.3, type: "spring", damping: 10 }}
        >
          <div className="bg-green-500/95 backdrop-blur-sm text-white px-2 py-1 rounded-md shadow-lg border border-green-400/30">
            <div className="flex items-center gap-1">
              <span className="text-sm">🎵</span>
              <span className="text-xs font-semibold">Correct!</span>
            </div>
          </div>
        </motion.div>
      )}
      {feedbackType === "incorrect" && (
        <motion.div
          className="absolute bottom-4 right-4 z-30"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          transition={{ duration: 0.3, type: "spring", damping: 10 }}
        >
          <div className="bg-red-500/95 backdrop-blur-sm text-white px-2 py-1 rounded-md shadow-lg border border-red-400/30">
            <div className="flex items-center gap-1">
              <span className="text-sm">❌</span>
              <span className="text-xs font-semibold">Incorrect</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-2 left-4 w-8 h-0.5 bg-black/20 rounded-full" />
      <div className="absolute top-2 right-4 w-8 h-0.5 bg-black/20 rounded-full" />
      <div className="absolute bottom-2 left-4 w-8 h-0.5 bg-black/20 rounded-full" />
      <div className="absolute bottom-2 right-4 w-8 h-0.5 bg-black/20 rounded-full" />
    </motion.div>
  );
};

export default PianoSheet;
