import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register(){
  const nav = useNavigate();
  const [f, setF] = useState({ name:"", email:"", password:"", currency:"usd" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/register", f);
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setF({...f,name:e.target.value})} /><br/>
      <input placeholder="Email" onChange={e=>setF({...f,email:e.target.value})} /><br/>
      <input placeholder="Password" type="password" onChange={e=>setF({...f,password:e.target.value})} /><br/>
      <select onChange={e=>setF({...f,currency:e.target.value})}>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
      </select><br/>
      <button type="submit">Register</button>
    </form>
  );
}
