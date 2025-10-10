import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatsProps {
  score: number;
  onTimeOut: () => void;
  resetTimer: boolean;
}

const Stats: React.FC<StatsProps> = ({ score, onTimeOut, resetTimer }) => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (resetTimer) {
      setTimeLeft(5);
      setIsActive(true);
    }
  }, [resetTimer]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(timer);
          setIsActive(false);
          onTimeOut();
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isActive, onTimeOut]);

  const getScoreColor = (score: number): string => {
    if (score <= 10) return "text-red-500";
    if (score <= 20) return "text-orange-500";
    if (score <= 30) return "text-yellow-500";
    if (score <= 40) return "text-green-500";
    return "text-emerald-600";
  };

  const getScoreBgColor = (score: number): string => {
    if (score <= 10) return "bg-red-500/10 border-red-500/20";
    if (score <= 20) return "bg-orange-500/10 border-orange-500/20";
    if (score <= 30) return "bg-yellow-500/10 border-yellow-500/20";
    if (score <= 40) return "bg-green-500/10 border-green-500/20";
    return "bg-emerald-500/10 border-emerald-500/20";
  };

  const getTimerColor = (timeLeft: number): string => {
    if (timeLeft <= 1) return "text-red-500";
    if (timeLeft <= 2) return "text-orange-500";
    return "text-blue-500";
  };

  const getTimerBgColor = (timeLeft: number): string => {
    if (timeLeft <= 1) return "stroke-red-500";
    if (timeLeft <= 2) return "stroke-orange-500";
    return "stroke-blue-500";
  };

  return (
    <motion.div
      className="stats bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 px-6 py-4 flex justify-between gap-6 items-center shadow-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Score Section */}
      <div
        className={`flex items-center gap-4 px-4 py-2 rounded-xl border ${getScoreBgColor(
          score
        )}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="text-sm text-zinc-400 font-medium">Score</div>
            <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}
            </div>
          </div>
        </div>
      </div>

      {/* Timer Section */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm text-zinc-400 font-medium">Time Left</div>
          <div className={`text-lg font-semibold ${getTimerColor(timeLeft)}`}>
            {Math.max(0, Math.ceil(timeLeft))}s
          </div>
        </div>

        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-zinc-600/30"
            />
            {/* Progress circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className={getTimerBgColor(timeLeft)}
              strokeDasharray={175}
              strokeDashoffset={175 * (1 - timeLeft / 5)}
              style={{
                transition: "stroke-dashoffset 0.1s linear",
              }}
            />
          </svg>
          {/* Timer icon in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-lg">⏱️</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
