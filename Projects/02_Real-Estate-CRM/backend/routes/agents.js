const express = require('express');
const router = express.Router();

let agents = [
  { id: 1, name: "Rakesh Sharma", listings: 12 },
  { id: 2, name: "Priya Verma", listings: 7 }
];

router.get('/', (req, res) => {
  res.json(agents);
});

module.exports = router;
