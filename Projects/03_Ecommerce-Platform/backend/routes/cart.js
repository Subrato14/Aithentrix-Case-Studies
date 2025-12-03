const express = require('express');
const router = express.Router();

let cart = [];

router.post('/', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ message: "Item added to cart", cart });
});

module.exports = router;
