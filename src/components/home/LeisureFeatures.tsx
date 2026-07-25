export default function LeisureFeatures() {
  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="leisure-panel reveal">
          <div className="leisure-media">
            <img
              className="leisure-image"
              src="/images%20new/slide7.jpg"
              alt="Couple enjoying leisure living surrounded by nature"
              loading="lazy"
            />
            <div className="leisure-media-tag">Landmark Vanasiri</div>
          </div>
          <div className="leisure-content">
            <div className="label text-white content-label">
              Leisure Living
            </div>
            <h2>Experience Leisure Living at Landmark Vanasiri</h2>
            <p className="leisure-subtitle">
              Experience serene living just 30 minutes from ITPB/Whitefield.
              Discover the perfect blend of nature and modern comfort with
              these exceptional features.
            </p>
            <div className="leisure-feature-list">
              <div className="leisure-feature">
                <span className="leisure-feature-index">01</span>
                <div>
                  <h3>Reconnect with Nature</h3>
                  <p>
                    Escape the hustle of city life and immerse yourself in
                    the beauty of nature. Enjoy a pollution-free environment
                    surrounded by lush greenery and open skies.
                  </p>
                </div>
              </div>
              <div className="leisure-feature">
                <span className="leisure-feature-index">02</span>
                <div>
                  <h3>Thoughtfully Planned Community</h3>
                  <p>
                    A well-designed layout that ensures privacy,
                    convenience, and aesthetic appeal, creating a harmonious
                    living experience.
                  </p>
                </div>
              </div>
              <div className="leisure-feature">
                <span className="leisure-feature-index">03</span>
                <div>
                  <h3>Modern Infrastructure</h3>
                  <p>
                    State-of-the-art facilities, including paved roads,
                    solar-powered lighting, and efficient water management
                    systems, for a hassle-free lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
