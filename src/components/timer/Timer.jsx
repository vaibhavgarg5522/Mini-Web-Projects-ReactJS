import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();

  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;

  const start = () => {
    myFun();
    setStatus(setInterval(myFun, 10));
  };

  const stop = () => {
    clearInterval(status);
  };

  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };

  const myFun = () => {
    if (updMilli === 100) {
      updMilli = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }
    updMilli++;
    return setTime({ hr: updHr, min: updMin, sec: updSec, milli: updMilli });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-white to-green-300 px-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-center">Countdown Timer</h1>

      <div className="flex flex-col items-center rounded-2xl bg-indigo-50 w-full max-w-[560px] sm:h-[300px] h-auto mt-6 p-6 sm:p-8">
        <h1 className="mt-5 text-lg sm:text-2xl text-center font-mono tracking-wider">
          {`${time.hr.toString().padStart(2, '0')} : ${time.min
            .toString()
            .padStart(2, '0')} : ${time.sec
            .toString()
            .padStart(2, '0')} : ${time.milli.toString().padStart(2, '0')}`}
        </h1>

        <div className="flex flex-wrap justify-center mt-6 gap-3 sm:gap-4">
          <button
            onClick={start}
            className="border py-1.5 px-5 rounded-xl bg-sky-600 text-white hover:bg-red-600 text-sm sm:text-base"
          >
            Start
          </button>
          <button
            onClick={stop}
            className="border py-1.5 px-5 rounded-xl bg-sky-600 text-white hover:bg-green-600 text-sm sm:text-base"
          >
            Pause
          </button>
          <button
            onClick={reset}
            className="border py-1.5 px-5 rounded-xl bg-sky-600 text-white hover:bg-red-600 text-sm sm:text-base"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
