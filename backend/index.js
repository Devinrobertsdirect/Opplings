require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Claim route
const claimRoute = require('./routes/claim');
app.use('/api/claim', claimRoute(pool));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
}); 