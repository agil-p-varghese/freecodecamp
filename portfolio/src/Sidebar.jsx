// src/Sidebar.jsx
import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react"; // Correct Chakra imports

export default function Sidebar() {
  return (
    <Box ml="10px">
      <List.Root>
        <List.Item display="flex">
        <a href="#section1" color="black">Section1</a>
    <br></br>
    </List.Item>
    <List.Item display="flex">
      
        <a href="#section2" color="black" >Section2</a>
    <br></br>
    </List.Item>
    <List.Item display="flex">
      
        <a href="#section3" color="black">Section3</a>
        </List.Item>
     
        </List.Root>
      </Box>
    
  );
}
