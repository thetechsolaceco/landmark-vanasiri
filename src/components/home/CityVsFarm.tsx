export default function CityVsFarm() {
  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap center reveal">
          <div className="label primary-color content-label">Compare</div>
          <h2>How Farmland Living Differs from City Life</h2>
          <p className="paragraph-large">
            Owning farmland is more than just a financial investment
            {" — "}
            it&apos;s a commitment to a healthier, more balanced lifestyle.
          </p>
        </div>
        <div className="cityfarm-split reveal">
          <div className="cityfarm-half city">
            <img
              src="/images%20new/slide4b.jpg"
              alt="Traffic congestion representing city life"
              loading="lazy"
            />
            <div className="cityfarm-tag">City Life</div>
            <p className="cityfarm-text">
              Pollution, noise, and concrete jungles
            </p>
          </div>
          <div className="cityfarm-divider">
            <span className="cityfarm-aspect">Environment</span>
          </div>
          <div className="cityfarm-half farm">
            <img
              src="/images%20new/slide4a.jpg"
              alt="Green open parkland representing farm life at Landmark Vanasiri"
              loading="lazy"
            />
            <div className="cityfarm-tag">Farm Life</div>
            <p className="cityfarm-text">
              Clean air, serene surroundings, and lush greenery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
