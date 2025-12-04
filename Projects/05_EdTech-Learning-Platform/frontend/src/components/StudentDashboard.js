import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    API.get("/enrollments/mine").then(res => setEnrolls(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Courses</h2>
      {enrolls.map(e => (
        <div key={e._id} style={{ marginBottom: 10 }}>
          <Link to={`/courses/${e.course._id}`}>{e.course.title}</Link> — Progress: {e.progress}%
        </div>
      ))}
    </div>
  );
}

export default StudentDashboard;
