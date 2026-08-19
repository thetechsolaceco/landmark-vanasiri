import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { fallbackBlogPosts } from "@/lib/blog-fallback";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { formatBlogDate } from "@/lib/blog-format";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: "Farmland investment guides, lifestyle stories and updates from Landmark Vanasiri.",
};

export default async function BlogIndexPage() {
  const entries = await getBlogPosts();
  const posts = entries.length ? entries : fallbackBlogPosts;
  const [featured, ...rest] = posts;

  return (
    <>
      <RevealOnScroll />
      <Navbar light />
      <section className="section blog-hero-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="blog-page-banner">
            <div className="label primary-color">Our Blog</div>
            <h1 className="blog-post-heading">Insights on Farmland Living Near Bengaluru</h1>
            <p className="paragraph-large blog-intro">
              Investment guides, lifestyle stories and updates from the Landmark Vanasiri farmland community.
            </p>
          </div>
        </div>
      </section>
      <section className="section blog-listing-section">
        <div className="w-layout-blockcontainer base-container w-container">
          {featured ? (
            <a href={`/blog/${featured.slug}`} className="blog-featured-card reveal">
              <div className="blog-featured-image-wrap">
                <img
                  src={featured.coverImageSrc}
                  alt={featured.coverImageAlt}
                  className="blog-cover"
                />
              </div>
              <div className="blog-featured-content">
                <div className="blog-category-pill">{featured.category}</div>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-meta-row">
                  <span>{featured.author}</span>
                  <div className="dot"></div>
                  <span>{formatBlogDate(featured.publishedAt)}</span>
                </div>
              </div>
            </a>
          ) : null}
          {rest.length ? (
            <div className="blog-collection-list">
              {rest.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card reveal">
                  <div className="blog-link-block">
                    <img
                      loading="lazy"
                      src={post.coverImageSrc}
                      alt={post.coverImageAlt}
                      className="blog-cover"
                    />
                    <div className="blog-category-pill">{post.category}</div>
                  </div>
                  <div className="blog-card-text-wrap">
                    <div className="blog-title">{post.title}</div>
                    <p className="blog-excerpt-clamp">{post.excerpt}</p>
                    <div className="blog-meta-row">
                      <span>{formatBlogDate(post.publishedAt)}</span>
                      <div className="dot"></div>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
}
