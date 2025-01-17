import { Box,Text } from '@chakra-ui/react'
import React from 'react'

export default function Page1() {
  return (
    <>
        <Text fontSize="4xl" fontWeight="bolder" textAlign="center">ROBOTICS</Text>
    
    <div style={{display:"grid", placeItems:"center", marginBottom:"10px"}}>
    <img src="/robo face.jpg" style={{width:"40vw", height:"35vh"}} ></img>
    </div>
    <Box border="solid black" borderRadius="md" boxShadow="md" mt="1px" ml="13vw" w="80vw" h="50vh" bg="blackAlpha.400">
        <Text fontSize="5xl" fontWeight="bolder" textAlign="center">Mr.ROBOT</Text>

        <Text fontSize="2xl" fontWeight="bold" textAlign="center" ml="5px">Speed::1 Thz</Text>

        <Text fontSize="2xl" fontWeight="bold" textAlign="center" ml="5px">Memory::1 Gb</Text>

        <Text fontSize="2xl" fontStyle="italic" textAlign="left" ml="5px">Iam specialialy designed to perform automated tasks in defence and aerospace industry .iam very euipped with modern technology and cutting edge software.</Text>

        
    </Box>
    </>
  )
}
