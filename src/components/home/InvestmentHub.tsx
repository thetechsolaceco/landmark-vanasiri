export default function InvestmentHub() {
  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap reveal">
          <div className="label primary-color content-label">
            Growing Region
          </div>
          <h2>
            Major Warehouse Projects in Hosakote, Bangalore Rural, Karnataka
          </h2>
          <p className="paragraph-large">
            Hosakote is emerging as a significant logistics hub in the
            Bangalore Rural district, attracting substantial investments in
            warehousing and industrial infrastructure. Notable projects
            include:
          </p>
        </div>
        <div className="investhub-grid reveal">
          <div className="investhub-media">
            <img
              className="investhub-image"
              src="/images%20new/slide11a.jpg"
              alt="Aerial view of Sumadhura Logistics Park in Hosakote"
              loading="lazy"
            />
            <div className="investhub-media-tag">
              Sumadhura Logistics Park · Hosakote
            </div>
          </div>
          <div className="investhub-card">
            <div className="investhub-eyebrow">Location</div>
            <p>Chintamani - Hosakote Road, East Bangalore</p>

            <div className="investhub-stats">
              <div className="investhub-stat">
                <span className="investhub-stat-num">100</span>
                <span className="investhub-stat-unit">Acres Planned</span>
              </div>
              <div className="investhub-stat">
                <span className="investhub-stat-num">2.5M</span>
                <span className="investhub-stat-unit">Sq Ft, Phase 1</span>
              </div>
              <div className="investhub-stat">
                <span className="investhub-stat-num">500</span>
                <span className="investhub-stat-unit">Acres at Scale</span>
              </div>
            </div>

            <p>
              Sumadhura Group&apos;s inaugural venture into the logistics and
              warehousing sector, with plans to expand significantly in the
              coming years.
            </p>

            <div className="investhub-eyebrow">Key Tenants</div>
            <div className="investhub-tenant">
              <strong>Zomato</strong> — leased 300,000 sq ft of warehousing
              space, marking its largest built-to-suit facility in India.
            </div>
            <div className="investhub-tenant">
              <strong>NX Logistics India (Nippon Express)</strong> — secured
              180,000 sq ft of space for a nine-year term.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
