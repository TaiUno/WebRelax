import { useRef, useEffect } from "react";

const Clock = () => {
  const deg = 6;
  const domHr = useRef();
  const domMn = useRef();
  const domSc = useRef();

  useEffect(() => {
    let intervalId = setInterval(() => {
      let date = new Date();
      let hr = date.getHours() * 30;
      let mn = date.getMinutes() * deg;
      let sc = date.getSeconds() * deg;

      domHr.current.style.transform = `rotateZ(${hr + mn / 12}deg)`;
      domMn.current.style.transform = `rotateZ(${mn}deg)`;
      domSc.current.style.transform = `rotateZ(${sc}deg)`;
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div
      className="fixed w-[110px] h-[110px] flex items-center justify-center mt-1 mr-1 left-[50%] translate-x-[-50%] bg-clock bg-cover 
    rounded-full border-[4px] border-solid border-[#091921] shadow-clock-xl
    clock"
    >
      <div className="hour">
        <div ref={domHr} className="hr"></div>
      </div>
      <div className="min">
        <div ref={domMn} className="mn"></div>
      </div>
      <div className="sec">
        <div ref={domSc} className="sc"></div>
      </div>
    </div>
  );
};

export default Clock;
