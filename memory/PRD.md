# Social Media Review Stands — PRD

## Original Problem Statement
Website promoting the Google NFC review stand (NFC 215 card): programmable NFC + QR countertop stand that boosts Google reviews. Multi-platform (Google, Facebook, Instagram, LINE, TikTok), Style A/B in black/white, CE certified, 1pc/pack, eco-friendly, Model 215. Real buyer reviews included.

## Iteration 2 (2026-09-07): Luxe Redesign + Sales Copy
User direction: competitor analysis (three competitor listings) → full copy rewrite using Problem → Solution → Offer sales formula; color scheme changed to black metallic + yellow/gold ("luxor", premium); clear CTAs; Stripe payment buttons to be added LATER (not implemented yet).

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
- Solution (How It Works) section shows the user-uploaded bar-scene lifestyle photo (solution-bar-scene.png). NOTE: this photo visibly carries a competitor brand name on the stand/cards — flagged to user; swap if a branded-free shot is available.
- Testimonial video (demo-testimonial.mp4/.webm, compressed 7.9MB/6MB) now lives in the Reviews section above the testimonial cards, with native controls + sound.

## Iteration 4 (2026-09-10): Domain + Rebrand to Social Media Review Stands
- User's own domain: socialreviewstands.com → site rebranded from "TapReview 215" to "Social Media Review Stands" (navbar, footer, disclaimer, copyright, README).
- SEO: canonical + og:url = https://socialreviewstands.com/, og:image/twitter:image now ABSOLUTE (https://socialreviewstands.com/images/og-cover.png), title/author/site_name updated. og-cover.png regenerated with Social Media Review Stands branding + domain.
- PENDING MANUAL STEP: domain DNS/mapping must be connected in Emergent deployment settings for socialreviewstands.com to serve the app; absolute OG URLs only resolve once the domain is live.

## Iteration 5 (2026-09-12): Social proof
- SocialProofPopup: rotating purchase toasts (12 mock buyers × 4 stand styles), first at 5s, visible 6s, gap 8–15s, dismissible — dark/gold themed.
- SoldTodayBadge: seeded per-day count (60–99/day curve) that ticks live every 25–55s; placed in hero (under CTAs) and order section. NOTE: both are SIMULATED marketing figures, not real order data.

## Iteration 6 (2026-09-12): Shopify theme
- Built legacy Shopify theme (since deleted — obsolete).
- Structure: layout/theme.liquid (fonts, OG, favicon), templates index/product/cart/page (json) + 404/search (liquid), 14 sections (header, footer, hero, problem, solution, benefits, variants, industries, reviews, offer, specs, faq, order, main-product), snippets tfr-sold-today + tfr-social-proof, assets tfr.css + all images (NO videos — Shopify theme zips reject mp4; hero + reviews sections have video pickers for merchant upload of hero-demo.mp4 / demo-testimonial.mp4).
- All JSON + section schemas validated. NOT tested in a live Shopify store (no store access).
- Custom-liquid guides for hero/problem/solution also saved in /app/memory/.

## Iteration 7 (2026-09-13): Legal pages
- Added /privacy (Privacy Policy) and /terms (Terms of Service) — React pages with shared LegalLayout (logo + back link + Footer), gold/obsidian legal-prose styles, footer links added. Copy covers enquiry form data, no-review-collection stance, 90-day guarantee, shipping 7–9 days, Google non-affiliation. NOTE: template legal copy, not lawyer-reviewed.
- Shopify direction abandoned by user ("forget about shopify"); theme zip remains in repo root.

