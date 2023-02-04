import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'

import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
   <Box width={"400px"} sx={{width : {xl : '1488px'}} } m='auto'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

   </Box>
  );
}

export default App;
