import { useState, useRef } from "react";
import songDone from "../audio/LoveSomeone_LukasGraham.mp3";
import song2 from "../audio/Older_SashaSloan.mp3";
import song1 from "../audio/ToTheMoon-hooligan-6484403.mp3";
import SongControl from "./songControl/SongControl";

const HomePage = () => {
  let songs = [song1, song2];
  let domH1 = useRef();
  let domImg = useRef();
  const titleContent = "Hello bấy bì, press button below to next";
  const classImg = "bg-uyen-em0";
  const notFound = "notFound";
  const [content, setContent] = useState(titleContent);
  const [img, setImg] = useState(classImg);
  let [timeLeft, setTimeLeft] = useState(0);
  let [isPlay, setIsPlay] = useState(false);
  let [audio, setAudio] = useState(new Audio(songs[0]));
  let [isDone, setIsDone] = useState(true);

  const reset = () => {
    audio.src && audio.pause();
    setContent(titleContent);
    setImg(classImg);
    setTimeLeft(0);
    setIsPlay(false);
    setAudio(new Audio());
    setIsDone(true);
  };

  const playMusic = () => {
    if (!isPlaying(audio)) {
      if (audio.src && !audio.src.includes(notFound)) {
        audio.play();
        setIsPlay(true);
      }
    } else {
      audio.src && audio.pause();
      audio.src && setIsPlay(false);
    }
  };
  const isPlaying = (audElem) => {
    return !audElem.paused;
  };

  //#region HandleButton
  const handleAction = () => {
    if (isDone) {
      if (!audio.src.includes(songDone)) {
        audio.src = songDone;
        setAudio(audio);
        setIsPlay(false);
        setIsDone(false);
      }
      domH1.current.classList.remove("animate-textblur-slow3");
      setContent("How are you today?");
      domH1.current.classList.add("animate-textblur-slow");
      audio.src && audio.pause();
      actionDone();
    } else {
      reset();
    }
  };
  const actionDone = () => {
    setTimeout(() => {
      domH1.current.classList.remove("animate-textblur-slow");
      setContent("If you're tire, relax....");
      domH1.current.classList.add("animate-textblur-slow1");
      setTimeout(() => {
        domH1.current.classList.remove("animate-textblur-slow1");
        setContent("Everything is okay");
        domH1.current.classList.add("animate-textblur-slow2");
        setTimeout(() => {
          domH1.current.classList.remove("animate-textblur-slow2");
          setContent("Listening to music <3");
          domH1.current.classList.add("animate-textblur-slow3");
          if (!isPlaying(audio)) {
            audio.play();
            setIsPlay(true);
          } else {
            alert("Playing... Please wait to end.");
          }
        }, 4000);
      }, 4000);
    }, 5000);
  };
  //#endregion

  const actionLeft = () => {
    if (!isDone) return;
    if (timeLeft <= 0) {
      setTimeLeft(4);
      timeLeft = 4;
    } else {
      setTimeLeft(--timeLeft);
    }
    setImg(`bg-uyen-em${timeLeft} animate-textblur-down-up-slow`);
    audio.src = songs[timeLeft] || notFound;
    setAudio(audio);
    setIsPlay(false);
  };
  const actionRight = () => {
    if (!isDone) return;
    if (timeLeft < 4) {
      setTimeLeft(++timeLeft);
    } else {
      setTimeLeft(0);
      timeLeft = 0;
    }
    setImg(`bg-uyen-em${timeLeft} animate-textblur-down-up-slow`);
    audio.src = songs[timeLeft] || notFound;
    setAudio(audio);
    setIsPlay(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-zinc-900 to-slate-900 relative overflow-hidden">
      <div
        className="absolute bg-650 after:content-[' '] inset-0 -bottom-[650px] bg-gradient-radial
      animate-spin-slow"
      ></div>
      <div className="w-full absolute flex-grow justify-center">
        <div className="mt-28 text-center text-white text-5xl font-sans">
          <h1 ref={domH1}>{content}</h1>
        </div>
        <div className="flex items-center justify-center mt-6">
          <div
            ref={domImg}
            key={img}
            className={`flex ${img} items-center justify-center w-72 h-72 bg-cover rounded-full shadow-3xl`}
          ></div>
        </div>
        <SongControl
          onIsPlaying={isPlay}
          onActionLeft={actionLeft}
          onActionRight={actionRight}
          onPlayMusic={playMusic}
        />
        <div className="flex items-center justify-center mt-6 w-full">
          <button
            onClick={() => {
              handleAction();
            }}
            className=" rounded-2xl h-11 w-28 border-none bg-[#a7582c] font-semibold text-white hover:text-[#a7582c] hover:bg-white"
          >
            {isDone ? "DONE" : "CLOSE"}
          </button>
        </div>
      </div>
      <div className="fixed flex items-center justify-center w-full bottom-1 left-1 text-white font-bold text-2xl">
        <p>
          2022 - Made by Tai - Click here:
          <a
            href="https://www.facebook.com/Dragon.Pham.no1/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Facebook
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HomePage;
