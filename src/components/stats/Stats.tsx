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

	return (
		<motion.div
			className="stats bg-gray-200 p-4 flex justify-between gap-4 items-center"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h2>
				Actual score: <span className={`font-bold ${getScoreColor(score)}`}>{score}</span>
			</h2>

			<div className="relative w-16 h-16">
				<svg className="w-full h-full transform -rotate-90">
					<circle cx="32" cy="32" r="28" stroke="gray" strokeWidth="4" fill="none" className="opacity-20" />
					<circle
						cx="32"
						cy="32"
						r="28"
						stroke="currentColor"
						strokeWidth="4"
						fill="none"
						className="text-zinc-500"
						strokeDasharray={175}
						strokeDashoffset={175 * (1 - timeLeft / 5)}
						style={{
							transition: "stroke-dashoffset 0.1s linear",
						}}
					/>
				</svg>
				<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					{Math.max(0, Math.ceil(timeLeft))}
				</span>
			</div>
		</motion.div>
	);
};

export default Stats;
