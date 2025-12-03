const express = require('express');
const router = express.Router();

let leads = [
  { id: 1, name: "John Doe", phone: "9991112222", status: "New" },
  { id: 2, name: "Sarah Paul", phone: "8884443333", status: "Contacted" }
];

router.get('/', (req, res) => {
  res.json(leads);
});

module.exports = router;
