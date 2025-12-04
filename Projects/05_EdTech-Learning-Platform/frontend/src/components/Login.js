import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      if (res.data.role === "student") nav("/student");
      else if (res.data.role === "instructor") nav("/instructor");
      else nav("/admin");
    } catch (error) {
      setErr(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={submit}>
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /><br/><br/>
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
