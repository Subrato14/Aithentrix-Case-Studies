const express = require('express');
const cors = require('cors');
const subscriptions = require('./routes/subscriptions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/subscriptions', subscriptions);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
