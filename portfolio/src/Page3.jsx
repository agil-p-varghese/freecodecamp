import { Box,Tabs,Button,Input ,Textarea, List,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import Todo from './Todo'


export default function Page3() {
    const [tasksComple,setTasksComple]=useState([]);
    const [tasksDele,setTasksDele]=useState([]);
  return (
    <Box>
        <Tabs.Root variant="soft-rounded" colorScheme="teal" defaultValue='Home'>
  <Tabs.List gapX="20px">
    <Tabs.Trigger value='Home' color="white">Home</Tabs.Trigger>
    <Tabs.Trigger value='Completed' color="white">Completed</Tabs.Trigger>
    <Tabs.Trigger value='Deleted' color="white">Deleted</Tabs.Trigger>
  </Tabs.List>
  
    <Tabs.Content value='Home'>
      <p>Welcome to the Home page!</p>
      <Todo 
            setTasksComple={setTasksComple} 
            setTasksDele={setTasksDele} 
          />
    </Tabs.Content>
    <Tabs.Content value='Completed'>
      <p>About us content goes here.</p>
      <List.Root>
        {tasksComple.map((task,index)=>(
            <List.Item key="index">
                <Box>
                    {console.log("hi")}
                <Text color="blackAlpha.400" fontWeight="bold">{task}</Text> 
                </Box>               
            </List.Item>
        ))}
      </List.Root>
    </Tabs.Content>
    <Tabs.Content value='Deleted'>
      <p>Contact us at example@example.com</p>
    </Tabs.Content>
  
</Tabs.Root>

    </Box>
  )
}
