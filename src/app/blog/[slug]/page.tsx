import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { fallbackBlogPosts } from "@/lib/blog-fallback";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { formatBlogDate } from "@/lib/blog-format";

async function resolvePost(slug: string) {
  const post = await getBlogPost(slug);
  if (post) return post;
  return fallbackBlogPosts.find((p) => p.slug === slug) ?? null;
}

async function relatedPosts(slug: string) {
  const entries = await getBlogPosts();
  const pool = entries.length ? entries : fallbackBlogPosts;
  return pool.filter((p) => p.slug !== slug).slice(0, 3);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return { title: `Blog | ${siteConfig.name}` };
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImageSrc ? [{ url: post.coverImageSrc }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  const others = await relatedPosts(slug);

  return (
    <>
      <RevealOnScroll />
      <Navbar />
      <section className="section blog-hero-section blog-post-hero">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="blog-wrap">
            <a href="/blog" className="blog-back-link">
              ← Back to Blog
            </a>
            <div className="blog-page-banner">
              <div className="blog-category-pill">{post.category}</div>
              <h1 className="blog-post-heading">{post.title}</h1>
              <div className="blog-meta-row">
                <span>{post.author}</span>
                <div className="dot"></div>
                <span>{formatBlogDate(post.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {post.coverImageSrc ? (
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="blog-post-cover-wrap">
            <img
              src={post.coverImageSrc}
              alt={post.coverImageAlt}
              className="blog-cover"
            />
          </div>
        </div>
      ) : null}
      <section className="section blog-post-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="blog-post-body">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
            />
          </div>
          {others.length ? (
            <div className="blog-related-wrap">
              <div className="blog-related-heading">More from the blog</div>
              <div className="blog-collection-list">
                {others.map((other) => (
                  <a key={other.slug} href={`/blog/${other.slug}`} className="blog-card reveal">
                    <div className="blog-link-block">
                      <img
                        loading="lazy"
                        src={other.coverImageSrc}
                        alt={other.coverImageAlt}
                        className="blog-cover"
                      />
                      <div className="blog-category-pill">{other.category}</div>
                    </div>
                    <div className="blog-card-text-wrap">
                      <div className="blog-title">{other.title}</div>
                      <div className="blog-meta-row">
                        <span>{formatBlogDate(other.publishedAt)}</span>
                        <div className="dot"></div>
                        <span>{other.author}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
}
