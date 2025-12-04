import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link } from "react-router-dom";

function CourseList() {
  const [courses, setCourses] = useState([]);
  useEffect(() => { API.get("/courses").then(res => setCourses(res.data)); }, []);
  return (
    <div style={{ padding: 20 }}>
      <h2>Courses</h2>
      {courses.map(c => (
        <div key={c._id} style={{ marginBottom: 15 }}>
          <h3><Link to={`/courses/${c._id}`}>{c.title}</Link></h3>
          <p>{c.shortDescription}</p>
          <small>Instructor: {c.instructor?.name}</small>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
