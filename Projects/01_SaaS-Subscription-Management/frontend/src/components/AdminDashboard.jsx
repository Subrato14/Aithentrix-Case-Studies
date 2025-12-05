import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function AdminDashboard(){
  const [rep,setRep] = useState(null);
  useEffect(()=>{ API.get("/admin/reports").then(r=>setRep(r.data)).catch(e=>console.log(e)); }, []);
  const exportCSV = () => { window.location.href = "http://localhost:5000/api/admin/export/subscriptions"; };
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {rep ? (
        <div>
          <p>Total Users: {rep.totalUsers}</p>
          <p>Total Subscriptions: {rep.totalSubs}</p>
          <p>Revenue (placeholder): {rep.revenue}</p>
          <button onClick={exportCSV}>Export Subscriptions CSV</button>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}
