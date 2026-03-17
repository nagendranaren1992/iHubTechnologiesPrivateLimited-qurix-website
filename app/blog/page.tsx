"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  getBlogData,
  type BlogData,
  type SocialLink,
} from "../../services/blogService";
import { mapApiToArticle, markdownToHtml } from "./articles";
import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconLink,
} from "@tabler/icons-react";
import type { Icon as TablerIcon } from "@tabler/icons-react";

const svgStroke = { strokeWidth: 2 };

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://qurix.com";

const iconMap: Record<string, TablerIcon> = {
  IconBrandLinkedin,
  IconBrandX,
  IconBrandWhatsapp,
  IconLink,
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [activeCat, setActiveCat] = useState("all");
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [featuredSlide, setFeaturedSlide] = useState(0);
  const noResultsRef = useRef<HTMLDivElement | null>(null);
  const blogGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getBlogData().then(setBlogData).catch(console.error);
  }, []);

  useEffect(() => {
    if (!blogData) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [blogData]);

  const showArticle = (slug: string) => {
    setActiveArticle(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hideArticle = () => {
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  type CatType = "all" | "emr" | "billing" | "ops" | "digital" | "patient";

  const filterByCategory = (cat: CatType) => {
    setActiveCat(cat);
    setFeaturedSlide(0);
    const cards = document.querySelectorAll<HTMLElement>(".blog-card");
    let visible = 0;
    cards.forEach((c) => {
      const match = cat === "all" || c.dataset.cat === cat;
      c.style.display = match ? "" : "none";
      if (match) visible++;
    });
    if (blogData) {
      const hasMatchingFeatured = blogData.featuredPosts.some(
        (fp) => cat === "all" || fp.categorySlug === cat,
      );
      if (hasMatchingFeatured) visible++;
    }
    if (noResultsRef.current) {
      noResultsRef.current.style.display = visible === 0 ? "block" : "none";
    }
  };

  const filterPosts = () => {
    const q = searchQuery.toLowerCase().trim();
    const cards = document.querySelectorAll<HTMLElement>(".blog-card");
    let visible = 0;
    cards.forEach((c) => {
      const title = (c.dataset.title || "").toLowerCase();
      const match = !q || title.includes(q);
      c.style.display = match ? "" : "none";
      if (match) visible++;
    });
    if (blogData) {
      const hasMatchingFeatured = blogData.featuredPosts.some(
        (fp) => !q || (fp.searchTitle || "").toLowerCase().includes(q),
      );
      if (hasMatchingFeatured) visible++;
    }
    if (noResultsRef.current) {
      noResultsRef.current.style.display = visible === 0 ? "block" : "none";
    }
  };

  useEffect(() => {
    setFeaturedSlide(0);
    filterPosts();
  }, [searchQuery]);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    if (blogGridRef.current) {
      window.scrollTo({
        top: blogGridRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const filteredFeaturedLen =
    blogData?.featuredPosts.filter((fp) => {
      const catMatch = activeCat === "all" || fp.categorySlug === activeCat;
      const sq = searchQuery.toLowerCase().trim();
      const searchMatch =
        !sq || (fp.searchTitle || "").toLowerCase().includes(sq);
      return catMatch && searchMatch;
    }).length ?? 0;

  useEffect(() => {
    if (filteredFeaturedLen <= 1) return;
    const timer = setInterval(() => {
      setFeaturedSlide((prev) => (prev + 1) % filteredFeaturedLen);
    }, 15000);
    return () => clearInterval(timer);
  }, [filteredFeaturedLen, activeCat, searchQuery]);

  if (!blogData) {
    return <div className="blog-listing" style={{ minHeight: "100vh" }} />;
  }

  const allArticles = [...blogData.featuredPosts, ...blogData.posts].map(
    mapApiToArticle,
  );

  const q = searchQuery.toLowerCase().trim();
  const filteredFeatured = blogData.featuredPosts.filter((fp) => {
    const catMatch = activeCat === "all" || fp.categorySlug === activeCat;
    const searchMatch = !q || (fp.searchTitle || "").toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  const safeSlide = featuredSlide < filteredFeatured.length ? featuredSlide : 0;

  const goToNextFeatured = () => {
    if (filteredFeatured.length <= 1) return;
    setFeaturedSlide((prev) => (prev + 1) % filteredFeatured.length);
  };

  const goToPrevFeatured = () => {
    if (filteredFeatured.length <= 1) return;
    setFeaturedSlide(
      (prev) => (prev - 1 + filteredFeatured.length) % filteredFeatured.length,
    );
  };

  const blogCards = blogData.posts.map((post, i) => ({
    cat: post.categorySlug,
    title: post.searchTitle,
    cardBg: post.cardBg,
    pill: post.pillClass,
    pillLabel: post.pillLabel,
    heading: post.title,
    excerpt: post.excerpt,
    date: post.shortDate,
    read: post.shortReadTime,
    reveal: i === 0 ? "" : `rd${i}`,
    icon: post.icon,
    slug: post.slug,
  }));

  const renderShareIcons = (links: SocialLink[]) => {
    if (!links || links.length === 0) return null;
    return (
      <div className="article-share">
        <span className="share-label">Share this article</span>
        <div className="share-icons">
          {links.map((link) => {
            const TablerIcon = iconMap[link.iconName];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="share-icon"
                title={link.platform}
              >
                {link.iconImage ? (
                  <img
                    src={`${STRAPI_URL}${link.iconImage.url}`}
                    alt={link.platform}
                    width={20}
                    height={20}
                  />
                ) : TablerIcon ? (
                  <TablerIcon size={20} />
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />

      <div
        className={`blog-listing${activeArticle ? " hidden" : ""}`}
        id="blogListing"
      >
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <div className="blog-hero-top">
              <div>
                <h1>
                  Healthcare{" "}
                  <span className="hl">{blogData.heroHighlight}</span> &amp;
                  <br />
                  HMS Best Practices
                </h1>
                <p className="blog-hero-sub">{blogData.heroDescription}</p>
              </div>
              <div className="blog-search">
                <input
                  type="text"
                  placeholder={blogData.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="searchInput"
                />
                <button type="button" aria-label="Search">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    {...svgStroke}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="blog-cats" id="catTabs">
              <button
                type="button"
                className={`cat-tab ${activeCat === "all" ? "active" : ""}`}
                data-cat="all"
                onClick={() => filterByCategory("all")}
              >
                All Posts
              </button>
              <button
                type="button"
                className={`cat-tab ${activeCat === "emr" ? "active" : ""}`}
                data-cat="emr"
                onClick={() => filterByCategory("emr")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  {...svgStroke}
                >
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
                  <path d="M9 9h6M9 13h6M9 17h4" />
                </svg>{" "}
                EMR &amp; Records
              </button>
              <button
                type="button"
                className={`cat-tab ${activeCat === "billing" ? "active" : ""}`}
                data-cat="billing"
                onClick={() => filterByCategory("billing")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  {...svgStroke}
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>{" "}
                Revenue Cycle
              </button>
              <button
                type="button"
                className={`cat-tab ${activeCat === "ops" ? "active" : ""}`}
                data-cat="ops"
                onClick={() => filterByCategory("ops")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  {...svgStroke}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>{" "}
                Hospital Ops
              </button>
              <button
                type="button"
                className={`cat-tab ${activeCat === "digital" ? "active" : ""}`}
                data-cat="digital"
                onClick={() => filterByCategory("digital")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  {...svgStroke}
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>{" "}
                Digital Health
              </button>
              <button
                type="button"
                className={`cat-tab ${activeCat === "patient" ? "active" : ""}`}
                data-cat="patient"
                onClick={() => filterByCategory("patient")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  {...svgStroke}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>{" "}
                Patient Care
              </button>
            </div>
          </div>
        </section>

        <div className="blog-main">
          {filteredFeatured.length > 0 && (
            <div className="featured" style={{ position: "relative" }}>
              <style>{`
              .featured-carousel-nav{position:absolute;top:50%;transform:translateY(-50%);z-index:2;background:rgba(0,0,0,.45);border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.22;transition:opacity .3s ease;color:#fff;padding:0}
              .featured-carousel-nav:hover{opacity:1}
              .featured-carousel-nav.prev{left:12px}
              .featured-carousel-nav.next{right:12px}
              .featured-carousel-dots{display:flex;justify-content:center;gap:8px;padding:10px 0 0}
              .featured-carousel-dot{width:8px;height:8px;border-radius:50%;border:none;background:var(--gray-300,#ccc);cursor:pointer;padding:0;transition:background .3s}
              .featured-carousel-dot.active{background:var(--primary,#6c4dc4)}
            `}</style>
              <div style={{ overflow: "hidden", borderRadius: "inherit" }}>
                <div
                  style={{
                    display: "flex",
                    transition: "transform 0.6s ease",
                    transform: `translateX(-${safeSlide * 100}%)`,
                  }}
                >
                  {filteredFeatured.map((fp) => (
                    <div key={fp.id} style={{ flex: "0 0 100%" }}>
                      <article
                        className="featured-card"
                        data-cat={fp.categorySlug}
                        onClick={() => showArticle(fp.slug)}
                      >
                        <div className="featured-img">
                          <div className="featured-img-bg" />
                          <div className="feat-deco">
                            <svg
                              viewBox="0 0 500 140"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0,120 C60,100 120,40 180,60 C240,80 300,20 360,40 C420,60 460,30 500,35"
                                fill="none"
                                stroke="rgba(108,77,196,0.2)"
                                strokeWidth="2"
                              />
                              <path
                                d="M0,100 C80,80 140,110 200,90 C260,70 320,100 380,70 C440,40 480,60 500,50"
                                fill="none"
                                stroke="rgba(20,184,166,0.25)"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div className="featured-img-overlay">
                            <div className="featured-badge-row">
                              <span className="featured-badge">Featured</span>
                              <span className="featured-badge teal">
                                {fp.pillLabel}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="featured-body">
                          <div className="featured-cat">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <line x1="12" y1="1" x2="12" y2="23" />
                              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                            </svg>{" "}
                            {fp.category}
                          </div>
                          <h2>{fp.title}</h2>
                          <p className="excerpt">{fp.excerpt}</p>
                          <div className="featured-meta">
                            <div className="meta-author">
                              <div className="meta-avatar">
                                {fp.author?.initials}
                              </div>
                              <div className="meta-author-info">
                                <span className="meta-author-name">
                                  {fp.author?.name}
                                </span>
                                <span className="meta-author-role">
                                  {fp.author?.role}
                                </span>
                              </div>
                            </div>
                            <div className="meta-sep" />
                            <div className="meta-item">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                {...svgStroke}
                              >
                                <rect
                                  x="3"
                                  y="4"
                                  width="18"
                                  height="18"
                                  rx="2"
                                />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>{" "}
                              {fp.shortDate}, 2026
                            </div>
                            <div className="meta-item">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                {...svgStroke}
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                              </svg>{" "}
                              {fp.readTime}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              {filteredFeatured.length > 1 && (
                <>
                  <button
                    type="button"
                    className="featured-carousel-nav prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevFeatured();
                    }}
                    aria-label="Previous featured post"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="20"
                      height="20"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="featured-carousel-nav next"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextFeatured();
                    }}
                    aria-label="Next featured post"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="20"
                      height="20"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  <div className="featured-carousel-dots">
                    {filteredFeatured.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`featured-carousel-dot${idx === safeSlide ? " active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setFeaturedSlide(idx);
                        }}
                        aria-label={`Go to featured post ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="blog-grid-wrapper">
            <div>
              <div className="blog-grid" id="blogGrid" ref={blogGridRef}>
                {blogCards.map((card) => (
                  <article
                    key={card.title}
                    className={`blog-card reveal ${card.reveal}`}
                    data-cat={card.cat}
                    data-title={card.title}
                    onClick={
                      card.slug ? () => showArticle(card.slug) : undefined
                    }
                  >
                    <div className="blog-card-img">
                      <div className={`blog-card-img-bg ${card.cardBg}`}>
                        <div className="card-pattern" />
                        <div className="card-icon-float">
                          {card.icon === "emr" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
                              <path d="M9 9h6M9 13h6M9 17h4" />
                            </svg>
                          )}
                          {card.icon === "people" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                            </svg>
                          )}
                          {card.icon === "billing" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <line x1="12" y1="1" x2="12" y2="23" />
                              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                            </svg>
                          )}
                          {card.icon === "globe" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                            </svg>
                          )}
                          {card.icon === "inventory" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                            </svg>
                          )}
                          {card.icon === "heart" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className={`blog-card-cat ${card.pill}`}>
                        {card.pillLabel}
                      </span>
                    </div>
                    <div className="blog-card-body">
                      <h3>{card.heading}</h3>
                      <p>{card.excerpt}</p>
                      <div className="blog-card-footer">
                        <div className="blog-card-meta">
                          <span className="blog-card-date">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>{" "}
                            {card.date}
                          </span>
                          <span className="blog-card-read">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              {...svgStroke}
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v6l4 2" />
                            </svg>{" "}
                            {card.read}
                          </span>
                        </div>
                        <div className="blog-card-arrow">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            {...svgStroke}
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="no-results" id="noResults" ref={noResultsRef}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gray-300)"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <h3>No articles found</h3>
                <p>Try a different search term or category.</p>
              </div>

              <div className="pagination">
                <button type="button" className="page-btn arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    {...svgStroke}
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`page-btn ${activePage === n ? "active" : ""}`}
                    onClick={() => setActivePage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button type="button" className="page-btn arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    {...svgStroke}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-newsletter reveal">
                <h3>{blogData.newsletterTitle}</h3>
                <p>{blogData.newsletterDescription}</p>
                <div className="nl-input-wrap">
                  <input
                    type="email"
                    className="nl-input"
                    placeholder="Your work email"
                  />
                  <button type="button" className="nl-btn">
                    Subscribe
                  </button>
                </div>
                <span className="nl-note">{blogData.newsletterNote}</span>
              </div>

              <div className="sidebar-section reveal rd1">
                <div className="sidebar-title">{blogData.trendingTitle}</div>
                <div className="popular-list">
                  {blogData.trendingArticles.map((item, i) => (
                    <div
                      key={item.id}
                      className="popular-item"
                      onClick={
                        item.slug ? () => showArticle(item.slug!) : undefined
                      }
                    >
                      <div className="popular-num">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="popular-text">
                        <h4>{item.title}</h4>
                        <span className="pop-meta">
                          {item.readTime} · {item.views}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-section reveal rd2">
                <div className="sidebar-title">{blogData.topicsTitle}</div>
                <div className="tags-cloud">
                  {blogData.topics.map((tag) => (
                    <span
                      key={tag}
                      className="tag-chip"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {allArticles.map((article) => (
        <div
          key={article.slug}
          className={`article-view${activeArticle === article.slug ? " show" : ""}`}
        >
          <div className="article-hero-banner">
            <div className="article-hero-inner">
              <div className="article-back" onClick={hideArticle}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  {...svgStroke}
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>{" "}
                Back to Blog
              </div>
              <div className="article-cat-badge">{article.category}</div>
              <h1>{article.title}</h1>
              <div className="article-hero-meta">
                <div className="meta-author">
                  <div className="meta-avatar">{article.authorInitials}</div>
                  <div className="meta-author-info">
                    <span className="meta-author-name">
                      {article.authorName}
                    </span>
                    <span className="meta-author-role">
                      {article.authorRole}
                    </span>
                  </div>
                </div>
                <div className="meta-sep" />
                <div className="meta-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    {...svgStroke}
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>{" "}
                  {article.date}
                </div>
                <div className="meta-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    {...svgStroke}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>{" "}
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
          <div className="article-content-wrap">
            <div className="article-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(article.content),
                }}
              />
              <div className="article-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="article-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {renderShareIcons(article.socialLinks)}
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}
