import "./App.css";
import { useEffect, useState } from "react";
import { pickRandomNotePosition, pickRandomNote, pickRandomClef } from "./helpers/helpers";
import { NoteValue, ClefValue, NoteRandomInfo } from "./helpers/types";
import { NOTES } from "./helpers/Constants";

import Menu from "./components/menu/Menu";
import Stats from "./components/stats/Stats";
import PianoSheet from "./components/pianoSheet/PianoSheet";
import PianoKeys from "./components/pianoKeys/PianoKeys";

function App() {
	const [currentNote, setCurrentNote] = useState<NoteValue>(pickRandomNote(NOTES));
	const [currentClef, setCurrentClef] = useState<ClefValue>("treble");
	const [useBothClefs, setUseBothClefs] = useState(false);
	const [currentNoteInfo, setCurrentNoteInfo] = useState<NoteRandomInfo | undefined>(undefined);
	const [score, setScore] = useState(0);
	const [resetTimer, setResetTimer] = useState(false);
	const [volume, setVolume] = useState(80);

	const handleTimeOut = () => {
		setScore(Math.max(0, score - 2));
		setResetTimer(true);
		const newNote = pickRandomNote(NOTES);
		setCurrentNote(newNote);
		if (useBothClefs) {
			setCurrentClef(pickRandomClef(currentClef));
		}
		setTimeout(() => {
			setResetTimer(false);
		}, 100);
	};

	useEffect(() => {
		setCurrentNoteInfo(pickRandomNotePosition(currentClef, currentNote));
	}, [currentNote, currentClef]);

	return (
		<div className="main-container">
			<Menu
				currentClef={currentClef}
				setCurrentClef={setCurrentClef}
				useBothClefs={useBothClefs}
				setUseBothClefs={setUseBothClefs}
				volume={volume}
				setVolume={setVolume}
			/>
			<Stats score={score} onTimeOut={handleTimeOut} resetTimer={resetTimer} />
			<PianoSheet currentClef={currentClef} currentNoteInfo={currentNoteInfo} />
			<PianoKeys
				currentNote={currentNote}
				setCurrentNote={setCurrentNote}
				score={score}
				setScore={setScore}
				setResetTimer={setResetTimer}
				useBothClefs={useBothClefs}
				currentClef={currentClef}
				setCurrentClef={setCurrentClef}
				volume={volume}
			/>
		</div>
	);
}

export default App;
