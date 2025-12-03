const express = require('express');
const cors = require('cors');
const leadsRoute = require('./routes/leads');
const propertiesRoute = require('./routes/properties');
const agentsRoute = require('./routes/agents');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/leads', leadsRoute);
app.use('/api/properties', propertiesRoute);
app.use('/api/agents', agentsRoute);

const PORT = 5001;
app.listen(PORT, () => console.log(`CRM Backend running on port ${PORT}`));
