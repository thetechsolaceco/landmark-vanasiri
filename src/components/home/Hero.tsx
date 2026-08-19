import { siteConfig } from "@/lib/site-config";

type HeroContent = {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  callLabel: string;
};
type HeroSlide = { number: string; label: string };
type HeroImage = { src: string; alt: string };

const hero: HeroContent = {
  heading: "A Masterpiece of Architectural Leisure Living",
  subheading:
    "Farmland plots in Bavapura Village, Sulibele Hobli, Hosakote Taluk, Bengaluru Rural District.",
  ctaLabel: "Book a Site Visit",
  ctaHref: "#contact",
  callLabel: "Call Now",
};

const sliderItems: HeroSlide[] = [
  { number: "01", label: "Bavapura Village, Sulibele Hobli, Hosakote Taluk" },
  { number: "02", label: "40 KM from Bengaluru City Center" },
  { number: "03", label: "Bengaluru Rural District, Karnataka" },
];

const images: HeroImage[] = [
  { src: "/images%20new/twentyfive.jpeg", alt: "Landmark Vanasiri entrance gate" },
  {
    src: "/images%20new/fourteen.jpeg",
    alt: "Aerial view of Landmark Vanasiri farmland community",
  },
  {
    src: "/images%20new/five.jpeg",
    alt: "Landmark Vanasiri architectural farmhouse exterior",
  },
];

export default function Hero() {
  const slides = images.slice(0, 3);

  return (
    <section id="home" className="banner-section" style={{ scrollMarginTop: "100px" }}>
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="home-1-banner">
          <div className="home-1-banner-text-wrap">
            <h1 className="home-1-banner-h1">
              {hero.heading}
            </h1>
            <div className="home-1-banner-paragraph-wrap">
              <a
                data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                href={hero.ctaHref}
                className="primary-button w-inline-block"
              >
                <div className="button-spot-big">
                  <div className="button-spot-small"></div>
                </div>
                <div className="button-text">{hero.ctaLabel}</div>
              </a>
              <a href={siteConfig.phoneHref} className="link-button w-inline-block">
                <div className="button-spot-big secondary">
                  <div className="button-spot-small secondary"></div>
                </div>
                <div className="button-text">{hero.callLabel}</div>
              </a>
              <div
                id="w-node-_6110d19e-9eb4-e2bf-344b-b294c6581867-d3af5718"
                className="banner-paragraph-wrapper"
              >
                <p className="paragraph-large text-white">{hero.subheading}</p>
                <p className="paragraph-large text-white" style={{ marginTop: "8px" }}>
                  <a
                    href={siteConfig.phoneHref}
                    style={{ color: "var(--primary-color)", textTransform: "none" }}
                  >
                    {siteConfig.phone}
                  </a>
                  {" · "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ color: "var(--primary-color)", textTransform: "none" }}
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="baner-slider-indicators-wrap">
            {sliderItems.slice(0, 3).map((item, i) => (
              <div key={item.number} className={`baner-slider-indicator _${i + 1}`}>
                <div className="baner-slider-indicators-wrapper">
                  <p className="home-1-slider-number">
                    {item.number}
                    <br />
                  </p>
                  <div className="baner-slider-indicators-text text-white">
                    {item.label}
                  </div>
                </div>
                <div className="baner-slider-indicators-line">
                  <div className={`baner-slider-white-indicator _${i + 1}`}></div>
                </div>
              </div>
            ))}
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
          {slides.map((slide, i) => (
            <div key={slide.src} className="banner-slide w-slide">
              <div className="banner-image-wrap">
                <img
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  alt={slide.alt}
                  src={slide.src}
                  loading="lazy"
                  className={`banner-image _${i + 1}`}
                />
              </div>
            </div>
          ))}
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
  );
}
