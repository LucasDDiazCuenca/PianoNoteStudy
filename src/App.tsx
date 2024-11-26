import "./App.css";

import { useEffect, useState } from "react";

import { pickRandomNotePosition, pickRandomNote } from "./helpers/helpers";
import { NoteValue, ClefValue, NoteRandomInfo } from "./helpers/types";

import Menu from "./components/menu/Menu";
import Stats from "./components/stats/Stats";
import PianoSheet from "./components/pianoSheet/PianoSheet";
import PianoKeys from "./components/pianoKeys/PianoKeys";
import { NOTES } from "./helpers/Constants";

function App() {
	const [currentNote, setCurrentNote] = useState<NoteValue>(pickRandomNote(NOTES));
	const [currentClef] = useState<ClefValue>("treble"); //treble by default bass alternative
	const [currentNoteInfo, setCurrentNoteInfo] = useState<NoteRandomInfo | undefined>(undefined);

	useEffect(() => {
		setCurrentNoteInfo(pickRandomNotePosition(currentClef, currentNote));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log("cambiando nota a ...", currentNote);
		setCurrentNoteInfo(pickRandomNotePosition(currentClef, currentNote));
	}, [currentNote, currentClef]);

	return (
		<div className="main-container">
			<Menu />

			<Stats />

			<PianoSheet currentClef={currentClef} currentNoteInfo={currentNoteInfo} />

			<PianoKeys currentNote={currentNote} setCurrentNote={setCurrentNote} />
		</div>
	);
}

export default App;
