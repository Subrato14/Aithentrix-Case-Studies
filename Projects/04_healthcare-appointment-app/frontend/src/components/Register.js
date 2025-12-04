import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });

  const submit = async () => {
    await API.post("/users/register", form);
    nav("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      /><br/><br/>

      <select
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select><br/><br/>

      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;
