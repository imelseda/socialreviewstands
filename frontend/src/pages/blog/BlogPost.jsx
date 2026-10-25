import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3, CalendarDays, User } from "lucide-react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import posts from "../../data/blogPosts.json";
import { upsertMeta, upsertCanonical, injectJsonLd, removeJsonLd, SITE_DOMAIN, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "./seo";

// Renders **bold** and [link text](url) inside paragraph text.
function InlineText({ text }) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return tokens.map((t, i) => {
    if (t.startsWith("**")) {
      return <strong key={i} className="text-[#F8F9FA] font-semibold">{t.slice(2, -2)}</strong>;
    }
    const m = t.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const [, label, href] = m;
      const cls = "text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-4 hover:text-[#F3E5AB] transition-colors";
      return href.startsWith("/")
        ? <Link key={i} to={href} className={cls}>{label}</Link>
        : <a key={i} href={href} className={cls} rel="noopener">{label}</a>;
    }
    return <span key={i}>{t}</span>;
  });
}

function CtaBlock() {
  return (
    <div data-testid="blog-cta" className="my-12 rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#12141C] to-[#0B0C10] p-8 text-center">
      <p className="section-label justify-center">The 8-second review machine</p>
      <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
        Turn happy customers into <span className="gold-text">5-star reviews and followers</span>
      </h3>
      <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
        One tap on the stand. That's it. No apps, no subscriptions, no awkward asking.
      </p>
      <a href="/#shop" data-testid="blog-cta-button" className="btn-gold inline-flex items-center gap-2">
        Shop the stands <ArrowRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    window.scrollTo(0, 0);
    document.title = post.metaTitle;
    upsertMeta("description", post.metaDescription);
    upsertMeta("keywords", post.keywords.join(", "));
    upsertCanonical(`${SITE_DOMAIN}/blog/${post.slug}`);
    upsertMeta("og:type", "article", true);
    upsertMeta("og:title", post.metaTitle, true);
    upsertMeta("og:description", post.metaDescription, true);
    upsertMeta("og:url", `${SITE_DOMAIN}/blog/${post.slug}`, true);
    upsertMeta("og:image", `${SITE_DOMAIN}${post.featuredImage}`, true);
    injectJsonLd("blog-post-jsonld", {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: `${SITE_DOMAIN}${post.featuredImage}`,
      author: { "@type": "Organization", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "Social Media Review Stands",
        logo: { "@type": "ImageObject", url: `${SITE_DOMAIN}/favicon.png` },
      },
      datePublished: post.date,
      keywords: post.keywords.join(", "),
      mainEntityOfPage: `${SITE_DOMAIN}/blog/${post.slug}`,
    });
    return () => {
      document.title = DEFAULT_TITLE;
      upsertMeta("description", DEFAULT_DESCRIPTION);
      upsertCanonical(`${SITE_DOMAIN}/`);
      upsertMeta("og:type", "website", true);
      upsertMeta("og:title", "Social Media Review Stands — More Reviews and Followers. Zero Effort.", true);
      upsertMeta("og:url", `${SITE_DOMAIN}/`, true);
      upsertMeta("og:image", `${SITE_DOMAIN}/images/og-cover.png`, true);
      removeJsonLd("blog-post-jsonld");
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F8F9FA]">
      <Navbar />
      <main data-testid="blog-post" className="pt-28 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link to="/blog" data-testid="blog-back-link" className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors mb-8">
            <ArrowLeft size={15} aria-hidden="true" /> Back to all guides
          </Link>

          <p className="section-label" data-testid="blog-post-eyebrow">{post.keywords[0]}</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-5" data-testid="blog-post-title">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#94A3B8] mb-8">
            <span className="flex items-center gap-1.5"><User size={13} aria-hidden="true" />{post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={13} aria-hidden="true" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" />{post.readTime}</span>
          </div>

          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            data-testid="blog-post-featured-image"
            className="w-full aspect-[16/9] object-cover rounded-3xl border border-[#D4AF37]/25 mb-10"
          />

          <div className="blog-body" data-testid="blog-post-body">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return <h2 key={i} className="font-display text-2xl font-bold tracking-tight mt-10 mb-4 text-[#F8F9FA]">{block.text}</h2>;
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="my-5 space-y-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-base text-[#94A3B8] leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" aria-hidden="true" />
                        <InlineText text={item} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "cta") return <CtaBlock key={i} />;
              return (
                <p key={i} className="text-base text-[#94A3B8] leading-relaxed my-5">
                  <InlineText text={block.text} />
                </p>
              );
            })}
          </div>

          {related.length > 0 && (
            <div className="mt-16 pt-10 border-t border-[#D4AF37]/20" data-testid="blog-related">
              <p className="section-label">Keep reading</p>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-testid={`blog-related-${p.slug}`}
                  className="group flex items-center gap-5 rounded-2xl border border-[#D4AF37]/20 bg-[#12141C]/60 p-5 transition-colors hover:border-[#D4AF37]/50"
                >
                  <img src={p.featuredImage} alt={p.featuredImageAlt} className="w-24 h-16 object-cover rounded-xl shrink-0" loading="lazy" />
                  <div>
                    <h3 className="font-display text-base font-bold group-hover:text-[#F3E5AB] transition-colors">{p.title}</h3>
                    <p className="text-xs text-[#94A3B8] mt-1">{p.readTime}</p>
                  </div>
                  <ArrowRight size={18} aria-hidden="true" className="ml-auto text-[#D4AF37] shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
