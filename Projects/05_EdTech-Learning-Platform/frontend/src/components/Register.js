import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", form);
      nav("/login");
    } catch (error) {
      setErr(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={submit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /><br/><br/>
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /><br/><br/>
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} /><br/><br/>
        <select value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select><br/><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