## Iteration 8 (2026-09-13): Stripe checkout + award-level motion
- 3 products wired with 9 live Stripe payment links (buy.stripe.com): White/Black Stand 1×$29, 2×$54, 3×$69; NFC Card 1×$27, 2×$48, 3×$45. Shop section (#shop) with tier pills + buy buttons; hero/variants/offer CTAs → #shop. Popup products renamed to match.
- Motion upgrade: lenis smooth momentum scroll (yarn add lenis, anchor clicks via lenis.scrollTo), masked line-by-line hero headline reveal, hero media parallax (useScroll/useTransform), slow editorial marquee after hero, "Chapter 0X ·" manifesto numbering on all section eyebrows, product image hover zoom.

## Iteration 9 (2026-09-13): Social NFC stands
- 3 new products at $30 each with Stripe links: Instagram (fZucN54Syg2VgW19gK8g00e), Facebook (14AdR970Gg2VbBHdx08g00c), TikTok (dRm3cv3Ou03X8pv50u8g00d). Single tier each.
- New SocialStands section (#social, after Shop): "Not just reviews. Follows, too." + 3 platform cards with brand-tinted icons + social-trio.jpg. Shop now 6 products (2×3 grid), heading "Pick your growth machine." Popup orders include social stands. New images: social-instagram/facebook/tiktok.png, social-trio.jpg.

## Iteration 10 (2026-09-14): GitHub push + domain status
- Code pushed to https://github.com/imelseda/old-repo-removed (branch main, via one-time user PAT; token used once and removed from git remote config).
- User reported Stripe redirects + live purchase test + domain launch done. HOWEVER: https://socialreviewstands.com returned 403 Forbidden when checked (curl + browser) — DNS/proxy misconfiguration or host block; unresolved at time of check.

## Iteration 11 (2026-09-14): LIVE on Netlify
- socialreviewstands.com now serves the site via Netlify (403 fixed). Deploy config: netlify.toml (base frontend, yarn build, publish build, REACT_APP_BACKEND_URL → preview backend) + public/_redirects for SPA routes.
- Verified live E2E: hero video playing, marquee all 6 phrases, 6 product cards with correct Stripe links, reviews video loads, /thank-you + /privacy resolve, social proof popup + sold-today badge working.
- NOTE: enquiry form posts to the Emergent preview backend (REACT_APP_BACKEND_URL). If the preview backend is ever shut down, the form breaks — Stripe checkout unaffected. Long-term: host backend or move form to Netlify Forms.

## Backlog
- P0: Stripe checkout buttons (user confirmed Stripe, "buttons later in the process") — needs pricing decision
- P1: User to confirm/edit 90-day guarantee claim; email notification on enquiry (Resend); admin view of enquiries
- P2: Demo video embed, bulk/multi-location pricing tiers, SEO/OG metadata

## Next Tasks
1. Wire Stripe payment buttons (needs prices per variant/pack)
2. Confirm guarantee + shipping copy accuracy
3. Resend email alerts on new enquiry

## Iteration: Rebrand (2026-10-02) — "Social Media Review Stands" removed for trademark reasons
- New brand: **Social Media Review Stands**; new domain: **socialreviewstands.com**; new support email: support@socialreviewstands.com
- New tagline: "More Reviews and Followers. Zero Effort." (hero renders: "Happy customers. / More reviews and followers. / Zero effort." — third line gold gradient)
- Updated: Navbar, Footer (brand/disclaimer/copyright), LegalLayout, Hero tagline, ThankYouPage (email + back button), PrivacyPage, TermsPage, public/index.html (title, canonical, OG/Twitter meta → socialreviewstands.com), README.md, og-cover.png regenerated via PIL (/tmp/make_og.py, backup at /tmp/og-cover-backup.png)
- Hero tagline span padding bumped pb-1 → pb-2 to fix gradient descender clipping
- NOT changed: /app/shopify-theme (legacy, inactive), favicon (generic gold star, no brand text)
- Verified: testing_agent iteration_1.json — 26/26 frontend checks passed, zero the old brand occurrences on active site
- PENDING (user-side): push to GitHub (Save to Github) to trigger Netlify rebuild; point Netlify custom domain to socialreviewstands.com; update Stripe Payment Link after-payment redirects to https://socialreviewstands.com/thank-you; revoke the previously exposed GitHub PAT

## Iteration: GitHub repo migration (2026-10-02)
- Repo pushed to NEW remote: github.com/imelseda/socialreviewstands (main @ 0354629, includes full rebrand)
- Old remote imelseda/old-repo-removed abandoned; local origin retargeted (no credentials stored in remote URL)
- Auth: user-supplied classic PAT (ghp_...) used for one-off push after fine-grained PAT lacked Contents:write — BOTH tokens were pasted in chat and must be revoked by the user
- Verified: remote HEAD matches local, no token leaked to .git/config or any tracked file
- PENDING (user-side): relink Netlify site to the new repo (Build & deploy → Link repository), add custom domain socialreviewstands.com, update Stripe Payment Link redirects to https://socialreviewstands.com/thank-you, revoke both chat-exposed GitHub tokens

## Iteration: SEO pass (2026-10-04)
- Hero subtext now includes main keyword "social media review stands" (user-supplied copy)
- Copy reframe: stand positioned as "a done-for-you review and follower growth service in physical form" (HowItWorks intro)
- index.html: new meta description + expanded keywords (follower keywords added); 4 valid JSON-LD blocks (Organization, WebSite, Product w/ $29 offer, FAQPage w/ 7 Q&As); robots meta = index,follow
- New files: frontend/public/robots.txt (Allow all + sitemap), frontend/public/sitemap.xml (/, /privacy, /terms, /thank-you)
- Alt texts enriched with keywords: Hero, HowItWorks, Specs, SocialStands, Shop (template alt per product)
- New FAQ entry #1: "Can it also grow my social media followers?" (targets auto-follower keywords) — FAQS now 7
- Per-page document.title: LegalLayout sets "Privacy Policy | Social Media Review Stands" etc.; Landing restores home title
- Target keyword set: social media review stands (primary), google review stand, NFC review stand, get more google reviews, auto followers for small business, grow my social media followers, getting more social media followers, get more instagram followers, tiktok/facebook followers for business, tap to review, tap to follow, review stand for restaurants/salons
- Verified: JSON-LD parses (4/4), robots.txt + sitemap.xml served 200, hero keyword present, 7 FAQ items render, privacy title switches
- PENDING: push to GitHub (needs token — previous ones told to revoke), then Netlify auto-deploys; submit sitemap in Google Search Console once live on socialreviewstands.com

## Iteration: Google Analytics (2026-10-04)
- Added GA4 gtag.js (measurement ID G-5K11LQ7JTH) to frontend/public/index.html head, right after charset meta
- Required frontend supervisor restart — CRA was serving a cached index.html template (hot reload does not pick up public/index.html changes)
- Verified: both gtag script src and config call present in served HTML on preview URL; page title intact
- PENDING: push to GitHub to deploy; GA will start collecting once live (preview traffic also counts — filter internal traffic in GA4 if desired)

## Iteration: GitHub push #2 (2026-10-04)
- Pushed main @ 1c02984 (SEO pass + GA4 tag) to github.com/imelseda/socialreviewstands using user-supplied temp classic PAT (one-off, not stored; leak scan clean)
- Verified: remote HEAD = local HEAD
- Reminder to user stands: revoke the temp token after deploying; Netlify rebuilds on push if repo is linked to socialreviewstands repo

## Iteration: Hosting move to HostGator (2026-10-15, user-reported)
- User moved live hosting from Netlify to HostGator (Apache static hosting); socialreviewstands.com points there. DONE by user.
- User confirmed: Stripe thank-you redirects updated, sitemap submitted in Google Search Console, all chat-exposed GitHub tokens revoked. ALL DONE.
- Added frontend/public/.htaccess (Apache SPA rewrite → index.html) — REQUIRED or /privacy, /terms, /thank-you 404 on direct load (Stripe redirects buyers to /thank-you!). Verified it lands in build/ after yarn build.
- WARNING: OrderForm ("Reserve My Stand") posts to REACT_APP_BACKEND_URL = Emergent preview backend, which can sleep/change — on HostGator there is no FastAPI backend. Needs a permanent fix (Formspree or HostGator PHP mail script) if the form should keep working long-term.
- Deployment workflow going forward: yarn build → upload frontend/build contents (including hidden .htaccess) to HostGator public_html

## Iteration: Thank-you page de-indexing + final export prep (2026-10-18)
- Thank-you page now renders <meta name="robots" content="noindex, nofollow"> via LegalLayout noindex prop (client-side; restores index,follow on other pages)
- Deliberately NOT blocked in robots.txt — a Disallow would prevent Google from ever seeing the noindex tag (robots.txt controls crawling, not indexing)
- Removed /thank-you from sitemap.xml (now only /, /privacy, /terms); no internal links point to /thank-you
- Verified rendered: thank-you=noindex,nofollow; home/privacy=index,follow
- Final export built at frontend/build: includes .htaccess, robots.txt, sitemap.xml (no thank-you), GA tag G-5K11LQ7JTH — ALL CHECKS PASSED
- User uploads frontend/build contents (incl. hidden .htaccess) to HostGator public_html

## Iteration: GitHub push #3 (2026-10-18)
- Pushed main @ 4a695b0 (thank-you noindex + sitemap fix + HostGator .htaccess) to imelseda/socialreviewstands
- Token issue resolved: temp classic PAT initially had wrong scopes (admin:org, admin:public_key) — user added repo scope, push succeeded
- Verified: remote HEAD = local, no token stored locally; user to revoke temp token after use

## Iteration: Enquiry form → HostGator-native email (2026-10-18)
- New: frontend/public/send-enquiry.php — PHP mail() handler delivering form submissions to support@socialreviewstands.com (From: noreply@socialreviewstands.com, Reply-To: customer)
- Security: honeypot field (name="company", fake-success on bot fill), header-injection stripping, email validation, POST-only, JSON responses
- OrderForm.jsx rewired: posts FormData to /send-enquiry.php via fetch (axios/API dependency removed from component); all inputs now carry name attributes
- Tested with php-cli: 422 validation, honeypot fake-ok, 405 on GET, mail-path executes (500 here only because container has no sendmail — works natively on HostGator)
- Build verified: build/send-enquiry.php + build/.htaccess present
- NOTE: form shows error toast in Emergent preview (dev server can't run PHP) — expected; real delivery happens on HostGator only
- USER TODO: ensure support@socialreviewstands.com mailbox exists in HostGator; after uploading build, submit one real test enquiry to confirm delivery (check spam folder first time)
- Emergent FastAPI/MongoDB backend is now unused by the live site (kept for preview only)

## Iteration: Contact form rework + mail infra findings (2026-10-18)
- OrderForm: "Style" dropdown replaced with "Product" dropdown listing all 6 PRODUCTS (was VARIANTS color list); button "Reserve My Stand" → "Contact Us"; new form heading "Looking for help? We're here."; success toast updated; field renamed variant→product end-to-end (PHP reads $_POST['product'], email body labels "Product:")
- send-enquiry.php From: changed to support@socialreviewstands.com (HostGator Exim does sender verification on local domains — nonexistent noreply@ mailbox would be rejected)
- Verified in preview: heading, 6 product options, Contact Us button render; form submits with graceful toast (preview can't execute PHP — expected)
- MAIL INFRA FINDINGS (tested from container against 50.6.109.8:25, Exim/HostGator):
  - socialreviewstands.com has NO MX record (checked 8.8.8.8 + 1.1.1.1)
  - postmaster@socialreviewstands.com does not exist → likely NO mailboxes created yet on HostGator
  - BLOCKER for form delivery until user creates support@socialreviewstands.com in cPanel → Email Accounts (HostGator then auto-adds MX)
  - Real test email could not be sent from container (sender-verify + RBL rejections) — final delivery test must be done from live site after mailbox creation

## Iteration: Auto-reply email (2026-10-18)
- send-enquiry.php now sends an instant branded HTML confirmation to the customer after the admin notification succeeds (subject "We got your message — Social Media Review Stands", includes their chosen product, 24h reply promise, Reply-To support@). Admin mail success alone determines ok:true; auto-reply failure never blocks the form.
- Build updated: build/send-enquiry.php contains auto-reply. NOTE: user uploaded files BEFORE this change — must re-upload send-enquiry.php (single file is enough).
- DNS re-check: socialreviewstands.com STILL has no MX record even after user created the mailbox — if DNS is managed at the registrar (not HostGator nameservers), user must add MX record manually (e.g. MX 0 → mail.socialreviewstands.com, A mail → 50.6.109.8). Without MX, EXTERNAL mail to support@ is unreliable; local PHP mail() delivery on the server works regardless.
- External mailbox probe inconclusive (sender-verify callouts RBL-blocked for test sender domains) — final proof = submit live form and watch inbox.
- Recommend: enable cPanel "Email Deliverability" (DKIM/SPF) so auto-replies avoid spam folders.

## Iteration: Full old-brand purge (2026-10-18)
- Deleted legacy Shopify artifacts: /app/shopify-theme/, tapfive-review-theme.zip (3 copies incl. one in frontend/public — it was publicly downloadable from the live site!), memory/shopify-*.md/.liquid docs
- Scrubbed memory/PRD.md and test_reports/iteration_1.json of old brand name, old domain, and old repo name
- FOUND + FIXED: solution-bar-scene.png (How It Works section) visibly had the old brand name printed on the stand — replaced with tap-review-done.png infographic (brand-free, matches "Tap. Review. Done." heading), old image deleted
- Final scan: ZERO matches for the old brand/domain anywhere in /app excluding .git history; build regenerated clean
- USER TODO: (1) re-upload fresh build to HostGator AND delete tapfive-review-theme.zip + images/solution-bar-scene.png from the server (deletions don't propagate via upload); (2) delete the OLD GitHub repo imelseda/[old-repo-removed] — it still publicly hosts the old-branded codebase; (3) git history in current repo still contains old brand in past commits (harmless in practice; full purge requires history rewrite — ask if wanted)

## Iteration: GitHub push #4 (2026-10-18)
- Pushed main @ 73abc48 (auto-reply email + full old-brand purge) to imelseda/socialreviewstands — reused the earlier classic PAT (repo scope)
- Verified: remote HEAD = local, no token stored locally

## Iteration: Hero video replaces café image (2026-10-25)
- User-supplied 30s branded video (1280x720) now plays in hero (desktop + mobile), replacing static hero-cafe.jpg
- Compressed 28.6MB → 2.7MB MP4 (H.264, CRF 28, audio stripped, faststart) + 3.7MB WebM/VP9 fallback; original kept out of repo
- HeroVideo component: muted/loop/playsInline autoplay with ref + onCanPlay play() nudges, poster=hero-cafe.jpg, title + aria-label SEO text; <source> mp4+webm
- Video SEO: VideoObject JSON-LD added to index.html (5th structured block — name, description, thumbnail, duration PT30S, contentUrl) + og:video meta tags
- GOTCHA SOLVED: Playwright/test Chromium lacks H.264 — "element has no supported sources" was codec, not code; WebM fallback fixed it. Real browsers play the MP4.
- Verified: autoplay confirmed running (currentTime advancing), poster fallback, mobile + desktop render
- USER TODO: re-upload fresh build to HostGator (includes new /videos files)
