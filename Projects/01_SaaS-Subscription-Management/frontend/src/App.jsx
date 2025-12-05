import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Plans from "./components/Plans";
import CustomerDashboard from "./components/CustomerDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Invoices from "./components/Invoices";

export default function App(){
  return (
    <div style={{ padding:20 }}>
      <nav>
        <Link to="/">Plans</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Plans/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<CustomerDashboard/>} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>
    </div>
  );
}
