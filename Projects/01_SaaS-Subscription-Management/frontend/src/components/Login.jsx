import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const nav = useNavigate();
  const [f,setF] = useState({ email:"", password:"" });
  async function submit(e){
    e.preventDefault();
    const res = await API.post("/auth/login", f);
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  }
  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setF({...f,email:e.target.value})} /><br/>
      <input placeholder="Password" type="password" onChange={e=>setF({...f,password:e.target.value})} /><br/>
      <button type="submit">Login</button>
    </form>
  );
}
