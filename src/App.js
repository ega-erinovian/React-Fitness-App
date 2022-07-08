import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import Material UI
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box width="400px">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        </Routes>
    </Box>
  )
}

export default App