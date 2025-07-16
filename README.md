# OpplingsEngine

A modular game framework inspired by Pokémon, built with Phaser.js (frontend), Node.js/Express (backend), and PostgreSQL. Features secure QR code claims, unique digital monsters (Opplings), and cloud inventory.

## Folder Structure
```
/opplings-engine
├── frontend    # Phaser.js game
├── backend     # Express API
├── scripts     # QR code generator
├── db          # Postgres schema
├── .env        # Secrets/config (not committed)
├── netlify.toml
└── package.json
```

## Quick Start
1. Clone repo and install dependencies:
   ```bash
   npm install --workspaces
   ```
2. Set up your database using `/db/schema.sql`.
3. Configure `.env` files in each subproject.
4. Run frontend:
   ```bash
   cd frontend && npm start
   ```
5. Run backend:
   ```bash
   cd backend && npm run dev
   ```
6. Generate QR codes:
   ```bash
   cd scripts && npm run generate
   ```

## Deployment
- **Frontend:** Deploy `/frontend` to Netlify (see `netlify.toml`)
- **Backend:** Deploy `/backend` to Railway
- **Database:** Use Railway or Supabase, apply `/db/schema.sql`

## Features
- Top-down map, QR scanner, Oppling claim flow
- Secure, atomic QR code claims
- Modular, extensible codebase

---

For more, see individual READMEs in each folder. 