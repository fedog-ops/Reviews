import React from 'react'
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  const [slug, setSlug] = useState(undefined)
  const callbackFn = (data) => {
      setSlug(`${data}`);
  }
  return (
   <Box width={"400px"} sx={{width : {xl : '1488px'}} } m='auto'>
    <Typography>{slug}</Typography>
      <NavBar  callback={callbackFn}/>
      <Routes>
        <Route path='/' element={<Home slug={slug}/>}/>
      </Routes>

   </Box>
  );
}

export default App;
