import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function App() {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)" gap="1px"// Defines a 6-column grid
      bg="gray.50"
    >
      {/* Sidebar */}
      <GridItem colSpan={2}>
      <Box
        as="aside"
        bg="purple.400"
        
         // Fixed width (2/6 of the grid width)
        minHeight="100vh"
         // Ensure it's above the main content
        
      >
        <Text color="black" display="flex">Sidebar</Text>
        <br></br>
        <Sidebar />
      </Box>
      </GridItem>

      {/* Main Content */}
      <GridItem
        as="main"
         colStart={95} colEnd={"auto"}
      >

        <Box id="section1" bg="blue.400" color="black" minHeight="100vh" minWidth="80vw" >
          PAGE 1
          <Page1 />
        </Box>



        <Box id="section2" bg="blue.100" color="black" minHeight="100vh" minWidth="80vw">
          PAGE 2
          <Page2 />
        </Box>
        <Box id="section3" bg="green.400" color="black" minHeight="100vh" minWidth="80vw">
          PAGE 3
          <Page3 />
        </Box>
      </GridItem>
    </Grid>
  );
}
