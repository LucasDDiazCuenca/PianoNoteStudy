import { motion } from "framer-motion";
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

const CurrentNote: React.FC<CurrentNoteProps> = ({
  currentClef,
  currentNoteInfo,
}) => {
  // Helper function to render animated notes
  const renderAnimatedNote = (
    src: string,
    alt: string,
    className: string,
    width: number,
    delay: number = 0
  ) => (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} drop-shadow-sm`}
      width={width}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        damping: 8,
        stiffness: 100,
      }}
    />
  );

  // Helper function to center notes
  const centerNote = (topPosition: string) =>
    `absolute left-1/2 transform -translate-x-1/2 z-20 ${topPosition}`;

  const renderAnimatedExtraLine = (
    className: string,
    width: number,
    delay: number = 0.1
  ) => (
    <motion.img
      src={extraLineImg}
      alt="extra line"
      className={`${className} opacity-80`}
      width={width}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.8, scaleX: 1 }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );

  return (
    <>
      {/*CLAVE DE SOL */}
      {currentClef === CLEF[0] && currentNoteInfo?.clef === CLEF[0] && (
        <>
          {/*PRIMER DO*/}
          {currentNoteInfo?.id === 0 &&
            renderAnimatedNote(
              strikedNoteImg,
              "striked note",
              centerNote("top-[150px]"),
              33,
              0
            )}

          {/*SEGUNDO DO*/}
          {currentNoteInfo?.id === 1 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[85px]"),
              27,
              0.1
            )}

          {/*TERCER DO*/}
          {currentNoteInfo?.id === 2 && (
            <>
              {renderAnimatedNote(
                strikedNoteImg,
                "note",
                centerNote("top-[20px]"),
                33,
                0
              )}
              {renderAnimatedExtraLine(
                "absolute left-1/2 transform -translate-x-1/2 z-20 top-[45px]",
                32,
                0.2
              )}
            </>
          )}

          {/*PRIMER RE*/}
          {currentNoteInfo?.id === 6 &&
            renderAnimatedNote(
              noteImg,
              "striked note",
              centerNote("top-[142px]"),
              27,
              0.1
            )}

          {/*SEGUNDO RE*/}
          {currentNoteInfo?.id === 7 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[75px]"),
              27,
              0.2
            )}

          {/*TERCER RE*/}
          {currentNoteInfo?.id === 8 && (
            <>
              {renderAnimatedNote(
                noteOnTopImg,
                "note",
                centerNote("top-[10px]"),
                33,
                0
              )}
              {renderAnimatedExtraLine(
                "absolute left-1/2 transform -translate-x-1/2 z-20 top-[45px]",
                32,
                0.2
              )}
            </>
          )}

          {/*PRIMER MI*/}
          {currentNoteInfo?.id === 12 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[132px]"),
              27,
              0.1
            )}

          {/*SEGUNDO MI*/}
          {currentNoteInfo?.id === 13 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[65px]"),
              27,
              0.2
            )}

          {/*PRIMER FA*/}
          {currentNoteInfo?.id === 18 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[122px]"),
              27,
              0.1
            )}

          {/*SEGUNDO FA*/}
          {currentNoteInfo?.id === 19 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[56px]"),
              27,
              0.2
            )}

          {/*PRIMER SOL*/}
          {currentNoteInfo?.id === 24 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[113px]"),
              27,
              0.1
            )}

          {/*SEGUNDO SOL*/}
          {currentNoteInfo?.id === 25 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[46px]"),
              27,
              0.2
            )}

          {/*PRIMER LA*/}
          {currentNoteInfo?.id === 30 && (
            <>
              {renderAnimatedNote(
                strikedNoteImg,
                "striked note",
                centerNote("top-[168px]"),
                33,
                0
              )}
              {renderAnimatedExtraLine(
                "absolute left-1/2 transform -translate-x-1/2 z-20 top-[158px]",
                32,
                0.2
              )}
            </>
          )}

          {/*SEGUNDO LA*/}
          {currentNoteInfo?.id === 31 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[103px]"),
              27,
              0.1
            )}

          {/*TERCER LA*/}
          {currentNoteInfo?.id === 32 &&
            renderAnimatedNote(
              strikedNoteImg,
              "note",
              centerNote("top-[38px]"),
              32,
              0.2
            )}

          {/*PRIMER SI */}
          {currentNoteInfo?.id === 36 &&
            renderAnimatedNote(
              noteOnBottomImg,
              "note",
              centerNote("top-[159px]"),
              32,
              0.1
            )}

          {/*SEGUNDO SI*/}
          {currentNoteInfo?.id === 37 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[94px]"),
              27,
              0.2
            )}

          {/*TERCER SI*/}
          {currentNoteInfo?.id === 38 &&
            renderAnimatedNote(
              noteOnTopImg,
              "note",
              centerNote("top-[29px]"),
              32,
              0.1
            )}
        </>
      )}

      {/*CLAVE DE FA*/}
      {currentClef === CLEF[1] && currentNoteInfo?.clef === CLEF[1] && (
        <>
          {/*PRIMER DO*/}
          {currentNoteInfo?.id === 3 && (
            <>
              {renderAnimatedNote(
                strikedNoteImg,
                "striked note",
                centerNote("top-[170px]"),
                33,
                0
              )}
              {renderAnimatedExtraLine(
                "absolute left-1/2 transform -translate-x-1/2 z-20 top-[160px]",
                32,
                0.2
              )}
            </>
          )}

          {/*SEGUNDO DO*/}
          {currentNoteInfo?.id === 4 &&
            renderAnimatedNote(
              noteImg,
              "note",
              centerNote("top-[103px]"),
              27,
              0.1
            )}

          {/*TERCER DO*/}
          {currentNoteInfo?.id === 5 &&
            renderAnimatedNote(
              strikedNoteImg,
              "striked note",
              centerNote("top-[40px]"),
              33,
              0.2
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
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[94px]"
              width={27}
            />
          )}

          {/*TERCER RE*/}
          {currentNoteInfo?.id === 11 && (
            <img
              src={noteOnTopImg}
              alt="note"
              className="absolute left-30 z-20 top-[30px]"
              width={32}
            />
          )}

          {/*PRIMER MI*/}
          {currentNoteInfo?.id === 15 && (
            <img
              src={strikedNoteImg}
              alt="note"
              className="absolute left-30 z-20 top-[150px]"
              width={32}
            />
          )}

          {/*SEGUNDO MI*/}
          {currentNoteInfo?.id === 16 && (
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[84px]"
              width={27}
            />
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
              <img
                src={extraLineImg}
                alt="extra line"
                className="absolute z-20 top-[47px]"
                width={32}
              />
            </>
          )}

          {/*PRIMER FA*/}
          {currentNoteInfo?.id === 21 && (
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[142px]"
              width={27}
            />
          )}

          {/*SEGUNDO FA*/}
          {currentNoteInfo?.id === 22 && (
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[75px]"
              width={27}
            />
          )}

          {/*PRIMER SOL*/}
          {currentNoteInfo?.id === 27 && (
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[132px]"
              width={27}
            />
          )}

          {/*SEGUNDO SOL*/}
          {currentNoteInfo?.id === 28 && (
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[65px]"
              width={27}
            />
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
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[56px]"
              width={27}
            />
          )}

          {/*PRIMER SI*/}
          {currentNoteInfo?.id === 39 && (
            <>
              <img
                src={extraLineImg}
                alt="extra line"
                className="absolute z-20 top-[158px]"
                width={32}
              />
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
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[113px]"
              width={27}
            />
          )}

          {/*TERCER SI*/}
          {currentNoteInfo?.id === 41 && (
            <img
              src={noteImg}
              alt="note"
              className="absolute left-30 z-20 top-[47px]"
              width={27}
            />
          )}
        </>
      )}
    </>
  );
};

export default CurrentNote;
