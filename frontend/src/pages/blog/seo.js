// Shared SEO + inline-markdown helpers for blog pages.

const DOMAIN = "https://socialreviewstands.com";
export const SITE_DOMAIN = DOMAIN;
export const DEFAULT_TITLE = "Social Media Review Stands — Google Review NFC Stand | More Reviews and Followers. Zero Effort.";
export const DEFAULT_DESCRIPTION = "Social media review stands that turn counter visits into 5-star Google reviews and new followers — automatically. NFC tap + QR scan, no apps, no monthly fees.";

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export const upsertMeta = (key, content, isProperty = false) => {
  const attr = isProperty ? "property" : "name";
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const upsertCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const injectJsonLd = (id, data) => {
  document.getElementById(id)?.remove();
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.id = id;
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
};

export const removeJsonLd = (id) => document.getElementById(id)?.remove();
