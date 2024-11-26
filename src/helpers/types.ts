type NotePosition = {
	id: number;
	outsideBottom: boolean;
	outsideTop: boolean;
	aboveExtraLine: boolean;
	belowExtraLine: boolean;
	onExtraLine: boolean;
};

type ClefPositions = {
	bottom?: NotePosition;
	mid?: NotePosition;
	top?: NotePosition;
};

type NoteKeys = "do" | "re" | "mi" | "fa" | "sol" | "la" | "si";
type ClefKeys = "treble" | "bass";

type AllNotesPositionsType = {
	[key in NoteKeys]: {
		[key in ClefKeys]: ClefPositions;
	};
};

type NoteRandomInfo = {
	note: NoteValue;
	clef: ClefValue;
	id: number;
	outsideBottom: boolean;
	outsideTop: boolean;
	aboveExtraLine: boolean;
	belowExtraLine: boolean;
	onExtraLine: boolean;
};

type NoteValue = NoteKeys | undefined;
type ClefValue = ClefKeys | undefined;

export type {
	NoteRandomInfo,
	AllNotesPositionsType,
	NoteValue,
	ClefValue,
	NotePosition,
	ClefPositions,
	NoteKeys,
	ClefKeys,
};
