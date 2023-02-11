import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ReviewById from "./components/ReviewById";


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
const [light, setLight] = useState(false);
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  const [slug, setSlug] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState('grumpy19')
  const callbackFn = (data) => {
    setSlug(`${data}`);
  };
const updateTheme = () => { 
//toggle between true and false, 0  and -1
  setLight((x) => 1 - x)
}
  return (
   <ThemeProvider theme={light? lightTheme: darkTheme} >
    <CssBaseline/>
      <UserContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
        <NavBar callback={callbackFn} updateTheme={updateTheme} light={light}/>
        <Routes>
          <Route path="/" element={<Home slug={slug} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews/:review_id" element={<ReviewById />} />
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
