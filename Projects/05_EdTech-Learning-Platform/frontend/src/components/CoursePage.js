import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";

function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    API.get(`/courses/${id}`).then(res => setCourse(res.data));
  }, [id]);

  const enroll = async () => {
    await API.post("/enrollments", { courseId: id });
    setMsg("Enrolled!");
    setTimeout(() => setMsg(""), 2000);
  };

  if (!course) return <p>Loading...</p>;
  return (
    <div style={{ padding: 20 }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={enroll}>Enroll</button>
      {msg && <p style={{ color: "green" }}>{msg}</p>}
      <h3>Lessons</h3>
      {course.lessons?.map(l => <div key={l._id}><strong>{l.title}</strong></div>)}
    </div>
  );
}

export default CoursePage;
