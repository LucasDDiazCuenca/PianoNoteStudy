import React, { useRef } from "react";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const handleVolumeMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    // Reproducir una nota de ejemplo cuando se suelta el regulador
    if (audioRef.current) {
      const currentVolume = Number(e.currentTarget.value);
      audioRef.current.volume = currentVolume / 100;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  };

  const handleVolumeTouchEnd = (e: React.TouchEvent<HTMLInputElement>) => {
    // Reproducir una nota de ejemplo cuando se suelta el regulador en touch
    if (audioRef.current) {
      const currentVolume = Number(e.currentTarget.value);
      audioRef.current.volume = currentVolume / 100;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  };

  return (
    <motion.div
      className="fixed top-0 right-0 h-screen w-screen bg-[#202020] text-white z-40 overflow-y-auto"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", damping: 20 }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-[#202020] border-b border-zinc-700 px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Settings</h2>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center transition-colors"
        >
          <span className="text-xl">×</span>
        </button>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Volume Section */}
        <div className="bg-zinc-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-2xl">🔊</span>
              Volume
            </h3>
            <span className="text-sm text-zinc-400 bg-zinc-700 px-3 py-1 rounded-full">
              {volume}%
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              onMouseUp={handleVolumeMouseUp}
              onTouchEnd={handleVolumeTouchEnd}
              className="w-full h-3 bg-zinc-700 rounded-full appearance-none cursor-pointer
								[&::-webkit-slider-thumb]:appearance-none
								[&::-webkit-slider-thumb]:w-6
								[&::-webkit-slider-thumb]:h-6
								[&::-webkit-slider-thumb]:bg-white
								[&::-webkit-slider-thumb]:rounded-full
								[&::-webkit-slider-thumb]:shadow-lg
								[&::-webkit-slider-thumb]:transition-all
								[&::-webkit-slider-thumb]:hover:scale-110
								[&::-webkit-slider-thumb]:active:scale-95"
            />
            <div className="flex justify-between text-xs text-zinc-500 mt-2">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Clef Section */}
        <div className="bg-zinc-800/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
            <span className="text-2xl">🎼</span>
            Clef Selection
          </h3>

          {/* Random Mode Toggle */}
          <div className="mb-6">
            <label
              htmlFor="bothClefs"
              className="flex items-center gap-3 p-4 bg-zinc-700/50 rounded-xl cursor-pointer hover:bg-zinc-700/70 transition-colors"
            >
              <div className="flex-1">
                <div className="font-medium">Random Mode</div>
                <div className="text-sm text-zinc-400">
                  Use both clefs randomly
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  useBothClefs ? "bg-blue-500" : "bg-zinc-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform mt-0.5 ${
                    useBothClefs ? "translate-x-6" : "translate-x-0.5"
                  }`}
                ></div>
              </div>
              <input
                type="checkbox"
                id="bothClefs"
                checked={useBothClefs}
                onChange={(e) => handleBothClefsChange(e.target.checked)}
                className="sr-only"
              />
            </label>
          </div>

          {/* Clef Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleClefChange("bass")}
              className={`p-4 rounded-xl transition-all duration-200 ${
                currentClef === "bass" && !useBothClefs
                  ? "bg-blue-500 shadow-lg shadow-blue-500/25"
                  : "bg-zinc-700/50 hover:bg-zinc-700"
              } ${useBothClefs ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={useBothClefs}
            >
              <div className="flex flex-col items-center gap-2">
                <img src={bassIcon} alt="bass clef" className="w-12 h-12" />
                <span className="text-sm font-medium">Bass Clef</span>
              </div>
            </button>

            <button
              onClick={() => handleClefChange("treble")}
              className={`p-4 rounded-xl transition-all duration-200 ${
                currentClef === "treble" && !useBothClefs
                  ? "bg-blue-500 shadow-lg shadow-blue-500/25"
                  : "bg-zinc-700/50 hover:bg-zinc-700"
              } ${useBothClefs ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={useBothClefs}
            >
              <div className="flex flex-col items-center gap-2">
                <img src={trebleIcon} alt="treble clef" className="w-12 h-12" />
                <span className="text-sm font-medium">Treble Clef</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Audio element for volume testing */}
      <audio ref={audioRef} preload="auto" src="/sounds/do.mp3" />
    </motion.div>
  );
};

export default Settings;
