# TapReview 215 — PRD

## Original Problem Statement
Build a website promoting the new Google NFC review stands (NFC 215 card): a programmable NFC + QR standing display card that boosts Google reviews. Multi-platform (Google Reviews, Facebook, Instagram, LINE, TikTok), standing bracket design in Style A/B black/white, CE certified, 1 piece per pack, eco-friendly build, Model 215 card. Includes real buyer reviews (easy setup, 7–9 day delivery, automatic review collection).

## User Personas
- Small business owners (cafés, salons, massage studios, retail) who want more Google reviews without asking customers
- Social-media-first brands wanting TikTok/Instagram follows from foot traffic
- Resellers/distributors evaluating the product (specs, certification, packaging)

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, lucide-react, sonner toasts, shadcn/ui (accordion, input, textarea, label). Single-page landing at `/app/frontend/src/components/landing/`.
- Backend: FastAPI at `/app/backend/server.py`, routes prefixed `/api`, MongoDB via motor (MONGO_URL/DB_NAME from env). Pydantic BaseDocument + PyObjectId pattern.
- Product images served from `/app/frontend/public/images/` (4 user-provided photos).

## Core Requirements (static)
- Promote NFC 215 stand: features, variants, specs, reviews, FAQ
- Order/enquiry capture with variant + quantity
- Premium e-commerce landing aesthetic (Cabinet Grotesk + Satoshi, off-white #F9F9F7, Google Blue #4285F4)

## Implemented (2026-08-31)
- Sticky glassmorphic navbar with anchors + Order Now CTA
- Hero with product photo, floating Tap/Scan badges, trust stats, staggered entrance animations
- How-it-works 3-step bento (Tap/Scan → Review page opens → Rating grows)
- Features bento grid (multi-platform chips, NTAG215, bracket design, CE, eco, 1pc pack)
- Dark variant-selector section: 4 styles (A/B × black/white) with animated image swap
- Real customer reviews from the listing (4 cards, star ratings)
- Specs table (model 215, dimensions, chip, certification, packaging) + dimension photo
- FAQ accordion (6 Q&As)
- Order enquiry form → POST /api/enquiries (MongoDB), GET /api/enquiries list endpoint, sonner success/error toasts
- Fixed asset mapping bug: user-provided images were downloaded in rotated order; renamed files to match content

## Verified
- curl: POST/GET /api/enquiries return JSON with string ids (no ObjectId leakage)
- Screenshot e2e: hero render, variant switch updates image, FAQ accordion opens, order form submits with success toast

## Backlog
- P0: none blocking
- P1: Admin view for enquiries (protected), email notification on new enquiry (Resend), pricing display + Stripe checkout
- P2: Multi-language support, review marquee animation, wholesale/bulk pricing tiers, SEO metadata + OG tags

## Next Tasks
1. Add email notification when an enquiry arrives (Resend managed integration)
2. Add pricing + Stripe checkout for direct purchase
3. Add simple admin login to view enquiries
