import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import DoctorList from "./components/DoctorList";
import AppointmentList from "./components/AppointmentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
