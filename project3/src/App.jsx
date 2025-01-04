import React,{useState,useEffect} from 'react';
import './App.css';
const audioClips=[
  {key:'Q',label:'Heater 1',src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {key:'W',label:'Heater 2',src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {key:'E',label:'Heater 3',src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {key:'A',label:'Heater 4',src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  { key: 'S', label: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', label: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', label: 'Kick-n\'-Hat', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', label: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', label: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },

];
const DrumPad=({clip,setDisplay})=>{
  const playSound=()=>{
    const audio=document.getElementById(clip.key);
    audio.currentTime=0;
    audio.play();
    setDisplay(clip.label);
  };

useEffect(()=>{
  const handleKeyPress=(event)=>{
    if(event.key.toUpperCase()===clip.key){
      playSound();
    }
  };
  document.addEventListener('keydown',handleKeyPress);
  return ()=>{
    document.removeEventListener('keydown',handleKeyPress);
  };
},[clip.key]);
return (
  <button className='drum-pad bg-gray-700 text-white p-4 m-2 rounded hover:bg-gray-900 focus:outline-none' id={clip.label} onClick={playSound}> {clip.key}
  <audio className='clip' id={clip.key} src={clip.src}></audio></button>

);
};
const DrumMachine=()=>{
  const [display,setDisplay]=useState('');
  return(
    <div id="drum-machine" className='min-h-screen bg-gray-800 text-center text-white flex flex-col justify-center items-center'>
      <div id='display' className='bg-gray-600 text-xl p-4 rounded w-64 mb-4'>
        {display||"press a key"}
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {audioClips.map((clip)=>(
          <DrumPad key={clip.key} clip={clip} setDisplay={setDisplay} />
        ))}
      </div>
    </div>
  );
};
export default DrumMachine;
