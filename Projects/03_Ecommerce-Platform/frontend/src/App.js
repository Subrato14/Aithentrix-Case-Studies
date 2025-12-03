import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5002/api/products').then(res => setProducts(res.data));
    axios.get('http://localhost:5002/api/categories').then(res => setCategories(res.data));
  }, []);

  const addToCart = (item) => {
    axios.post('http://localhost:5002/api/cart', item).then(res => {
      setMsg(res.data.message);
      setTimeout(() => setMsg(""), 2000);
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Ecommerce Demo</h1>

      {msg && <p style={{ color: "green" }}>{msg}</p>}

      <h2>Categories</h2>
      <ul>{categories.map(c => <li key={c}>{c}</li>)}</ul>

      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
            <button style={{ marginLeft: 10 }} onClick={() => addToCart(p)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
