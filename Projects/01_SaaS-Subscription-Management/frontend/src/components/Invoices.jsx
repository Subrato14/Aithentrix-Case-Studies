import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function Invoices(){
  const [list,setList] = useState([]);
  useEffect(()=>{ API.get("/admin/reports").then(r=>console.log(r.data)).catch(()=>{}); }, []);
  return (
    <div>
      <h2>Invoices (minimal)</h2>
      <p>Invoices are recorded via Stripe webhooks and accessible via admin export.</p>
    </div>
  );
}
