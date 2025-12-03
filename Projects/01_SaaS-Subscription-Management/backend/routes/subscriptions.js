const express = require('express');
const router = express.Router();

let subscriptions = [
  { id: 1, name: 'Basic', price: 10 },
  { id: 2, name: 'Pro', price: 30 },
  { id: 3, name: 'Enterprise', price: 100 }
];

// Get all subscriptions
router.get('/', (req, res) => {
  res.json(subscriptions);
});

module.exports = router;
