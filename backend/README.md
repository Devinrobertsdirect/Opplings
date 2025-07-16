# OpplingsEngine Backend

This is the Express.js backend for OpplingsEngine.

## Setup

```bash
cd backend
npm install
```

## Run in Development

```bash
npm run dev
```

## Run in Production

```bash
npm start
```

## Environment Variables
- `DATABASE_URL` (PostgreSQL connection string)

## Endpoints
- `POST /api/claim/:uuid` — Claim a QR code and receive an Oppling
- `GET /api/health` — Health check

## Dependencies
- express
- uuid
- pg
- dotenv
- cors 