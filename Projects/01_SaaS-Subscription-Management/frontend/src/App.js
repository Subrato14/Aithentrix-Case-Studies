import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/subscriptions')
      .then(res => setSubscriptions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>SaaS Subscriptions</h1>
      <ul>
        {subscriptions.map(sub => (
          <li key={sub.id}>{sub.name} - ${sub.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
