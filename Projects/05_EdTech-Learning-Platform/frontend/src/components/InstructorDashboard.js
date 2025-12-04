import React, { useEffect, useState } from "react";
import API from "../utils/api";

function InstructorDashboard() {
  const [myCourses, setMyCourses] = useState([]);
  const [form, setForm] = useState({ title: "", shortDescription: "", description: "" });

  useEffect(() => {
    API.get("/courses").then(res => {
      // filter courses by instructor
      const tokenRole = localStorage.getItem("role");
      // backend returns all; instructor can create
      setMyCourses(res.data.filter(c => c.instructor && c.instructor._id === localStorage.getItem("userId")));
    });
  }, []);

  const create = async () => {
    await API.post("/courses", form);
    API.get("/courses").then(res => setMyCourses(res.data));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Instructor Dashboard</h2>
      <h3>Create Course</h3>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} /><br/><br/>
      <textarea placeholder="Short description" onChange={e => setForm({...form, shortDescription: e.target.value})} /><br/><br/>
      <textarea placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} /><br/><br/>
      <button onClick={create}>Create</button>

      <h3>My Courses</h3>
      {myCourses.map(c => <div key={c._id}>{c.title}</div>)}
    </div>
  );
}

export default InstructorDashboard;
