import React, { useEffect, useState } from "react";
import API from "../utils/api";

function AppointmentList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    API.get("/appointments/mine").then((res) => setList(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Appointments</h2>

      {list.map((a) => (
        <div key={a._id} style={{ marginBottom: 15 }}>
          <strong>Doctor:</strong> {a.doctor?.user?.name} <br />
          <strong>Date:</strong> {a.date} <br />
          <strong>Slot:</strong> {a.slot}
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
