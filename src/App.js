import "./App.css";

function App() {
  return (
    <div className="h-screen bg-[#0d1017] relative overflow-hidden">
      <div
        className="absolute bg-650 after:content-[' '] inset-0 -bottom-[650px] bg-gradient-radial
      animate-spin-slow"
      ></div>
      <div className="w-full absolute flex-grow justify-center">
        <div className="mt-28 text-center text-white text-5xl font-sans">
          <h1>Put a stressful thought in the star</h1>
        </div>
        <div className="flex items-center justify-center mt-6 bg-gradient-radial2">
          <div className="flex items-center justify-center w-72 h-72 bg-uyen-em bg-cover rounded-full shadow-3xl"></div>
        </div>
        <div className="flex items-center justify-center mt-6 w-full">
          <input
            className=" rounded-2xl w-1/3 max-w-lg p-4 focus:outline-none font-serif"
            placeholder="What's bothering you?..."
          ></input>
        </div>
        <div className="flex items-center justify-center mt-6 w-full">
          <button className=" rounded-2xl h-11 w-28 border-none bg-[#a7582c] font-semibold text-white hover:text-[#a7582c] hover:bg-white">
            DONE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;