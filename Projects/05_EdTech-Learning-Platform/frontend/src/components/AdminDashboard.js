import React, { useEffect, useState } from "react";
import API from "../utils/api";

function AdminDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/courses").then(res => setCourses(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <h3>All Courses</h3>
      {courses.map(c => (
        <div key={c._id}>
          <strong>{c.title}</strong> — {c.instructor?.name}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
