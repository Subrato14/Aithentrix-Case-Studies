const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
  { id: 2, name: "Running Shoes", price: 3500, category: "Footwear" },
  { id: 3, name: "Wrist Watch", price: 1500, category: "Accessories" }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
