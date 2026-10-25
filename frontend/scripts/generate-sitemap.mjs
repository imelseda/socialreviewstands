// Auto-generates public/sitemap.xml from static routes + all blog posts.
// Runs automatically before every build (prebuild) and dev start (prestart).
// To add a blog post to the sitemap: just add it to src/data/blogPosts.json — nothing else needed.

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOMAIN = "https://socialreviewstands.com";

const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.2" },
  { path: "/terms", changefreq: "yearly", priority: "0.2" },
  // NOTE: /thank-you is deliberately excluded — it is noindex.
];

const posts = JSON.parse(readFileSync(join(root, "src/data/blogPosts.json"), "utf8"));

const videoEntry = `
    <video:video>
      <video:thumbnail_loc>${DOMAIN}/images/hero-cafe.jpg</video:thumbnail_loc>
      <video:title>Social Media Review Stands — NFC Google Review Stand in Action</video:title>
      <video:description>See how social media review stands work: a customer taps the NFC stand or scans the QR code and the Google review page opens instantly. Get more Google reviews and social media followers — no apps, no monthly fees.</video:description>
      <video:content_loc>${DOMAIN}/videos/hero-video.mp4</video:content_loc>
      <video:duration>30</video:duration>
      <video:publication_date>2026-10-25T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>`;

const urlXml = ({ path, changefreq, priority, lastmod, extra = "" }) => `  <url>
    <loc>${DOMAIN}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ""}${extra}
  </url>`;

const urls = [
  ...STATIC_ROUTES.map((r) =>
    urlXml({ ...r, extra: r.path === "/" ? videoEntry : "" })
  ),
  ...posts.map((p) =>
    urlXml({
      path: `/blog/${p.slug}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: p.date,
    })
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml generated: ${STATIC_ROUTES.length} static routes + ${posts.length} blog posts`);
