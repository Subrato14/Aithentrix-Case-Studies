const express = require('express');
const router = express.Router();

let properties = [
  { id: 1, title: "3BHK Apartment", location: "Mumbai", price: 22000000 },
  { id: 2, title: "Luxury Villa", location: "Bangalore", price: 45000000 }
];

router.get('/', (req, res) => {
  res.json(properties);
});

module.exports = router;
