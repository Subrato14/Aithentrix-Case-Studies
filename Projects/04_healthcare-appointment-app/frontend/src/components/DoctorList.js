import React, { useEffect, useState } from "react";
import API from "../utils/api";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    API.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  const bookSlot = async (doctorId, slot) => {
    const res = await API.post("/appointments", {
      doctor: doctorId,
      slot,
      date: new Date().toISOString().slice(0, 10),
    });

    setMsg("Appointment booked!");
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Doctors</h2>

      {msg && <p style={{ color: "green" }}>{msg}</p>}

      {doctors.map((d) => (
        <div key={d._id} style={{ marginBottom: 20 }}>
          <h3>{d.user.name}</h3>
          <p>Specialization: {d.specialization}</p>
          <p>Experience: {d.experience} years</p>

          <strong>Available Slots:</strong><br/>
          {d.availableSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => bookSlot(d._id, slot)}
              style={{ margin: "5px" }}
            >
              {slot}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
