# TapReview 215 — PRD

## Original Problem Statement
Website promoting the Google NFC review stand (NFC 215 card): programmable NFC + QR countertop stand that boosts Google reviews. Multi-platform (Google, Facebook, Instagram, LINE, TikTok), Style A/B in black/white, CE certified, 1pc/pack, eco-friendly, Model 215. Real buyer reviews included.

## Iteration 2 (2026-09-07): Luxe Redesign + Sales Copy
User direction: competitor analysis (tapfivestars.com, shop.tapfive.com, TAPro listing) → full copy rewrite using Problem → Solution → Offer sales formula; color scheme changed to black metallic + yellow/gold ("luxor", premium); clear CTAs; Stripe payment buttons to be added LATER (not implemented yet).

## User Personas
- Small business owners (cafés, salons, dental, auto, hotels, real estate) losing reviews to friction
- Multi-location buyers evaluating bulk

## Architecture
- Frontend: React + Tailwind + framer-motion + sonner + shadcn/ui. Dark luxe theme: #0A0B0E obsidian, gold #D4AF37/#F3E5AB, Playfair Display headings + Satoshi body. Sections in /app/frontend/src/components/landing/.
- Backend: FastAPI /api/enquiries (POST create, GET list) → MongoDB via motor. Unchanged from v1.
- Images: /app/frontend/public/images/ (9 product photos from user uploads).

## Implemented (2026-09-07)
- Navbar: glass dark, gold CTA "Get Your Stand"
- Hero: "Every happy customer. One tap. Five stars." + stats (8 sec / 3.3× / $0 fees) + phone+stand photo
- Problem section: 3 pain cards (search struggle, awkward ask, forgetfulness) + stat strip (74%, 3.3×, 2min vs 8sec)
- How It Works: Tap/Review/Done 3 steps + infographic image
- Benefits bento: $0 fees, every phone, tap+scan, day-one results, multi-platform, CE
- Variants: 4 luxe-named finishes with image swap
- Industries grid: 10 business types with icons
- Reviews: 4 real buyer testimonials (restyled dark/gold)
- Offer: inclusions list + 90-day money-back guarantee box (ASSUMED copy — user to confirm guarantee policy)
- Specs table, FAQ (subscription/phones/setup/delivery), Order enquiry form ("Reserve My Stand", Stripe note), Footer with Google non-affiliation disclaimer

## Verified
- Screenshot e2e: hero/problem/variants/offer/order sections render in dark luxe theme; variant switch works; order form submits with success toast (enquiry saved to DB)

## Iteration 3 (2026-09-07): GitHub prep + SEO
- Repo cleaned for GitHub: .env files git-ignored (were untracked but not ignored — secret-leak risk fixed), .env.example templates added, README rewritten with stack/structure/API docs, committed.
- SEO: title, meta description, keywords, robots, theme-color #0A0B0E, Open Graph + Twitter/X cards. Generated 1200×630 og-cover.png (obsidian + gold, product photo) and gold-star favicon set (favicon.ico/.png, apple-touch-icon) via PIL. Note: og:image is root-relative — make absolute once a custom domain is set.

- Hero media is now a 30s autoplaying demo video (user-uploaded tap4-reviews.mp4 → /videos/hero-demo.mp4, faststart-remuxed so playback starts instantly) with a VP9 WebM fallback and poster image. Note: test-browser Chromium cannot decode H.264; real browsers use the MP4.
- Hero floating Tap/Scan badges removed per user request; hero video has a "Tap for sound" unmute toggle (browsers block autoplay-with-sound).
- Solution (How It Works) section shows the user-uploaded bar-scene lifestyle photo (solution-bar-scene.png). NOTE: this photo visibly carries "TAPFIVE" competitor branding on the stand/cards — flagged to user; swap if a branded-free shot is available.
- Testimonial video (demo-testimonial.mp4/.webm, compressed 7.9MB/6MB) now lives in the Reviews section above the testimonial cards, with native controls + sound.

## Iteration 4 (2026-09-10): Domain + Rebrand to TapFive Review
- User's own domain: tapfivereview.com → site rebranded from "TapReview 215" to "TapFive Review" (navbar, footer, disclaimer, copyright, README).
- SEO: canonical + og:url = https://tapfivereview.com/, og:image/twitter:image now ABSOLUTE (https://tapfivereview.com/images/og-cover.png), title/author/site_name updated. og-cover.png regenerated with TapFive Review branding + domain.
- PENDING MANUAL STEP: domain DNS/mapping must be connected in Emergent deployment settings for tapfivereview.com to serve the app; absolute OG URLs only resolve once the domain is live.

## Iteration 5 (2026-09-12): Social proof
- SocialProofPopup: rotating purchase toasts (12 mock buyers × 4 stand styles), first at 5s, visible 6s, gap 8–15s, dismissible — dark/gold themed.
- SoldTodayBadge: seeded per-day count (60–99/day curve) that ticks live every 25–55s; placed in hero (under CTAs) and order section. NOTE: both are SIMULATED marketing figures, not real order data.

## Iteration 6 (2026-09-12): Shopify theme
- Built complete uploadable Shopify theme at /app/shopify-theme/ + zip at /app/tapfive-review-theme.zip (47 files, 6.7MB, committed to git incl. zip via add -f).
- Structure: layout/theme.liquid (fonts, OG, favicon), templates index/product/cart/page (json) + 404/search (liquid), 14 sections (header, footer, hero, problem, solution, benefits, variants, industries, reviews, offer, specs, faq, order, main-product), snippets tfr-sold-today + tfr-social-proof, assets tfr.css + all images (NO videos — Shopify theme zips reject mp4; hero + reviews sections have video pickers for merchant upload of hero-demo.mp4 / demo-testimonial.mp4).
- All JSON + section schemas validated. NOT tested in a live Shopify store (no store access).
- Custom-liquid guides for hero/problem/solution also saved in /app/memory/.

## Backlog
- P0: Stripe checkout buttons (user confirmed Stripe, "buttons later in the process") — needs pricing decision
- P1: User to confirm/edit 90-day guarantee claim; email notification on enquiry (Resend); admin view of enquiries
- P2: Demo video embed, bulk/multi-location pricing tiers, SEO/OG metadata

## Next Tasks
1. Wire Stripe payment buttons (needs prices per variant/pack)
2. Confirm guarantee + shipping copy accuracy
3. Resend email alerts on new enquiry
