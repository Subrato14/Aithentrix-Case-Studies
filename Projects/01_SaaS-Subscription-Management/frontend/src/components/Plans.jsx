import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function Plans(){
  const [plans, setPlans] = useState([]);
  useEffect(()=>{ API.get("/plans").then(r=>setPlans(r.data)); }, []);
  async function checkout(priceId){
    const res = await API.post("/subscriptions/checkout", { priceId });
    // redirect to Stripe Checkout
    window.location.href = res.data.url;
  }
  return (
    <div>
      <h2>Plans</h2>
      {plans.map(p=>(
        <div key={p._id} style={{border:"1px solid #ddd", padding:10, margin:10}}>
          <h3>{p.name} - {p.currency.toUpperCase()} {p.price}</h3>
          <ul>{p.features.map((f,i)=><li key={i}>{f}</li>)}</ul>
          <button onClick={()=>checkout(p.stripePriceId)}>Subscribe</button>
        </div>
      ))}
    </div>
  );
}
