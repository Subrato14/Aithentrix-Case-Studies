import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [leads, setLeads] = useState([]);
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/leads').then(res => setLeads(res.data));
    axios.get('http://localhost:5001/api/properties').then(res => setProperties(res.data));
    axios.get('http://localhost:5001/api/agents').then(res => setAgents(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real Estate CRM Dashboard</h1>

      <h2>Leads</h2>
      <ul>
        {leads.map(l => (
          <li key={l.id}>{l.name} - {l.phone} - ({l.status})</li>
        ))}
      </ul>

      <h2>Properties</h2>
      <ul>
        {properties.map(p => (
          <li key={p.id}>{p.title} - {p.location} - ₹{p.price}</li>
        ))}
      </ul>

      <h2>Agents</h2>
      <ul>
        {agents.map(a => (
          <li key={a.id}>{a.name} – {a.listings} listings</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
