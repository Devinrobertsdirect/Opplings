const { v4: uuidv4 } = require('uuid');
const QRCode = require('qrcode');
const { Pool } = require('pg');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const QR_COUNT = 10000;
const OUTPUT_DIR = path.join(__dirname, 'qrcodes');
const BASE_URL = 'https://opplings.com/claim/';

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
  for (let i = 0; i < QR_COUNT; i++) {
    const uuid = uuidv4();
    // Insert into DB
    await pool.query('INSERT INTO qr_tokens (id) VALUES ($1) ON CONFLICT DO NOTHING', [uuid]);
    // Generate QR code
    const qrUrl = BASE_URL + uuid;
    const outPath = path.join(OUTPUT_DIR, `${uuid}.png`);
    await QRCode.toFile(outPath, qrUrl, { width: 256 });
    if ((i + 1) % 100 === 0) console.log(`Generated ${i + 1} QR codes...`);
  }
  await pool.end();
  console.log('Done!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
}); 