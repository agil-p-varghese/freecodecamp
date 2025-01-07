import React,{useState} from 'react';
function App(){
  const [tasks,setTasks]=useState([]);
  const [task,setTask]=useState('');

  const addTask=()=>{
    if(task.trim()!==''){
      setTasks([...tasks,task]);
      setTask('');
    }
  };
  const removeTask=(index)=>{
    setTasks(tasks.filter((_,i)=>i!==index));
  };

  return(
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-center'>TO DO APP</h1>
        <div className='flex gap-2 mb-4'>
          <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='add a new task' className='border border-gray-300 p-2 rounded flex-grow'/>
          <button onClick={addTask} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add</button>
        </div>
        <ul className='list-disc pl-5'>
          {tasks.map((task,index)=>(
            <li key={index} className='flex justify-between items-center mb-2'>
              <span>{task}</span>
              <button onClick={()=>removeTask(index)} className='text-red 500 hover:underline'>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}
export default App;