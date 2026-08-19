type ServiceStep = { title: string; description: string };
type ServicesContent = {
  label: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  steps: ServiceStep[];
};

const services: ServicesContent = {
  label: "how it works",
  image: "/images%20new/twentythree.jpeg",
  imageAlt: "Life at Landmark Vanasiri farmhouse community",
  ctaLabel: "Book a Site Visit",
  ctaHref: "#contact",
  steps: [
    {
      title: "Site Visit",
      description: "Explore Landmark Vanasiri and the surrounding Hosakote countryside firsthand.",
    },
    {
      title: "Plot Selection",
      description: "Choose from architecturally planned farmland layouts suited to your goals.",
    },
    {
      title: "Documentation",
      description: "Complete due diligence and paperwork with our team's guidance.",
    },
    {
      title: "Booking & Registration",
      description: "Secure your plot with clear terms and registration support.",
    },
    {
      title: "Ownership & Beyond",
      description: "Begin building your farmhouse, or hold your investment for the long term.",
    },
  ],
};

export default function Services() {

  return (
    <section id="services" className="section home-section" style={{ scrollMarginTop: "100px" }}>
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
            {services.label}
          </div>
          <div className="services-wrapper">
            <img
              className="services-image"
              src={services.image}
              alt={services.imageAlt}
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
                  {services.steps.map((step) => (
                    <div
                      role="listitem"
                      className="service-collection-item w-dyn-item"
                      key={step.title}
                    >
                      <a
                        href={services.ctaHref}
                        className="service-link-block w-inline-block"
                      >
                        <div className="service-card-text-wrap">
                          <div className="service-title">{step.title}</div>
                          <p className="service-card-paragraph">{step.description}</p>
                        </div>
                        <img
                          src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                          loading="lazy"
                          alt="icon"
                          className="service-arrow"
                        />
                      </a>
                    </div>
                  ))}
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
                  href={services.ctaHref}
                  className="primary-button w-inline-block"
                >
                  <div className="button-spot-big">
                    <div className="button-spot-small"></div>
                  </div>
                  <div className="button-text">{services.ctaLabel}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
