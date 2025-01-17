import { Button, Input,List, Text ,Box} from '@chakra-ui/react';
import React, { useState } from 'react'

export default function Todo({ setTasksComple, setTasksDele}) {
    const [tasks,setTasks]=useState([]);
    const [tasksCompleted,setTasksCompleted]=useState([]);
    const [tasksDeleted,setTasksDeleted]=useState([]);
    const [task,setTask]=useState("");
    const addTask=()=>{
        if(task.trim()!=""){
            setTasks([...tasks,task]);
        }
        else{
        return alert("enter a task");
        }
    }
    const deleteTask=(index)=>{
    setTasks(tasks.filter((_,i)=>i!==index));
    setTasksDeleted([...tasksDeleted,tasks[index]]);
    setTasksDele([...tasksDeleted,tasks[index]]);

    for(let i=0;i<tasksDeleted.length;i++){
        console.log(tasksDeleted[i]);
    }
    }
    const completeTask=(index)=>{
        setTasks(tasks.filter((_,i)=>i!==index));
        setTasksCompleted([...tasksCompleted,tasks[index]]);
        setTasksComple([...tasksCompleted,tasks[index]]);
    for(let i=0;i<tasksCompleted.length;i++){
        console.log(tasksCompleted[i]);
    }
    }
    
  return (
    <Box>
      <Input type='text' value={task} onChange={(e)=>setTask(e.target.value)} />
      <Button type='submit' onClick={addTask} color="whiteAlpha.400">submit</Button>
      <List.Root>
        {tasks.map((task,index)=>(
            <List.Item>
             <Box boderRadius=" solid 2px" >
                <Text color="RedAlpha.400" fontWeight="bold">{task}</Text>
                <Button onClick={()=>deleteTask(index)} color="whiteAlpha.400">Delete</Button>
                <Button onClick={()=>completeTask(index)} color="whiteAlpha.400">Completed</Button>
                
             </Box>
            </List.Item>
        ))}
      </List.Root>
    </Box>
  )
}

