import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await API.post("/users/login", form);
    localStorage.setItem("token", res.data.token);
    nav("/doctors");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      /><br/><br/>
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      /><br/><br/>
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;
