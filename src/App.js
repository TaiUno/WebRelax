import "./App.css";
import { useState, useRef } from "react";

function App() {
  let domH1 = useRef();

  let titleContent = "Hello bấy bì, press button below to next";
  let [content, setContent] = useState(titleContent);
  let isAction = false;
  const [audio] = useState(
    new Audio(
      "https://data36.chiasenhac.com/downloads/1968/4/1967418-ed9aa6ee/128/Love%20Someone%20-%20Lukas%20Graham.mp3"
    )
  );
  const handleAction = () => {
    setContent("How are you today?");
    domH1.current.classList.add("animate-textblur-slow");
    setTimeout(() => {
      setContent("If you're tire, relax....");
      domH1.current.classList.add("animate-textblur-slow1");
      setTimeout(() => {
        setContent("Everything is okay");
        domH1.current.classList.add("animate-textblur-slow2");
        setTimeout(() => {
          setContent("listening to music <3");
          domH1.current.classList.add("animate-textblur-slow3");
          audio.play();
        }, 4000);
      }, 4000);
    }, 5000);
  };

  return (
    <div className="h-screen bg-[#0d1017] relative overflow-hidden">
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
            className={
              (isAction ? "animate-calcir-slow " : "") +
              "flex items-center justify-center w-72 h-72 bg-uyen-em bg-cover rounded-full shadow-3xl"
            }
          ></div>
        </div>
        <div className="flex items-center justify-center mt-6 w-full">
          <input
            className=" rounded-2xl w-1/3 max-w-lg p-4 focus:outline-none font-serif"
            disabled
            placeholder="Developping..."
          ></input>
        </div>
        <div className="flex items-center justify-center mt-6 w-full">
          <button
            onClick={handleAction}
            className=" rounded-2xl h-11 w-28 border-none bg-[#a7582c] font-semibold text-white hover:text-[#a7582c] hover:bg-white"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
