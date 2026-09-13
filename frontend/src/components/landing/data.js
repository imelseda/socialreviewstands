export const VARIANTS = [
  {
    id: "a-black",
    name: "Style A · Obsidian Black",
    short: "Style A · Black",
    image: "/images/stand-black-dims.png",
    swatch: "#12141A",
    desc: "Brushed black metallic finish with a high-contrast gold-ring QR — commands attention on any counter.",
  },
  {
    id: "a-white",
    name: "Style A · Pearl White",
    short: "Style A · White",
    image: "/images/stand-white-google.png",
    swatch: "#F8F9FA",
    desc: "Pristine white face with the classic Google review layout — instant familiarity, instant trust.",
  },
  {
    id: "b-black",
    name: "Style B · Noir Black",
    short: "Style B · Black",
    image: "/images/stand-black-tiktok.png",
    swatch: "#12141A",
    desc: "Stealth black stand for social-first brands — point it at Google, TikTok, Instagram and more.",
  },
  {
    id: "b-white",
    name: "Style B · Boutique White",
    short: "Style B · White",
    image: "/images/stand-white-cafe.png",
    swatch: "#F8F9FA",
    desc: "Minimal 'Tap to leave a review' layout — made for cafés, salons, studios and boutiques.",
  },
];

export const REVIEWS = [
  {
    text: "Great product, now my clients can leave Google reviews. Just what I really needed — will recommend to other businesses.",
    color: "Black",
    role: "Verified buyer",
  },
  {
    text: "It's very easy to set up NFC in a separate app, and the QR code is registered by scanning the code on the sign. I thought it would be more complicated, but everything is great.",
    color: "White",
    role: "Verified buyer",
  },
  {
    text: "Great price. Was delivered very quickly in just 7 days. Works perfectly. Both the NFC and QR code work well. Definitely recommend it.",
    color: "White",
    role: "Verified buyer",
  },
  {
    text: "I bought 2, one for my massage studio and one for my beauty store. Very nice and easy for customers. Now there's no need to ask for recommendations — they do it automatically. It arrived in 9 days.",
    color: "Black",
    role: "Massage & beauty studio owner",
  },
];

export const PRODUCTS = [
  {
    id: "stand-white",
    name: "Google Review Stand · White",
    unit: "stand",
    stripeProduct: "prod_VFkUO1Vp2T6Vla",
    image: "/images/stand-white-google.png",
    badge: "Best Seller",
    blurb: "The countertop classic. Pearl white stand with the Google review layout customers already know and trust.",
    tags: ["NFC tap + QR scan", "Counter & desk", "30-sec setup"],
    tiers: [
      { qty: 1, total: 29, link: "https://buy.stripe.com/cNi14n0Ci3g96hndx08g009" },
      { qty: 2, total: 54, link: "https://buy.stripe.com/eVq14n1GmdUN0X31Oi8g00a" },
      { qty: 3, total: 69, link: "https://buy.stripe.com/14A14net88At49fdx08g00b", best: true },
    ],
  },
  {
    id: "stand-black",
    name: "Google Review Stand · Black",
    unit: "stand",
    stripeProduct: "prod_VFkawywepaFDJk",
    image: "/images/stand-black-dims.png",
    badge: null,
    blurb: "Obsidian black metallic finish with high-contrast print — commands attention on any counter or front desk.",
    tags: ["NFC tap + QR scan", "Counter & desk", "30-sec setup"],
    tiers: [
      { qty: 1, total: 29, link: "https://buy.stripe.com/00waEXet8eYR49fakO8g006" },
      { qty: 2, total: 54, link: "https://buy.stripe.com/8x2eVd98O9Ex5dj3Wq8g007" },
      { qty: 3, total: 69, link: "https://buy.stripe.com/eVq6oHbgW6sl9tz8cG8g008", best: true },
    ],
  },
  {
    id: "card",
    name: "Google Review NFC Card",
    unit: "card",
    stripeProduct: "prod_VFkecLbc0XbYxO",
    image: "/images/card-register.png",
    badge: "New",
    blurb: "The waterproof NFC sticker card — stick it on doors, tables, mirrors or tills, or hand it over with the bill. Same tap-to-review magic, zero footprint.",
    tags: ["Waterproof sticker", "NFC tap", "Easy setup"],
    tiers: [
      { qty: 1, total: 27, link: "https://buy.stripe.com/eVqfZhdp48AtgW1fF88g004" },
      { qty: 2, total: 48, link: "https://buy.stripe.com/bJe3cvgBgbMF9tzakO8g003" },
      { qty: 3, total: 45, link: "https://buy.stripe.com/3cI6oH0CidUNdJP1Oi8g005", best: true },
    ],
  },
];

export const FAQS = [
  {
    q: "How does the stand actually work?",
    a: "Your customer taps the stand with their phone — exactly like tap-to-pay — or scans the printed QR code. Their phone opens your Google review page instantly. They tap the stars, write a line, hit post. The whole thing takes about 8 seconds.",
  },
  {
    q: "Does it work with every phone?",
    a: "Yes. The tap works with every NFC-enabled iPhone and virtually every Android made after 2016 — the same technology as Apple Pay and Google Pay. For anything older, the printed QR code works with any camera. No customer is ever left out.",
  },
  {
    q: "Is there a monthly fee or subscription?",
    a: "Never. This is a one-time purchase: unlimited taps, unlimited scans, forever. No monthly software bills, no per-review charges, no renewals.",
  },
  {
    q: "How hard is it to set up?",
    a: "About 30 seconds. Scan the QR code on the stand, paste your Google review link, and you're live. The NFC chip programs with any free NFC tools app. If you can copy and paste a link, you can set this up.",
  },
  {
    q: "Can I change the link later?",
    a: "Absolutely. The NTAG215 chip is rewritable — update your review link, switch platforms, or point it at Facebook, Instagram, LINE or TikTok anytime without buying anything new.",
  },
  {
    q: "How fast is delivery?",
    a: "Recent buyers report delivery in 7–9 days. Every stand ships as a single piece per pack, ready to go on your counter straight out of the box.",
  },
];

export const INDUSTRIES = [
  "Restaurants & Cafés",
  "Salons, Spas & Barbershops",
  "Dental & Medical Clinics",
  "Auto Repair & Detailing",
  "Hotels & Hospitality",
  "Real Estate Agencies",
  "Gyms & Fitness Studios",
  "Retail & Boutiques",
  "Pet Groomers",
  "Contractors & Home Services",
];

export const INCLUSIONS = [
  "1× NFC 215 Google review stand in your chosen style and color",
  "Rewritable NTAG215 chip — link it to your Google review page",
  "Printed QR code backup so every customer is covered",
  "Stable standing bracket built for counters, desks and tables",
  "Free reprogramming anytime — change your link in seconds",
  "CE certified, eco-friendly build with no high-concern chemicals",
];
