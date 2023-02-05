import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { UserContext } from "./context/UserContext";

import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ReviewById from "./components/ReviewById";

function App() {
  const [slug, setSlug] = useState("");
  const callbackFn = (data) => {
    setSlug(`${data}`);
  };

  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m="auto">
      <Typography>{slug}</Typography>
      <UserContext.Provider value='grumpy19'>
        <NavBar callback={callbackFn} />
        <Routes>
          <Route path="/" element={<Home slug={slug} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews/:review_id" element={<ReviewById />} />
        </Routes>
      </UserContext.Provider>
    </Box>
  );
}

export default App;
