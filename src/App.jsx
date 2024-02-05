import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login/Login";
import Register from "./componets/Register/Register";
import Protected from "./componets/Protected/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/register'} element={<Register />} />
        <Route path={'/'} element={<Login />} />
        <Route path="/p" element={<Protected/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
