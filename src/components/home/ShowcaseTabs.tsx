type Hotspot = { label: string; description?: string };
type ShowcaseTab = {
  tabLabel: string;
  image: string;
  imageAlt: string;
  hotspots: Hotspot[];
};
type ShowcaseContent = {
  tabs: ShowcaseTab[];
  bannerLabel: string;
  bannerHeading: string;
  bannerCtaLabel: string;
  bannerCtaHref: string;
};

const showcase: ShowcaseContent = {
  tabs: [
    {
      tabLabel: "Trust & Process",
      image: "/images%20new/six.jpeg",
      imageAlt: "Landmark Vanasiri trust and process",
      hotspots: [
        { label: "Guided Farmland Documentation" },
        { label: "Transparent Terms" },
        { label: "Thoughtful Farmland Layouts" },
        { label: "Responsive Support" },
      ],
    },
    {
      tabLabel: "Farmland Living",
      image: "/images%20new/slide6.jpg",
      imageAlt: "Farmland living at Landmark Vanasiri",
      hotspots: [
        { label: "Space & Silence" },
        { label: "Pace of Life" },
        { label: "Ownership & Legacy" },
        { label: "Sustainable Living" },
      ],
    },
    {
      tabLabel: "WHAT SETS US APART",
      image: "/images%20new/slide1.jpg",
      imageAlt: "Landmark Vanasiri nature integrated layout",
      hotspots: [
        { label: "Nature Integrated Design" },
        { label: "Proximity to Nandugudi Forest" },
        { label: "Strategic Hosakote Address" },
      ],
    },
  ],
  bannerLabel: "why choose vanasiri",
  bannerHeading: "A Different Way to Live",
  bannerCtaLabel: "Book a Site Visit",
  bannerCtaHref: "#contact",
};

export default function ShowcaseTabs() {
  const [tab1, tab2, tab3] = showcase.tabs;
  const [tab1h1, tab1h2, tab1h3, tab1h4] = tab1.hotspots;
  const [tab2h1, tab2h2, tab2h3, tab2h4] = tab2.hotspots;
  const [tab3h1, tab3h2, tab3h3] = tab3.hotspots;

  return (
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
            <div>{tab1.tabLabel}</div>
          </a>
          <a
            data-w-tab="Tab 2"
            className="home-tab-link w-inline-block w-tab-link"
          >
            <div>{tab2.tabLabel}</div>
          </a>
          <a
            data-w-tab="Tab 3"
            className="home-tab-link w-inline-block w-tab-link"
          >
            <div>{tab3.tabLabel}</div>
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
                alt={tab1.imageAlt}
                src={tab1.image}
                loading="lazy"
                className="tab-image"
              />
              <div className="hotspot _4">
                <div style={{ opacity: "0" }} className="hotspot-text">
                  {tab1h1.label}
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
                  {tab1h2.label}
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
                  {tab1h3.label}
                </div>
              </div>
              <div className="hotspot">
                <div style={{ opacity: "0" }} className="hotspot-text">
                  {tab1h4.label}
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
                alt={tab2.imageAlt}
                src={tab2.image}
                loading="lazy"
                className="tab-image"
              />
              <div className="hotspot slide-2-4">
                <div style={{ opacity: "0" }} className="hotspot-text">
                  {tab2h1.label}
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
                  {tab2h2.label}
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
                  {tab2h3.label}
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
                  {tab2h4.label}
                </div>
              </div>
              <div className="tab-overlay"></div>
            </div>
          </div>
          <div data-w-tab="Tab 3" className="w-tab-pane">
            <div className="tab-image-wrap">
              <img
                sizes="100vw"
                alt={tab3.imageAlt}
                src={tab3.image}
                loading="lazy"
                className="tab-image plan"
              />
              <div className="hotspot slide-3-3">
                <div style={{ opacity: "0" }} className="hotspot-text">
                  {tab3h1.label}
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
                  {tab3h2.label}
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
                  {tab3h3.label}
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
              {showcase.bannerLabel}
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
              {showcase.bannerHeading}
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
              href={showcase.bannerCtaHref}
              className="primary-button w-inline-block"
            >
              <div className="button-spot-big">
                <div className="button-spot-small"></div>
              </div>
              <div className="button-text">{showcase.bannerCtaLabel}</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
