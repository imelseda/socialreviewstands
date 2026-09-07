# TapReview 215 — Google NFC Review Stand Landing Page

A premium single-page marketing site for the **NFC 215 Google Review Stand** — a programmable NFC + QR countertop stand that sends customers straight to a business's Google review page in one tap.

Black-metallic + gold "luxe" theme, sales copy structured as Problem → Solution → Offer.

## Stack

- **Frontend**: React 19 (CRA + craco), Tailwind CSS, framer-motion, lucide-react, shadcn/ui, sonner
- **Backend**: FastAPI (Python), Motor (async MongoDB)
- **Database**: MongoDB

## Project Structure

```
├── backend/
│   ├── server.py            # FastAPI app — /api/enquiries (POST/GET)
│   ├── requirements.txt
│   └── .env.example         # Copy to .env and fill in
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.css        # Theme tokens (obsidian + gold)
│   │   └── components/landing/   # Hero, Problem, HowItWorks, Benefits,
│   │                           # Variants, Industries, Reviews, Offer,
│   │                           # Specs, Faq, OrderForm, Footer, data.js
│   ├── public/images/       # Product photography
│   └── .env.example         # Copy to .env and fill in
└── memory/PRD.md            # Product requirements & iteration log
```

## Run Locally

```bash
# Backend
cd backend
pip install -r requirements.txt
cp .env.example .env   # set MONGO_URL, DB_NAME, CORS_ORIGINS
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Frontend
cd frontend
yarn install
cp .env.example .env   # set REACT_APP_BACKEND_URL
yarn start
```

## API

| Method | Endpoint         | Description                        |
|--------|------------------|------------------------------------|
| GET    | `/api/`          | Health check                       |
| POST   | `/api/enquiries` | Create an order enquiry            |
| GET    | `/api/enquiries` | List enquiries (protect before prod) |

## Notes

- All backend routes are prefixed with `/api`.
- Secrets live only in `.env` files, which are git-ignored. Never commit them.
- Stripe checkout buttons are planned — CTAs currently route to the enquiry form.
- Not affiliated with or endorsed by Google LLC; see footer disclaimer.
