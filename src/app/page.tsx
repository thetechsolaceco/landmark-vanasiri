import React from "react";

export default function Home() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pody",
  "url": "/",
  "description": "Pody specializes in crafting modular and tiny homes tailored for contemporary living. Our efficient process, use of eco-friendly materials, and precise construction techniques simplify the journey to owning a home that aligns with your lifestyle.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 Charlyn Ave",
    "addressLocality": "Renovo",
    "addressRegion": "PA",
    "postalCode": "17764",
    "addressCountry": "US"
  },
  "telephone": "+1 (123) 456 789",
  "email": "information@office.com",
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com/",
    "https://www.linkedin.com"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "3"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emma R."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Pody made the entire process feel easy. The design was thoughtful, the timeline was clear, and the quality exceeded our expectations."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Daniel M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "We wanted a sustainable home without the delays of traditional construction. Pody delivered a beautiful, efficient space on time."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sophie L."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The modular approach gave us flexibility we didn't expect. Every detail felt intentional, from the layout to the finishes."
    }
  ]
}`,
        }}
      />

      {/* Main Page Layout */}
      <div
        data-animation="over-left"
        className="navbar-fixed w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="7b40ee2c-2ee2-900e-5405-95ed25872c05"
        role="banner"
        data-duration="400"
        data-doc-height="1"
      >
        <div className="base-container w-container">
          <div className="nav-menu-wrapper">
            <a
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                loading="lazy"
                height="30"
                alt="Logo"
                src="/images/6941841ce2a9a7a93acd339f_Pody%20Logo%20White.svg"
                className="brand-logo"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="tablet-menu">
                <a
                  href="/"
                  aria-current="page"
                  className="brand-tablet w-nav-brand w--current"
                >
                  <img
                    loading="lazy"
                    height="30"
                    alt="logo"
                    src="/images/693e9d1043906400d3af5754_ebc3d115bf3871e2591aac9e23647967_LOGO.svg"
                    className="brand-logo"
                  />
                </a>
                <div className="close-menu-button w-nav-button">
                  <img
                    loading="lazy"
                    src="/images/68d12485a38c00f033aa5a7d_close-btn.svg"
                    alt=""
                    className="nav-close-icon"
                  />
                </div>
              </div>
              <div className="menu-wrap">
                <a
                  href="/"
                  aria-current="page"
                  className="nav-link w-nav-link w--current"
                >
                  HOME
                </a>
                <a href="/about-us" className="nav-link w-nav-link">
                  ABOUT US
                </a>
                <a href="/projects" className="nav-link w-nav-link">
                  PROJECTS
                </a>
                <a href="/services" className="nav-link w-nav-link">
                  SERVICES
                </a>
                <div
                  data-delay="0"
                  data-hover="true"
                  data-w-id="7b40ee2c-2ee2-900e-5405-95ed25872c19"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <p className="nav-item-title">All Pages</p>
                  </div>
                  <nav className="nav-dropdown-list megamenu w-dropdown-list">
                    <div className="nav-dropdown-column">
                      <div className="nav-dropdown-link-wrapper">
                        <a
                          href="/"
                          aria-current="page"
                          className="nav-dropdown-link w-dropdown-link w--current"
                        >
                          <span className="nav-dropdown-link-line"> </span>Home
                        </a>
                        <a
                          href="/about-us"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>About
                          Us
                        </a>
                        <a
                          href="/services"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>
                          Services
                        </a>
                        <div className="nav-collection-list-wrapper w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/services/renovation-expansion-modules"
                                className="nav-dropdown-link collection w-dropdown-link"
                              >
                                <span className="nav-dropdown-link-line">
                                  {" "}
                                </span>
                                Services Details
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          href="/our-partners"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>Our
                          Partners
                        </a>
                      </div>
                    </div>
                    <div className="nav-dropdown-column">
                      <div className="nav-dropdown-link-wrapper">
                        <a
                          href="/leadership"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>
                          Leadership
                        </a>
                        <a
                          href="/how-it-works"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>How
                          It Works
                        </a>
                        <a
                          href="/projects"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>
                          Projects
                        </a>
                        <div className="nav-collection-list-wrapper w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/proects-category/ongoing"
                                className="nav-dropdown-link collection w-dropdown-link"
                              >
                                <span className="nav-dropdown-link-line">
                                  {" "}
                                </span>
                                Proects Category
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="nav-collection-list-wrapper w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/projects/willow-creek-family-module"
                                className="nav-dropdown-link collection w-dropdown-link"
                              >
                                <span className="nav-dropdown-link-line">
                                  {" "}
                                </span>
                                Project Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-dropdown-column">
                      <div className="nav-dropdown-link-wrapper">
                        <a
                          href="/testimonials"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>
                          Testimonials
                        </a>
                        <a
                          href="/faq"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>FAQ
                        </a>
                        <a
                          href="/contact-us"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>
                          Contact Us
                        </a>
                        <a
                          href="/blog"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>Blog
                        </a>
                        <div className="nav-collection-list-wrapper w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <a
                                href="/blog/designing-small-spaces-that-dont-feel-small"
                                className="nav-dropdown-link collection w-dropdown-link"
                              >
                                <span className="nav-dropdown-link-line">
                                  {" "}
                                </span>
                                Blog Post Page
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="nav-button-tablet">
                  <a
                    data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                    href="/contact-us"
                    className="primary-button w-inline-block"
                  >
                    <div className="button-spot-big">
                      <div className="button-spot-small"></div>
                    </div>
                    <div className="button-text">Request a Quote</div>
                  </a>
                </div>
              </div>
            </nav>
            <div className="nav-button-wrap">
              <a
                data-w-id="e849a25e-291d-a702-7a0a-1e19f7905b30"
                href="/contact-us"
                className="link-button w-inline-block"
              >
                <div className="button-spot-big secondary">
                  <div className="button-spot-small secondary"></div>
                </div>
                <div className="button-text">Request a Quote</div>
              </a>
            </div>
            <div className="menu-button w-nav-button">
              <img
                loading="lazy"
                height="16"
                alt=""
                src="/images/68d12485a38c00f033aa5a7c_menu-btn.svg"
                className="image-burger"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="banner-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="home-1-banner">
            <div className="home-1-banner-text-wrap">
              <h1
                data-w-id="96470b6f-c145-e28a-a886-a1afc9232b7a"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="home-1-banner-h1"
              >
                A better Way to Build — Simplified.
              </h1>
              <div
                data-w-id="724e6850-6569-5525-5a5d-f8619fc4ea98"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="home-1-banner-paragraph-wrap"
              >
                <a
                  data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                  href="/projects"
                  className="primary-button w-inline-block"
                >
                  <div className="button-spot-big">
                    <div className="button-spot-small"></div>
                  </div>
                  <div className="button-text">Explore Our Homes</div>
                </a>
                <div
                  id="w-node-_6110d19e-9eb4-e2bf-344b-b294c6581867-d3af5718"
                  className="banner-paragraph-wrapper"
                >
                  <p className="paragraph-large text-white">
                    Factory-built homes designed for speed, sustainability, and
                    customization.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-w-id="c84c5323-4ff8-52d0-5e37-d467da05a7c8"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="baner-slider-indicators-wrap"
            >
              <div className="baner-slider-indicator _1">
                <div className="baner-slider-indicators-wrapper">
                  <p className="home-1-slider-number">
                    01
                    <br />
                  </p>
                  <div className="baner-slider-indicators-text text-white">
                    Riverside Modular Living, Missoula, Montana, 2025
                  </div>
                </div>
                <div className="baner-slider-indicators-line">
                  <div className="baner-slider-white-indicator _1"></div>
                </div>
              </div>
              <div className="baner-slider-indicator _2">
                <div className="baner-slider-indicators-wrapper">
                  <p className="home-1-slider-number">
                    02
                    <br />
                  </p>
                  <div className="baner-slider-indicators-text text-white">
                    Northline Family Home Bozeman, Montana, 2025{" "}
                  </div>
                </div>
                <div className="baner-slider-indicators-line">
                  <div className="baner-slider-white-indicator _2"></div>
                </div>
              </div>
              <div className="baner-slider-indicator _3">
                <div className="baner-slider-indicators-wrapper">
                  <p className="home-1-slider-number">03</p>
                  <div className="baner-slider-indicators-text text-white">
                    Driftwood Micro Home, Cannon Beach, Oregon, 2024
                  </div>
                </div>
                <div className="baner-slider-indicators-line">
                  <div className="baner-slider-white-indicator _3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-delay="5000"
          data-animation="fade"
          className="home-1-banner-slider w-slider"
          data-autoplay="true"
          data-easing="ease-in-out-quad"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="100"
          data-infinite="true"
        >
          <div className="overlay"></div>
          <div className="mask w-slider-mask">
            <div
              id="Slide-1"
              data-w-id="ec44d4c6-6c39-e749-4b93-ef0f882baf09"
              className="banner-slide w-slide"
            >
              <div className="banner-image-wrap">
                <img
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  srcSet="//images/69426f492a0206fad3836d1b_2151264421-p-500.webp 500w, /images/69426f492a0206fad3836d1b_2151264421-p-800.webp 800w, /images/69426f492a0206fad3836d1b_2151264421-p-1080.webp 1080w, /images/69426f492a0206fad3836d1b_2151264421-p-1600.webp 1600w, /images/69426f492a0206fad3836d1b_2151264421.webp 2000w"
                  alt="Photo"
                  src="/images/69426f492a0206fad3836d1b_2151264421.webp"
                  loading="lazy"
                  className="banner-image _1"
                />
              </div>
            </div>
            <div
              id="slide-2"
              data-w-id="ec44d4c6-6c39-e749-4b93-ef0f882baf0a"
              className="banner-slide w-slide"
            >
              <div className="banner-image-wrap">
                <img
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  srcSet="//images/69440d4bba38c2f16e22ab26_2151302595%201-p-500.webp 500w, /images/69440d4bba38c2f16e22ab26_2151302595%201-p-800.webp 800w, /images/69440d4bba38c2f16e22ab26_2151302595%201-p-1080.webp 1080w, /images/69440d4bba38c2f16e22ab26_2151302595%201-p-1600.webp 1600w, /images/69440d4bba38c2f16e22ab26_2151302595%201.webp 2000w"
                  alt="Photo"
                  src="/images/69440d4bba38c2f16e22ab26_2151302595%201.webp"
                  loading="lazy"
                  className="banner-image _2"
                />
              </div>
            </div>
            <div
              data-w-id="7e6f2f4e-10be-9cfb-a576-d3523d7ea21b"
              className="banner-slide w-slide"
            >
              <div className="banner-image-wrap">
                <img
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  srcSet="//images/6942784a41790c009bd70d91_2151302596-p-500.webp 500w, /images/6942784a41790c009bd70d91_2151302596-p-800.webp 800w, /images/6942784a41790c009bd70d91_2151302596-p-1080.webp 1080w, /images/6942784a41790c009bd70d91_2151302596-p-1600.webp 1600w, /images/6942784a41790c009bd70d91_2151302596.webp 2000w"
                  alt="Photo"
                  src="/images/6942784a41790c009bd70d91_2151302596.webp"
                  loading="lazy"
                  className="banner-image _3"
                />
              </div>
            </div>
          </div>
          <div
            data-w-id="ec44d4c6-6c39-e749-4b93-ef0f882baf0b"
            className="home-1-banner-left-arrow w-slider-arrow-left"
          >
            <img
              src="/images/69427dec3186a54b8087d2a8_guidance_up-arrow.svg"
              loading="lazy"
              alt="icon"
            />
          </div>
          <div
            data-w-id="ec44d4c6-6c39-e749-4b93-ef0f882baf0d"
            className="home-1-banner-right w-slider-arrow-right"
          >
            <img
              src="/images/69427dec4669030ad24d216b_guidance_up-arrow-right.svg"
              loading="lazy"
              alt="icon"
            />
          </div>
          <div className="hidden-nav w-slider-nav w-round w-num"></div>
        </div>
      </section>
      <section className="section home-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="about-block">
            <div className="about-block-top">
              <div className="about-block-title-wrap">
                <div
                  data-w-id="79062e2d-76e1-260d-1cbb-c28428294fe3"
                  style={{
                    opacity: "0",
                    WebkitTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="label mobile"
                >
                  About pody
                </div>
                <h2
                  data-w-id="d8d1f341-077c-213a-62de-5751c47cde69"
                  style={{
                    opacity: "0",
                    WebkitTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                >
                  We creates modular and tiny homes designed for modern living.
                </h2>
              </div>
              <div className="about-block-image-wrap">
                <img
                  className="about-block-image"
                  src="/images/6942826103443d922712e9ae_2149571922.webp"
                  alt="Photo"
                  style={{
                    opacity: "0",
                    WebkitTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="1a8cbe77-0587-13ae-a42f-e74a866e04c1"
                  loading="lazy"
                  srcSet="//images/6942826103443d922712e9ae_2149571922-p-500.webp 500w, /images/6942826103443d922712e9ae_2149571922-p-800.webp 800w, /images/6942826103443d922712e9ae_2149571922-p-1080.webp 1080w, /images/6942826103443d922712e9ae_2149571922-p-1600.webp 1600w, /images/6942826103443d922712e9ae_2149571922.webp 2000w"
                />
              </div>
            </div>
            <div className="about-block-bottom">
              <div
                data-w-id="8364dd7f-854d-e699-e2d5-736eecd08e1e"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="label mobile-hidden"
              >
                About pody
              </div>
              <div className="about-paragraphs-wrapper">
                <div
                  data-w-id="07c22280-4410-7bc9-e215-32acc2a7c776"
                  style={{
                    opacity: "0",
                    WebkitTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="about-paragraph-wrap"
                >
                  <p>
                    Pody specializes in crafting modular and tiny homes tailored
                    for contemporary living. Our efficient process, use of
                    eco-friendly materials, and precise construction techniques
                    simplify the journey to owning a home that aligns with your
                    lifestyle, eliminating complications.
                  </p>
                </div>
                <div
                  data-w-id="28075625-f108-28bd-f9bd-c6b35fa7c65b"
                  style={{
                    opacity: "0",
                    WebkitTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="about-paragraph-wrap"
                >
                  <p>
                    By combining smart design, factory-built precision, and a
                    transparent process, we help homeowners move faster from
                    idea to reality. Every Pody home is created with attention
                    to detail, high-quality materials, and a deep respect for
                    how people live today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section no-space">
        <div
          data-current="Tab 1"
          data-easing="ease"
          data-duration-in="0"
          data-duration-out="0"
          className="home-tabs w-tabs"
        >
          <div
            data-w-id="ef077dbe-f6f4-6798-a92c-625a068bb332"
            style={{
              opacity: "0",
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="tabs-menu w-tab-menu"
          >
            <a
              data-w-tab="Tab 1"
              className="home-tab-link w-inline-block w-tab-link w--current"
            >
              <div>Exterior</div>
            </a>
            <a
              data-w-tab="Tab 2"
              className="home-tab-link w-inline-block w-tab-link"
            >
              <div>Interior</div>
            </a>
            <a
              data-w-tab="Tab 3"
              className="home-tab-link w-inline-block w-tab-link"
            >
              <div>FLOOR PLAN</div>
            </a>
          </div>
          <div className="tabs-content w-tab-content">
            <div
              data-w-tab="Tab 1"
              className="home-tab-pane w-tab-pane w--tab-active"
            >
              <div className="tab-image-wrap">
                <img
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  srcSet="//images/6942854f7a89e126b7f52034_2151264489-p-500.webp 500w, /images/6942854f7a89e126b7f52034_2151264489-p-800.webp 800w, /images/6942854f7a89e126b7f52034_2151264489-p-1080.webp 1080w, /images/6942854f7a89e126b7f52034_2151264489-p-1600.webp 1600w, /images/6942854f7a89e126b7f52034_2151264489.webp 2000w"
                  alt="Photo"
                  src="/images/6942854f7a89e126b7f52034_2151264489.webp"
                  loading="lazy"
                  className="tab-image"
                />
                <div className="hotspot _4">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Precision-Built Foundation
                  </div>
                  <div
                    data-w-id="5ddad227-5a18-de19-c46b-81a53c23deb7"
                    style={{ opacity: "0" }}
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot _3">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Exterior Shell
                  </div>
                  <div
                    data-w-id="e689e2b8-5bc1-536d-f848-c5f16901c936"
                    style={{ opacity: "0" }}
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot _2">
                  <div
                    data-w-id="9ea91a44-a7ca-d345-a03f-1a354f1abd3a"
                    style={{ opacity: "0" }}
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Panoramic Windows
                  </div>
                </div>
                <div className="hotspot">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Modular Base
                  </div>
                  <div
                    data-w-id="fe061a08-4f10-5002-8842-5fc282f0e253"
                    style={{ opacity: "0" }}
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="tab-overlay"></div>
              </div>
            </div>
            <div data-w-tab="Tab 2" className="w-tab-pane">
              <div className="tab-image-wrap">
                <img
                  sizes="100vw"
                  srcSet="//images/69428dc7751d9fe058a60375_2151263531-p-500.webp 500w, /images/69428dc7751d9fe058a60375_2151263531-p-800.webp 800w, /images/69428dc7751d9fe058a60375_2151263531-p-1080.webp 1080w, /images/69428dc7751d9fe058a60375_2151263531-p-1600.webp 1600w, /images/69428dc7751d9fe058a60375_2151263531.webp 2000w"
                  alt="Photo"
                  src="/images/69428dc7751d9fe058a60375_2151263531.webp"
                  loading="lazy"
                  className="tab-image"
                />
                <div className="hotspot slide-2-4">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Durable, Natural Finishes
                  </div>
                  <div
                    data-w-id="7ce9a389-e8b8-cff7-a3a5-d1600438d13d"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot slide-2-3">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Integrated Storage
                  </div>
                  <div
                    data-w-id="7ce9a389-e8b8-cff7-a3a5-d1600438d142"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot slide-2-1">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Open, Adaptable Space
                  </div>
                  <div
                    data-w-id="7ce9a389-e8b8-cff7-a3a5-d1600438d145"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot slide-2-2">
                  <div
                    data-w-id="7ce9a389-e8b8-cff7-a3a5-d1600438d14c"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Natural Lighting
                  </div>
                </div>
                <div className="tab-overlay"></div>
              </div>
            </div>
            <div data-w-tab="Tab 3" className="w-tab-pane">
              <div className="tab-image-wrap">
                <img
                  sizes="100vw"
                  srcSet="//images/69428f7ca8ac9164f9020157_ec80a67f8f27224b5f81fd1d211a95d5_103043-p-500.webp 500w, /images/69428f7ca8ac9164f9020157_ec80a67f8f27224b5f81fd1d211a95d5_103043-p-800.webp 800w, /images/69428f7ca8ac9164f9020157_ec80a67f8f27224b5f81fd1d211a95d5_103043-p-1080.webp 1080w, /images/69428f7ca8ac9164f9020157_ec80a67f8f27224b5f81fd1d211a95d5_103043-p-1600.webp 1600w, /images/69428f7ca8ac9164f9020157_ec80a67f8f27224b5f81fd1d211a95d5_103043.webp 1920w"
                  alt="Photo"
                  src="/images/69428f7ca8ac9164f9020157_ec80a67f8f27224b5f81fd1d211a95d5_103043.webp"
                  loading="lazy"
                  className="tab-image plan"
                />
                <div className="hotspot slide-3-3">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Open Plan Core
                  </div>
                  <div
                    data-w-id="32f477c1-ad87-db56-55b2-00bbb50174f7"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot slide-3-1">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Smart Access Planning
                  </div>
                  <div
                    data-w-id="32f477c1-ad87-db56-55b2-00bbb50174fc"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="hotspot slide-3-2">
                  <div style={{ opacity: "0" }} className="hotspot-text">
                    Clearly Defined Spaces
                  </div>
                  <div
                    data-w-id="32f477c1-ad87-db56-55b2-00bbb50174ff"
                    className="hotspot-large"
                  >
                    <div className="hotspot-small"></div>
                  </div>
                </div>
                <div className="tab-overlay plan"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer base-container home-absolute w-container">
          <div className="horizontal-title-wrap">
            <div className="title-wrap">
              <div
                data-w-id="df9ea546-e12c-89ab-3692-9ac877eb7f89"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="label text-white"
              >
                what we create
              </div>
              <h2
                data-w-id="4e187632-6420-ebe6-f0dd-04ab61799c18"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="text-white"
              >
                Designed to Adapt — Inside and Out.
              </h2>
            </div>
            <div
              data-w-id="b7aa07f7-729e-2105-a401-66805f62007d"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
            >
              <a
                data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                href="/projects"
                className="primary-button w-inline-block"
              >
                <div className="button-spot-big">
                  <div className="button-spot-small"></div>
                </div>
                <div className="button-text">Explore Our Homes</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section small-bottom-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="title-wrap center">
            <div
              data-w-id="ca6bb18d-f01f-24bb-57eb-ce5a23f6a317"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="label"
            >
              Recently Completed Homes
            </div>
            <h2
              data-w-id="263783fd-36ce-9d9d-fb8c-a1d40f455fef"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
            >
              A selection of newly built modular and tiny homes
            </h2>
          </div>
          <div
            data-delay="4000"
            data-animation="outin"
            className="projects-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
            style={{ opacity: "0" }}
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="7ceaecc5-6d23-1e3c-460f-e6ae1e6e650d"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="projects-mask w-slider-mask">
              <div className="w-slide">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div className="project-card">
                        <div className="project-card-left-wrap">
                          <div
                            data-w-id="d8df464f-c4e1-ab94-0cc6-718af6894ef2"
                            style={{
                              opacity: "0",
                              WebkitTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              MozTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              msTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              transform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="project-title-wrap"
                          >
                            <a
                              href="/projects/cedar-lane-tiny-home"
                              className="project-link"
                            >
                              Cedar Lane Tiny Home
                            </a>
                            <div className="project-card-details-wrap">
                              <p>Flagstaff, AZ</p>
                              <div className="dot"></div>
                              <p>2023</p>
                            </div>
                          </div>
                          <div
                            data-w-id="37d137c6-640a-8a60-928b-93e452537cec"
                            style={{
                              opacity: "0",
                              WebkitTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              MozTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              msTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              transform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                          >
                            <p>
                              A versatile tiny home designed for sustainable
                              living, emphasizing minimalism, energy efficiency,
                              and adaptability for all seasons.
                            </p>
                          </div>
                        </div>
                        <div
                          data-w-id="cf876ab3-0558-52bf-d8e6-e5b192c06683"
                          style={{
                            opacity: "0",
                            WebkitTransform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="project-images-wrap"
                        >
                          <img
                            loading="lazy"
                            src="/images/6942c8509fee680469d1efb3_Modern%20Tiny%20House%20Sunset.png"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                            srcSet="//images/6942c8509fee680469d1efb3_Modern%20Tiny%20House%20Sunset-p-500.png 500w, /images/6942c8509fee680469d1efb3_Modern%20Tiny%20House%20Sunset-p-800.png 800w, /images/6942c8509fee680469d1efb3_Modern%20Tiny%20House%20Sunset.png 967w"
                            className="project-vertical-image"
                          />
                          <img
                            loading="lazy"
                            src="/images/6942c847c98173ac79ea8100_2151264377.jpg"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                            srcSet="//images/6942c847c98173ac79ea8100_2151264377-p-500.jpg 500w, /images/6942c847c98173ac79ea8100_2151264377-p-800.jpg 800w, /images/6942c847c98173ac79ea8100_2151264377-p-1080.jpg 1080w, /images/6942c847c98173ac79ea8100_2151264377-p-1600.jpg 1600w, /images/6942c847c98173ac79ea8100_2151264377.jpg 2000w"
                            className="project-horizontal-image"
                          />
                        </div>
                        <div
                          data-w-id="be616441-1d68-9c79-783f-5306e054c398"
                          style={{
                            opacity: "0",
                            WebkitTransform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="project-button"
                        >
                          <a
                            data-w-id="6cc3df2f-41c6-d574-494a-7a27f09ca261"
                            href="/projects/cedar-lane-tiny-home"
                            className="link-button primary-color w-inline-block"
                          >
                            <div className="button-spot-big secondary-primary-color">
                              <div className="button-spot-small secondary-primary-color"></div>
                            </div>
                            <div className="button-text primary-color">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div className="project-card">
                        <div className="project-card-left-wrap">
                          <div className="project-title-wrap">
                            <a
                              href="/projects/pine-ridge-modular-home"
                              className="project-link"
                            >
                              Pine Ridge Modular Home
                            </a>
                            <div className="project-card-details-wrap">
                              <p>Asheville, NC</p>
                              <div className="dot"></div>
                              <p>2024</p>
                            </div>
                          </div>
                          <div>
                            <p>
                              A modular residence blending naturally into its
                              surroundings with efficient, generous, comfortable
                              living space.
                            </p>
                          </div>
                        </div>
                        <div className="project-images-wrap">
                          <img
                            loading="lazy"
                            src="/images/6942c88ff4d3d23c44bb42ba_2151264425.jpg"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                            srcSet="//images/6942c88ff4d3d23c44bb42ba_2151264425-p-500.jpg 500w, /images/6942c88ff4d3d23c44bb42ba_2151264425-p-800.jpg 800w, /images/6942c88ff4d3d23c44bb42ba_2151264425.jpg 1043w"
                            className="project-vertical-image"
                          />
                          <img
                            loading="lazy"
                            src="/images/6942c8c20b902064375f686a_2151264417.jpg"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                            srcSet="//images/6942c8c20b902064375f686a_2151264417-p-500.jpg 500w, /images/6942c8c20b902064375f686a_2151264417-p-800.jpg 800w, /images/6942c8c20b902064375f686a_2151264417-p-1080.jpg 1080w, /images/6942c8c20b902064375f686a_2151264417.jpg 1500w"
                            className="project-horizontal-image"
                          />
                        </div>
                        <div className="project-button">
                          <a
                            data-w-id="6cc3df2f-41c6-d574-494a-7a27f09ca261"
                            href="/projects/pine-ridge-modular-home"
                            className="link-button primary-color w-inline-block"
                          >
                            <div className="button-spot-big secondary-primary-color">
                              <div className="button-spot-small secondary-primary-color"></div>
                            </div>
                            <div className="button-text primary-color">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div className="project-card">
                        <div className="project-card-left-wrap">
                          <div className="project-title-wrap">
                            <a
                              href="/projects/willow-creek-family-module"
                              className="project-link"
                            >
                              Willow Creek Family Module
                            </a>
                            <div className="project-card-details-wrap">
                              <p>Bend, OR</p>
                              <div className="dot"></div>
                              <p>2025</p>
                            </div>
                          </div>
                          <div>
                            <p>
                              A flexible modular home designed for a growing
                              family, featuring expandable layouts and
                              high-performance insulation.
                            </p>
                          </div>
                        </div>
                        <div className="project-images-wrap">
                          <img
                            src="/images/6942c93b4096c25f196dae00_2151302647.jpg"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                            srcSet="//images/6942c93b4096c25f196dae00_2151302647-p-500.jpg 500w, /images/6942c93b4096c25f196dae00_2151302647-p-800.jpg 800w, /images/6942c93b4096c25f196dae00_2151302647-p-1080.jpg 1080w, /images/6942c93b4096c25f196dae00_2151302647.jpg 1200w"
                            className="project-vertical-image"
                          />
                          <img
                            src="/images/6942cb0780d9d12045abb0b6_2151302617.jpg"
                            loading="lazy"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                            srcSet="//images/6942cb0780d9d12045abb0b6_2151302617-p-500.jpg 500w, /images/6942cb0780d9d12045abb0b6_2151302617-p-800.jpg 800w, /images/6942cb0780d9d12045abb0b6_2151302617-p-1080.jpg 1080w, /images/6942cb0780d9d12045abb0b6_2151302617-p-1600.jpg 1600w, /images/6942cb0780d9d12045abb0b6_2151302617.jpg 2000w"
                            className="project-horizontal-image"
                          />
                        </div>
                        <div className="project-button">
                          <a
                            data-w-id="6cc3df2f-41c6-d574-494a-7a27f09ca261"
                            href="/projects/willow-creek-family-module"
                            className="link-button primary-color w-inline-block"
                          >
                            <div className="button-spot-big secondary-primary-color">
                              <div className="button-spot-small secondary-primary-color"></div>
                            </div>
                            <div className="button-text primary-color">
                              Learn more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="7ceaecc5-6d23-1e3c-460f-e6ae1e6e6511"
              className="projects-left-arrow w-slider-arrow-left"
            >
              <img
                loading="lazy"
                src="/images/6942d2f38561f80e049406f3_dark%20left%20arrow.svg"
                alt="icon"
                className="arrow"
              />
            </div>
            <div
              data-w-id="7ceaecc5-6d23-1e3c-460f-e6ae1e6e6513"
              className="projects-right-arrow w-slider-arrow-right"
            >
              <img
                loading="lazy"
                src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                alt="icon"
                className="arrow"
              />
            </div>
            <div className="hidden-nav w-slider-nav w-round w-num"></div>
          </div>
          <div className="large-text-wrapper">
            <div
              data-w-id="4edb3fb4-181b-81f1-1858-b47402ac52b4"
              style={{ opacity: "0" }}
              className="large-text"
            >
              Scalable homes
            </div>
            <div
              data-w-id="251b39a8-3725-c106-141f-dce0aad090be"
              style={{ opacity: "0" }}
              className="large-text-bottom-wrap"
            >
              <div>
                <a
                  data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                  href="/projects"
                  className="primary-button w-inline-block"
                >
                  <div className="button-spot-big">
                    <div className="button-spot-small"></div>
                  </div>
                  <div className="button-text">Explore all projects</div>
                </a>
              </div>
              <div
                id="w-node-e3a4de3a-f45d-7d16-a386-214082411457-d3af5718"
                className="large-text bottom"
              >
                created for living.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section no-space">
        <div
          data-w-id="031b993d-02f2-7dc1-162a-d96ff7d7f6ef"
          style={{
            opacity: "0",
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="scroll-image-wrap"
        >
          <img
            src="/images/6942d86c449910700d706e06_2149343634.webp"
            loading="lazy"
            data-w-id="a9c78244-f457-f02e-4795-f7ab0331c7ff"
            sizes="(max-width: 2000px) 100vw, 2000px"
            alt="Photo"
            srcSet="//images/6942d86c449910700d706e06_2149343634-p-500.webp 500w, /images/6942d86c449910700d706e06_2149343634-p-800.webp 800w, /images/6942d86c449910700d706e06_2149343634-p-1080.webp 1080w, /images/6942d86c449910700d706e06_2149343634-p-1600.webp 1600w, /images/6942d86c449910700d706e06_2149343634.webp 2000w"
            className="scroll-image"
          />
        </div>
      </section>
      <section className="section home-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="services-block">
            <div
              data-w-id="e9e13673-9578-e55a-3664-cc23a81f3cf0"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="label"
            >
              our Services
            </div>
            <div className="services-wrapper">
              <img
                className="services-image"
                src="/images/6942dd9c7d71ad6356676c31_e6720448382abefc6e9d15061ddf49ba_2151169628.webp"
                alt="Photo"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                data-w-id="98cb29fe-8eb7-0808-bc1b-bf136176d397"
                loading="lazy"
                srcSet="//images/6942dd9c7d71ad6356676c31_e6720448382abefc6e9d15061ddf49ba_2151169628-p-500.webp 500w, /images/6942dd9c7d71ad6356676c31_e6720448382abefc6e9d15061ddf49ba_2151169628-p-800.webp 800w, /images/6942dd9c7d71ad6356676c31_e6720448382abefc6e9d15061ddf49ba_2151169628-p-1080.webp 1080w, /images/6942dd9c7d71ad6356676c31_e6720448382abefc6e9d15061ddf49ba_2151169628.webp 1500w"
              />
              <div className="services">
                <div className="services-collection-list-wrapper w-dyn-list">
                  <div
                    data-w-id="6a88c530-e6d9-c7a3-eb53-23a61489d872"
                    style={{
                      opacity: "0",
                      WebkitTransform:
                        "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    role="list"
                    className="services-collection-list w-dyn-items"
                  >
                    <div
                      data-w-id="6a88c530-e6d9-c7a3-eb53-23a61489d873"
                      style={{
                        opacity: "0",
                        WebkitTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      role="listitem"
                      className="service-collection-item w-dyn-item"
                    >
                      <a
                        data-w-id="85fc7860-5b71-0f3a-dc3a-8e5ad1895e85"
                        href="/services/renovation-expansion-modules"
                        className="service-link-block w-inline-block"
                      >
                        <div className="service-card-text-wrap">
                          <div className="service-title">
                            Renovation & Expansion Modules
                          </div>
                          <p className="service-card-paragraph">
                            Designed for seamless integration with existing Pody
                            homes.
                          </p>
                        </div>
                        <img
                          src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                          loading="lazy"
                          alt="icon"
                          className="service-arrow"
                        />
                      </a>
                    </div>
                    <div
                      data-w-id="6a88c530-e6d9-c7a3-eb53-23a61489d873"
                      style={{
                        opacity: "0",
                        WebkitTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      role="listitem"
                      className="service-collection-item w-dyn-item"
                    >
                      <a
                        data-w-id="85fc7860-5b71-0f3a-dc3a-8e5ad1895e85"
                        href="/services/off-grid-eco-solutions"
                        className="service-link-block w-inline-block"
                      >
                        <div className="service-card-text-wrap">
                          <div className="service-title">
                            Off-Grid & Eco Solutions
                          </div>
                          <p className="service-card-paragraph">
                            Solar-ready and water storage options available for
                            off-grid setups.
                          </p>
                        </div>
                        <img
                          src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                          loading="lazy"
                          alt="icon"
                          className="service-arrow"
                        />
                      </a>
                    </div>
                    <div
                      data-w-id="6a88c530-e6d9-c7a3-eb53-23a61489d873"
                      style={{
                        opacity: "0",
                        WebkitTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      role="listitem"
                      className="service-collection-item w-dyn-item"
                    >
                      <a
                        data-w-id="85fc7860-5b71-0f3a-dc3a-8e5ad1895e85"
                        href="/services/custom-modular-solutions"
                        className="service-link-block w-inline-block"
                      >
                        <div className="service-card-text-wrap">
                          <div className="service-title">
                            Custom Modular Solutions
                          </div>
                          <p className="service-card-paragraph">
                            We adapt our modular system to your specific needs.
                          </p>
                        </div>
                        <img
                          src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                          loading="lazy"
                          alt="icon"
                          className="service-arrow"
                        />
                      </a>
                    </div>
                    <div
                      data-w-id="6a88c530-e6d9-c7a3-eb53-23a61489d873"
                      style={{
                        opacity: "0",
                        WebkitTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      role="listitem"
                      className="service-collection-item w-dyn-item"
                    >
                      <a
                        data-w-id="85fc7860-5b71-0f3a-dc3a-8e5ad1895e85"
                        href="/services/tiny-home-design-build"
                        className="service-link-block w-inline-block"
                      >
                        <div className="service-card-text-wrap">
                          <div className="service-title">
                            Tiny Home Design & Build
                          </div>
                          <p className="service-card-paragraph">
                            Efficient layouts, built-in storage, and
                            eco-friendly systems.
                          </p>
                        </div>
                        <img
                          src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                          loading="lazy"
                          alt="icon"
                          className="service-arrow"
                        />
                      </a>
                    </div>
                    <div
                      data-w-id="6a88c530-e6d9-c7a3-eb53-23a61489d873"
                      style={{
                        opacity: "0",
                        WebkitTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      role="listitem"
                      className="service-collection-item w-dyn-item"
                    >
                      <a
                        data-w-id="85fc7860-5b71-0f3a-dc3a-8e5ad1895e85"
                        href="/services/modular-home-construction"
                        className="service-link-block w-inline-block"
                      >
                        <div className="service-card-text-wrap">
                          <div className="service-title">
                            Modular Home Construction
                          </div>
                          <p className="service-card-paragraph">
                            Modular homes provide flexible, strong, and fast
                            building options
                          </p>
                        </div>
                        <img
                          src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                          loading="lazy"
                          alt="icon"
                          className="service-arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="fcd4496c-b8fa-63aa-6ae7-db7b00e5548e"
                  style={{
                    opacity: "0",
                    WebkitTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                >
                  <a
                    data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                    href="/services"
                    className="primary-button w-inline-block"
                  >
                    <div className="button-spot-big">
                      <div className="button-spot-small"></div>
                    </div>
                    <div className="button-text">All services</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section home-photo-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div
            data-w-id="8108a63f-0da8-1353-870e-f054ee10ab75"
            style={{
              opacity: "0",
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="testimonials-slider-card"
          >
            <div
              data-w-id="c891c2ed-bf5c-544f-9d08-da830e72040b"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="label"
            >
              Trusted by Homeowners
            </div>
            <div
              data-delay="4000"
              data-animation="outin"
              className="testimonials-slider w-slider"
              data-autoplay="false"
              data-easing="ease"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-w-id="04fdc146-684e-3d62-58cd-22f82be4d292"
              data-autoplay-limit="0"
              data-nav-spacing="3"
              data-duration="500"
              data-infinite="true"
            >
              <div className="testimonials-mask w-slider-mask">
                <div className="w-slide">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="testimonials-card">
                          <div
                            data-w-id="c35c7363-5cc2-d22f-8bbd-01a1d4e93bc4"
                            style={{
                              opacity: "0",
                              WebkitTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              MozTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              msTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              transform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="testimonial-text-wrap"
                          >
                            <div className="stars-wrap">
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                            </div>
                            <div className="testimonial-text">
                              “Pody made the entire process feel easy. The
                              design was thoughtful, the timeline was clear, and
                              the quality exceeded our expectations.”
                            </div>
                          </div>
                          <div
                            data-w-id="20416eea-845d-78dd-ae02-a4921b7ba3b5"
                            style={{
                              opacity: "0",
                              WebkitTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              MozTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              msTransform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              transform:
                                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="client-name"
                          >
                            <div className="client-name-wrap">Emma R.</div>
                            <p>Modular Home Owner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="testimonials-card">
                          <div className="testimonial-text-wrap">
                            <div className="stars-wrap">
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                            </div>
                            <div className="testimonial-text">
                              “We wanted a sustainable home without the delays
                              of traditional construction. Pody delivered a
                              beautiful, efficient space on time. ”
                            </div>
                          </div>
                          <div className="client-name">
                            <div className="client-name-wrap">Daniel M.</div>
                            <p>Tiny Home Client</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="testimonials-card">
                          <div className="testimonial-text-wrap">
                            <div className="stars-wrap">
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                              <img
                                src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                loading="lazy"
                                alt="icon"
                              />
                            </div>
                            <div className="testimonial-text">
                              “The modular approach gave us flexibility we
                              didn’t expect. Every detail felt intentional, from
                              the layout to the finishes.”
                            </div>
                          </div>
                          <div className="client-name">
                            <div className="client-name-wrap">Sophie L.</div>
                            <p>Custom Modular Project</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials-left-arrow w-slider-arrow-left">
                <img
                  src="/images/6942d2f38561f80e049406f3_dark%20left%20arrow.svg"
                  loading="lazy"
                  alt="icon"
                />
              </div>
              <div className="testimonials-right-arrow w-slider-arrow-right">
                <img
                  src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                  loading="lazy"
                  alt="icon"
                />
              </div>
              <div className="hidden-nav w-slider-nav w-round w-num"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05468"
        className="section home-section"
      >
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="cta-top">
            <img
              src="/images/6942779b2d5062cdd5e746b0_9a22debb951c1a05f60bdbd6a10d998c_2150799779.webp"
              loading="lazy"
              data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee0546b"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              alt="Photo"
              srcSet="//images/6942779b2d5062cdd5e746b0_9a22debb951c1a05f60bdbd6a10d998c_2150799779-p-500.webp 500w, /images/6942779b2d5062cdd5e746b0_9a22debb951c1a05f60bdbd6a10d998c_2150799779-p-800.webp 800w, /images/6942779b2d5062cdd5e746b0_9a22debb951c1a05f60bdbd6a10d998c_2150799779-p-1080.webp 1080w, /images/6942779b2d5062cdd5e746b0_9a22debb951c1a05f60bdbd6a10d998c_2150799779-p-1600.webp 1600w, /images/6942779b2d5062cdd5e746b0_9a22debb951c1a05f60bdbd6a10d998c_2150799779.webp 2000w"
              className="cta-small-image"
            />
            <div className="cta-text-wrap">
              <h2 data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee0546d">
                Start your modular home journey with ease and intelligent
                design.
              </h2>
            </div>
          </div>
          <div className="cta-bottom-wrap">
            <img
              src="/images/6943d483f59ecbb196b2bb6d_2151302604.webp"
              loading="lazy"
              data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05470"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              alt="Photo"
              srcSet="//images/6943d483f59ecbb196b2bb6d_2151302604-p-500.webp 500w, /images/6943d483f59ecbb196b2bb6d_2151302604-p-800.webp 800w, /images/6943d483f59ecbb196b2bb6d_2151302604-p-1080.webp 1080w, /images/6943d483f59ecbb196b2bb6d_2151302604.webp 1500w"
              className="cta-image-2"
            />
            <div className="cta-image-3-wrap">
              <img
                src="/images/6943d5d52401aa8d374bff17_39b58cdacff401f103132c5e803ce398_2151264508.webp"
                loading="lazy"
                data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05472"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px, 100vw"
                alt="Photo"
                srcSet="//images/6943d5d52401aa8d374bff17_39b58cdacff401f103132c5e803ce398_2151264508-p-500.webp 500w, /images/6943d5d52401aa8d374bff17_39b58cdacff401f103132c5e803ce398_2151264508-p-800.webp 800w, /images/6943d5d52401aa8d374bff17_39b58cdacff401f103132c5e803ce398_2151264508-p-1080.webp 1080w, /images/6943d5d52401aa8d374bff17_39b58cdacff401f103132c5e803ce398_2151264508.webp 1500w"
                className="cta-image-3"
              />
              <div data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05473">
                <a
                  data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                  href="/contact-us"
                  className="primary-button w-inline-block"
                >
                  <div className="button-spot-big">
                    <div className="button-spot-small"></div>
                  </div>
                  <div className="button-text"> start building your home</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="form-footer">
        <div className="base-container">
          <div className="footer-top-wrap">
            <div className="footer-title-wrap">
              <h2
                data-w-id="d7b7b9ea-dacd-d701-16de-492485155cb5"
                className="text-white"
              >
                Build for Today. Ready for Tomorrow.
              </h2>
            </div>
            <div className="footer-contacts-wrap">
              <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cb8">
                <a
                  href="https://www.google.com/maps/place/30+Charlyn+Ave,+Renovo,+PA+17764,+USA/@41.3321595,-77.6428999,21z/data=!4m15!1m8!3m7!1s0x89ce65db538e7877:0x2ecce68fae98fb04!2sChapman+Township,+PA,+USA!3b1!8m2!3d41.3500704!4d-77.7020169!16zL20vMHp0Zmg!3m5!1s0x89ce66ad52f86eb1:0x619d547e029e0f4a!8m2!3d41.3321842!4d-77.6427171!16s%2Fg%2F11h724zjl2?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="footer-contact-link"
                >
                  30 Charlyn Ave, Renovo, PA 17764, USA
                </a>
              </div>
              <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cbb">
                <a href="tel:+1(123)456789" className="footer-contact-link">
                  +1 (123) 456 789
                </a>
              </div>
              <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cbe">
                <a
                  href="mailto:information@office.com"
                  className="footer-contact-link"
                >
                  information@office.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer-middle-wrap">
            <div className="footer-links-wrap">
              <div className="links-column">
                <a
                  href="/"
                  aria-current="page"
                  className="footer-link w--current"
                >
                  Home
                </a>
                <a href="/about-us" className="footer-link">
                  about pody
                </a>
                <a href="/projects" className="footer-link">
                  projects
                </a>
                <a href="/services" className="footer-link">
                  Services
                </a>
                <a href="/faq" className="footer-link">
                  FAQ
                </a>
              </div>
              <div className="links-column">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="footer-link"
                >
                  FACEBOOK
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="footer-link"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="footer-link"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div
              id="w-node-d7b7b9ea-dacd-d701-16de-492485155cd5-85155cb1"
              data-w-id="d7b7b9ea-dacd-d701-16de-492485155cd5"
              className="form-block w-form"
            >
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form"
                data-wf-page-id="693e9d1043906400d3af5718"
                data-wf-element-id="d7b7b9ea-dacd-d701-16de-492485155cd6"
              >
                <div className="text-fields-line">
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="First-Name"
                    data-name="First Name"
                    placeholder="Firs name"
                    type="text"
                    id="First-Name"
                    required
                  />
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="Last-Name"
                    data-name="Last Name"
                    placeholder="Last name"
                    type="text"
                    id="Last-Name"
                    required
                  />
                </div>
                <div className="text-fields-line">
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder="Phone"
                    type="tel"
                    id="Phone"
                    required
                  />
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="email"
                    type="email"
                    id="Email"
                    required
                  />
                </div>
                <textarea
                  required
                  placeholder="your message"
                  maxLength={5000}
                  id="message"
                  name="message"
                  data-name="message"
                  className="text-field message-field w-input"
                ></textarea>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="primary-button footer-submit w-button"
                  value="Submit"
                />
              </form>
              <div className="succes-message text-white w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message text-white w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-wrap">
            <div className="footer-rights-text">
              © Pody. All Rights Reserved.{" "}
              <a
                href="https://pody-wcopilot.webflow.io/templates/licensing"
                className="footer-rights-bottom-link"
              >
                Licensing
              </a>
            </div>
            <div className="footer-rights-wrap">
              <div className="footer-rights-text">
                <a
                  href="https://wcopilot.com/templates"
                  target="_blank"
                  className="footer-rights-bottom-link"
                >
                  Template
                </a>{" "}
                by{" "}
                <a
                  href="https://wcopilot.com/"
                  target="_blank"
                  className="footer-rights-bottom-link brand-rights"
                >
                  wCopilot
                </a>
              </div>
              <div className="footer-rights-text">
                Powered by{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  className="footer-rights-bottom-link"
                >
                  Next.js
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
