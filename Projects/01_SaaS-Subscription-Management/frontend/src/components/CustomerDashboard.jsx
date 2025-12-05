import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function CustomerDashboard(){
  const [sub,setSub] = useState(null);
  useEffect(()=>{ API.get("/subscriptions/me").then(r=>setSub(r.data)); }, []);
  return (
    <div>
      <h2>Customer Dashboard</h2>
      {sub ? (
        <div>
          <p>Plan: {sub.plan ? sub.plan.name : "—"}</p>
          <p>Status: {sub.status}</p>
          <p>Expires: {sub.currentPeriodEnd ? new Date(sub.currentPeriodEnd).toLocaleString() : "-"}</p>
        </div>
      ) : <p>No active subscription</p>}
    </div>
  );
}
