import noteImg from "../../assets/note.svg";
import strikedNoteImg from "../../assets/strikedNote.svg";
import noteOnTopImg from "../../assets/noteOnTop.svg";
import noteOnBottomImg from "../../assets/noteOnBottom.svg";
import extraLineImg from "../../assets/extraLine.svg";

import { ClefValue, NoteRandomInfo } from "../../helpers/types";
import { CLEF } from "../../helpers/Constants";

type CurrentNoteProps = {
	currentClef: ClefValue;
	currentNoteInfo: NoteRandomInfo | undefined;
};

const CurrentNote: React.FC<CurrentNoteProps> = ({ currentClef, currentNoteInfo }) => {
	return (
		<>
			{/*CLAVE DE SOL */}
			{currentClef === CLEF[0] && currentNoteInfo?.clef === CLEF[0] && (
				<>
					{/*PRIMER DO*/}
					{currentNoteInfo?.id === 0 && (
						<img
							src={strikedNoteImg}
							alt="striked note"
							className="absolute left-30 z-20 top-[150px]"
							width={33}
						/>
					)}

					{/*SEGUNDO DO*/}
					{currentNoteInfo?.id === 1 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[85px]" width={27} />
					)}

					{/*TERCER DO*/}
					{currentNoteInfo?.id === 2 && (
						<>
							<img
								src={strikedNoteImg}
								alt="note"
								className="absolute left-30 z-20 top-[20px]"
								width={33}
							/>
							<img src={extraLineImg} alt="extra line" className="absolute z-20 top-[45px]" width={32} />
						</>
					)}

					{/*PRIMER RE*/}
					{currentNoteInfo?.id === 6 && (
						<img
							src={noteImg}
							alt="striked note"
							className="absolute left-30 z-20 top-[142px]"
							width={27}
						/>
					)}

					{/*SEGUNDO RE*/}
					{currentNoteInfo?.id === 7 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[75px]" width={27} />
					)}

					{/*TERCER RE*/}
					{currentNoteInfo?.id === 8 && (
						<>
							<img
								src={noteOnTopImg}
								alt="note"
								className="absolute left-30 z-20 top-[10px]"
								width={33}
							/>
							<img src={extraLineImg} alt="extra line" className="absolute z-20 top-[45px]" width={32} />
						</>
					)}

					{/*PRIMER MI*/}
					{currentNoteInfo?.id === 12 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[132px]" width={27} />
					)}

					{/*SEGUNDO MI*/}
					{currentNoteInfo?.id === 13 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[65px]" width={27} />
					)}

					{/*PRIMER FA*/}
					{currentNoteInfo?.id === 18 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[122px]" width={27} />
					)}

					{/*SEGUNDO FA*/}
					{currentNoteInfo?.id === 19 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[56px]" width={27} />
					)}

					{/*PRIMER SOL*/}
					{currentNoteInfo?.id === 24 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[113px]" width={27} />
					)}

					{/*SEGUNDO SOL*/}
					{currentNoteInfo?.id === 25 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[46px]" width={27} />
					)}

					{/*PRIMER LA*/}
					{currentNoteInfo?.id === 30 && (
						<>
							<img
								src={strikedNoteImg}
								alt="striked note"
								className="absolute left-30 z-20 top-[168px]"
								width={33}
							/>
							<img src={extraLineImg} alt="extra line" className="absolute z-20 top-[158px]" width={32} />
						</>
					)}

					{/*SEGUNDO LA*/}
					{currentNoteInfo?.id === 31 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[103px]" width={27} />
					)}

					{/*TERCER LA*/}
					{currentNoteInfo?.id === 32 && (
						<img src={strikedNoteImg} alt="note" className="absolute left-30 z-20 top-[38px]" width={32} />
					)}

					{/*PRIMER SI */}
					{currentNoteInfo?.id === 36 && (
						<img
							src={noteOnBottomImg}
							alt="note"
							className="absolute left-30 z-20 top-[159px]"
							width={32}
						/>
					)}

					{/*SEGUNDO SI*/}
					{currentNoteInfo?.id === 37 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[94px]" width={27} />
					)}

					{/*TERCER SI*/}
					{currentNoteInfo?.id === 38 && (
						<img src={noteOnTopImg} alt="note" className="absolute left-30 z-20 top-[29px]" width={32} />
					)}
				</>
			)}

			{/*CLAVE DE FA*/}
			{currentClef === CLEF[1] && currentNoteInfo?.clef === CLEF[1] && (
				<>
					{/*PRIMER DO*/}
					{currentNoteInfo?.id === 3 && (
						<>
							<img
								src={strikedNoteImg}
								alt="striked note"
								className="absolute left-30 z-20 top-[170px]"
								width={33}
							/>
							<img src={extraLineImg} alt="extra line" className="absolute z-20 top-[160px]" width={32} />
						</>
					)}

					{/*SEGUNDO DO*/}
					{currentNoteInfo?.id === 4 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[103px]" width={27} />
					)}

					{/*TERCER DO*/}
					{currentNoteInfo?.id === 5 && (
						<img
							src={strikedNoteImg}
							alt="striked note"
							className="absolute left-30 z-20 top-[40px]"
							width={33}
						/>
					)}

					{/*PRIMER RE*/}
					{currentNoteInfo?.id === 9 && (
						<img
							src={noteOnBottomImg}
							alt="note"
							className="absolute left-30 z-20 top-[158px]"
							width={32}
						/>
					)}

					{/*SEGUNDO RE*/}
					{currentNoteInfo?.id === 10 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[94px]" width={27} />
					)}

					{/*TERCER RE*/}
					{currentNoteInfo?.id === 11 && (
						<img src={noteOnTopImg} alt="note" className="absolute left-30 z-20 top-[30px]" width={32} />
					)}

					{/*PRIMER MI*/}
					{currentNoteInfo?.id === 15 && (
						<img src={strikedNoteImg} alt="note" className="absolute left-30 z-20 top-[150px]" width={32} />
					)}

					{/*SEGUNDO MI*/}
					{currentNoteInfo?.id === 16 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[84px]" width={27} />
					)}

					{/*TERCER MI*/}
					{currentNoteInfo?.id === 17 && (
						<>
							<img
								src={strikedNoteImg}
								alt="striked note"
								className="absolute left-30 z-20 top-[22px]"
								width={32}
							/>
							<img src={extraLineImg} alt="extra line" className="absolute z-20 top-[47px]" width={32} />
						</>
					)}

					{/*PRIMER FA*/}
					{currentNoteInfo?.id === 21 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[142px]" width={27} />
					)}

					{/*SEGUNDO FA*/}
					{currentNoteInfo?.id === 22 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[75px]" width={27} />
					)}

					{/*PRIMER SOL*/}
					{currentNoteInfo?.id === 27 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[132px]" width={27} />
					)}

					{/*SEGUNDO SOL*/}
					{currentNoteInfo?.id === 28 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[65px]" width={27} />
					)}

					{/*PRIMER LA*/}
					{currentNoteInfo?.id === 33 && (
						<img
							src={noteImg}
							alt="striked note"
							className="absolute left-30 z-20 top-[123px]"
							width={27}
						/>
					)}

					{/*SEGUNDO LA*/}
					{currentNoteInfo?.id === 34 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[56px]" width={27} />
					)}

					{/*PRIMER SI*/}
					{currentNoteInfo?.id === 39 && (
						<>
							<img src={extraLineImg} alt="extra line" className="absolute z-20 top-[158px]" width={32} />
							<img
								src={noteOnBottomImg}
								alt="note"
								className="absolute left-30 z-20 top-[175px]"
								width={32}
							/>
						</>
					)}

					{/*SEGUNDO SI*/}
					{currentNoteInfo?.id === 40 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[113px]" width={27} />
					)}

					{/*TERCER SI*/}
					{currentNoteInfo?.id === 41 && (
						<img src={noteImg} alt="note" className="absolute left-30 z-20 top-[47px]" width={27} />
					)}
				</>
			)}
		</>
	);
};

export default CurrentNote;
