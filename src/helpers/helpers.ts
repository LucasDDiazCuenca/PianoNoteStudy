import { ALL_NOTES_POSITIONS } from "./Constants";
import { NoteRandomInfo, NoteValue, ClefValue, ClefPositions } from "./types";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
function pickRandomNote(notes: any): NoteValue {
	return notes[Math.floor(Math.random() * notes.length)];
}

function pickRandomClef(currentClef: ClefValue): ClefValue {
	const randomNumber = Math.random();
	if (randomNumber < 0.5) {
		return currentClef;
	}
	return currentClef === "treble" ? "bass" : "treble";
}

function pickRandomNotePosition(clef: ClefValue, note: NoteValue): NoteRandomInfo | undefined {
	if (!clef || !note) {
		return undefined;
	}

	//Vamos a buscar la nota con su clef correspondiente en el objeto ALL_NOTES_POSITIONS
	const notePositions: ClefPositions = ALL_NOTES_POSITIONS[note][clef];

	//Obtenemos las keys disponibles (pueden ser 2 o 3)
	const availablePositions = Object.keys(notePositions);

	//Escogemos una posición aleatoria del número total de posiciones disponibles
	const randomPositionKey = availablePositions[
		Math.floor(Math.random() * availablePositions.length)
	] as keyof ClefPositions;

	const finalNotePosition = notePositions[randomPositionKey];

	const noteRandomPosition: NoteRandomInfo = {
		note: note,
		clef: clef,
		id: finalNotePosition?.id ?? -1,
		outsideBottom: finalNotePosition?.outsideBottom ?? false,
		outsideTop: finalNotePosition?.outsideTop ?? false,
		aboveExtraLine: finalNotePosition?.aboveExtraLine ?? false,
		belowExtraLine: finalNotePosition?.belowExtraLine ?? false,
		onExtraLine: finalNotePosition?.onExtraLine ?? false,
	};

	return noteRandomPosition;
}

export { pickRandomNote, pickRandomNotePosition, pickRandomClef };
