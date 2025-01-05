import React,{useState,useEffect} from "react";
import "./index.css";

function App(){
  const [breakLength,setBreakLength]=useState(5);
  const [sessionLength,setSessionLength]=useState(25);
  const [timeLeft,setTimeLeft]=useState(25*60);
  const [isRunning,setIsRunning]=useState(false);
  const [isBreak,setIsBreak]=useState(false);

  const formatTime=(time)=>{
    const minutes=Math.floor(time/60);
    const seconds=time%60;
    return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
   
  };

  const handleIncrement=(type)=>{
    if(type==='break' && breakLength<60){
      setBreakLength(breakLength+1);
    }
    if(type==='session' && sessionLength<60){
      setSessionLength(sessionLength+1);
    
    if(!isRunning){
      setTimeLeft((sessionLength+1)*60);
    }
    }
  };

  const handleDecrement = (type) => {
    if (type === "break" && breakLength > 1) setBreakLength(breakLength - 1);
    if (type === "session" && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      if (!isRunning) setTimeLeft((sessionLength - 1) * 60);
    }
  };

  const reset=()=>{
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25*60);
    setIsRunning(false);
    setIsBreak(false);
    const audio=document.getElementById("beep");
    audio.pause();
    audio.currentTime=0;
  };

  const toggleStartStop=()=>{
    setIsRunning(!isRunning);
  };

  useEffect(()=>{
    if(isRunning){
      const timer=setInterval(()=>{
        setTimeLeft((prev)=>{
          if(prev<=0){
            const audio=document.getElementById("beep");
            audio.play();
            setIsBreak(!isBreak);
            return isBreak? sessionLength*60:breakLength*60;
          }
          return prev-1;
        });
      },1000);
      return ()=> clearInterval(timer);
    }
  },[isRunning,isBreak,sessionLength,breakLength]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-8">timer</h1>
      <div className="flex space-x-8">
        <div className="text-center">
          <h2 id="break-label" className="font-bold mb-2">Break Length</h2>
          <div className="flex items-center justify-center space-x-4">
            <button id="break-decrement" onClick={()=>handleDecrement("break")} className="p-2 bg-red-500 text-white rounded">-</button>
            <span id="break-length" className="text-lg">{breakLength}</span>
            <button id="break-increment" onClick={() => handleIncrement("break")} className="p-2 bg-green-500 text-white rounded">+</button>
          </div>
        </div>
        <div className="text-center">
          <h2 id="session-label" className="font-bold mb-2">Session Length</h2>
          <div className="flex items-center justify-center space-x-4">
            <button id="session-decrement" onClick={()=>handleDecrement("session")} className="p-2 bg-red-500 text-white rounded">-</button>
            <span id="session-length" className="text-lg">{sessionLength}</span>
            <button id="session-increment" onClick={()=>handleIncrement("session")} className="p-2 bg-green-500 text-white rounded">+</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 id="timer-label" className="font-bold mb-2">{isBreak?"Break":"Session"}</h2>
        <div id="time-left" className="text-4xl font-bold">{formatTime(timeLeft)}</div>
      </div>
      <div className="flex space-x-4 mt-8">
        <button id="start_stop" onClick={toggleStartStop} className="p-4 bg-blue-500 text-white rounded">{isRunning?"pause":"start"}</button>
        <button id="reset" onClick={reset} className="p-4 bg-gray-500 text-white rounded">Reset</button>
      </div>
      <audio id="beep" src="/beep.mp3" preload="auto"></audio>
    </div>
  );
  
}
export default App;
