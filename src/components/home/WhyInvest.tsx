export default function WhyInvest() {
  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="whyinvest-top reveal">
          <div className="whyinvest-copy">
            <div className="label primary-color content-label">
              Why Invest
            </div>
            <h2>Why Invest in Farmland?</h2>
            <p className="paragraph-large">
              Owning farmland is more than just a financial investment
              {" — "}
              it&apos;s a commitment to a healthier, more balanced lifestyle.
            </p>
            <a href="#contact" className="primary-button w-inline-block">
              <div className="button-spot-big">
                <div className="button-spot-small"></div>
              </div>
              <div className="button-text">Book a Site Visit</div>
            </a>
          </div>
          <div className="whyinvest-media">
            <img
              className="whyinvest-image"
              src="/images%20new/nine.jpeg"
              alt="Modern farmhouse with pool at Landmark Vanasiri"
              loading="lazy"
            />
            <div className="whyinvest-badge">
              <div className="whyinvest-badge-num">40 KM</div>
              <div className="whyinvest-badge-label">From Bengaluru</div>
            </div>
          </div>
        </div>
        <div className="whyinvest-strip reveal">
          <span className="whyinvest-strip-mark">“</span>
          <span className="whyinvest-strip-text">
            Here&apos;s why purchasing farmland is a smart and rewarding
            choice
          </span>
        </div>
      </div>
    </section>
  );
}
