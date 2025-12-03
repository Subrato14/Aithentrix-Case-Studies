const express = require('express');
const router = express.Router();

let categories = ["Electronics", "Footwear", "Accessories", "Home Decor"];

router.get('/', (req, res) => {
  res.json(categories);
});

module.exports = router;
