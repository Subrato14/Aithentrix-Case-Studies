const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/products');
const categoriesRoute = require('./routes/categories');
const cartRoute = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoute);
app.use('/api/categories', categoriesRoute);
app.use('/api/cart', cartRoute);

const PORT = 5002;
app.listen(PORT, () => console.log(`Ecommerce Backend running on port ${PORT}`));
