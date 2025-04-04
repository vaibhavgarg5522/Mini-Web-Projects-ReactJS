import React, { useState } from "react";

const Timer = () => {

const [time,setTime]= useState({hr:0,min:0,sec:0,milli:0})
const [status , setStatus] = useState()

let updHr = time.hr;
let updMin = time.min;
let updSec = time.sec;
let updMilli = time.milli;


const start =()=>{
myFun();
setStatus(setInterval(myFun,10))
}
const stop =()=>{
 clearInterval(status)
  }

  const reset =()=>{
    clearInterval(status)
    setTime({hr:0,min:0,sec:0,milli:0})
     }



const myFun = ()=>{
  if(updMilli === 100){
    updMilli = 0
    updSec++
  }
  if(updSec === 60){
    updSec = 0
    updMin++
  }
  if(updMin === 60){
    updMin = 0 
    updHr++
  }
  updMilli++
  return setTime({hr:updHr,min:updMin,sec:updSec,milli:updMilli})
}

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[linear-gradient(white,green)]">
      <h1 className="text-2xl font-semibold">Countdown Timer</h1>

      <div className="flex flex-col items-center rounded-2xl bg-indigo-50 w-[560px] h-[300px] mt-6 p-6">
       
        <h1  className="mt-5 text-2xl">
          {time.hr+" : "+time.min+" : "+time.sec+" : "+time.milli}
        </h1>
        <div>
        <button onClick={start} className="border mx-3 py-1 px-4 rounded-2xl bg-sky-600 text-white hover:bg-red-600 mt-6">Start</button>
        <button onClick={stop} className="border mx-4 py-1 px-4 rounded-2xl bg-sky-600 text-white hover:bg-green-600 mt-6">Pause</button>
        <button onClick={reset} className="border mx-4 py-1 px-4 rounded-2xl bg-sky-600 text-white hover:bg-red-600 mt-6">Reset</button>
      </div>
      </div>
     
    </div>
  );
};

export default Timer;


