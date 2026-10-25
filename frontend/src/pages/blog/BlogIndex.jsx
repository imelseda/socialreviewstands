import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, CalendarDays } from "lucide-react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import posts from "../../data/blogPosts.json";
import { upsertMeta, upsertCanonical, SITE_DOMAIN, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "./seo";

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Blog — Google Reviews & Social Media Growth Guides | Social Media Review Stands";
    upsertMeta("description", "Practical guides for local businesses: setting up Google Business Profile, getting more Google reviews, and ways to increase followers on social media for your business.");
    upsertCanonical(`${SITE_DOMAIN}/blog`);
    upsertMeta("og:title", "Blog — Social Media Review Stands", true);
    upsertMeta("og:url", `${SITE_DOMAIN}/blog`, true);
    return () => {
      document.title = DEFAULT_TITLE;
      upsertMeta("description", DEFAULT_DESCRIPTION);
      upsertCanonical(`${SITE_DOMAIN}/`);
      upsertMeta("og:title", "Social Media Review Stands — More Reviews and Followers. Zero Effort.", true);
      upsertMeta("og:url", `${SITE_DOMAIN}/`, true);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F8F9FA]">
      <Navbar />
      <main data-testid="blog-index" className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label" data-testid="blog-eyebrow">The Review & Growth Blog</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4" data-testid="blog-index-title">
            Practical guides for <span className="gold-text">local business growth</span>
          </h1>
          <p className="text-base text-[#94A3B8] max-w-2xl mb-14 leading-relaxed">
            Google reviews, social followers, and local SEO — without the jargon. Written for owners who'd rather run their business than study marketing.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
                className="group rounded-3xl border border-[#D4AF37]/20 bg-[#12141C]/60 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    data-testid={`blog-card-image-${post.slug}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-[#94A3B8] mb-3">
                    <span className="flex items-center gap-1.5"><CalendarDays size={13} aria-hidden="true" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" />{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold tracking-tight mb-3 group-hover:text-[#F3E5AB] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                    Read the guide <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
