type WhyInvestContent = {
  label: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  badgeNum: string;
  badgeLabel: string;
  stripQuote: string;
};

const whyInvest: WhyInvestContent = {
  label: "Why Invest",
  heading: "Why Invest in Farmland?",
  body: "Owning farmland is more than just a financial investment — it's a commitment to a healthier, more balanced lifestyle.",
  ctaLabel: "Book a Site Visit",
  ctaHref: "#contact",
  image: "/images%20new/nine.jpeg",
  imageAlt: "Modern farmhouse with pool at Landmark Vanasiri",
  badgeNum: "40 KM",
  badgeLabel: "From Bengaluru",
  stripQuote: "Here's why purchasing farmland is a smart and rewarding choice",
};

export default function WhyInvest() {

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="whyinvest-top reveal">
          <div className="whyinvest-copy">
            <div className="label primary-color content-label">
              {whyInvest.label}
            </div>
            <h2>{whyInvest.heading}</h2>
            <p className="paragraph-large">{whyInvest.body}</p>
            <a href={whyInvest.ctaHref} className="primary-button w-inline-block">
              <div className="button-spot-big">
                <div className="button-spot-small"></div>
              </div>
              <div className="button-text">{whyInvest.ctaLabel}</div>
            </a>
          </div>
          <div className="whyinvest-media">
            <img
              className="whyinvest-image"
              src={whyInvest.image}
              alt={whyInvest.imageAlt}
              loading="lazy"
            />
            <div className="whyinvest-badge">
              <div className="whyinvest-badge-num">{whyInvest.badgeNum}</div>
              <div className="whyinvest-badge-label">{whyInvest.badgeLabel}</div>
            </div>
          </div>
        </div>
        <div className="whyinvest-strip reveal">
          <span className="whyinvest-strip-mark">“</span>
          <span className="whyinvest-strip-text">{whyInvest.stripQuote}</span>
        </div>
      </div>
    </section>
  );
}
