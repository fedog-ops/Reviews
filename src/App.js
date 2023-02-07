import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {Typography } from "@mui/material";

import { UserContext } from "./context/UserContext";

import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ReviewById from "./components/ReviewById";

function App() {
  const [slug, setSlug] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState('grumpy19')
  const callbackFn = (data) => {
    setSlug(`${data}`);
  };

  return (
   <div >
      <UserContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
        <NavBar callback={callbackFn} />
        <Routes>
          <Route path="/" element={<Home slug={slug} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews/:review_id" element={<ReviewById />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
