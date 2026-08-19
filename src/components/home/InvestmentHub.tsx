type Stat = { value: string; unit: string };
type Tenant = { name: string; description: string };
type InvestmentHubContent = {
  label: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  mediaTag: string;
  location: string;
  description: string;
  stats: Stat[];
  tenants: Tenant[];
};

const investmentHub: InvestmentHubContent = {
  label: "Growing Region",
  heading: "Major Warehouse Projects in Hosakote, Bangalore Rural, Karnataka",
  intro:
    "Hosakote is emerging as a significant logistics hub in the Bangalore Rural district, attracting substantial investments in warehousing and industrial infrastructure. Notable projects include:",
  image: "/images%20new/slide11a.jpg",
  imageAlt: "Aerial view of Sumadhura Logistics Park in Hosakote",
  mediaTag: "Sumadhura Logistics Park · Hosakote",
  location: "Chintamani - Hosakote Road, East Bangalore",
  description:
    "Sumadhura Group's inaugural venture into the logistics and warehousing sector, with plans to expand significantly in the coming years.",
  stats: [
    { value: "100", unit: "Acres Planned" },
    { value: "2.5M", unit: "Sq Ft, Phase 1" },
    { value: "500", unit: "Acres at Scale" },
  ],
  tenants: [
    {
      name: "Zomato",
      description:
        "leased 300,000 sq ft of warehousing space, marking its largest built-to-suit facility in India.",
    },
    {
      name: "NX Logistics India (Nippon Express)",
      description: "secured 180,000 sq ft of space for a nine-year term.",
    },
  ],
};

export default function InvestmentHub() {

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap reveal">
          <div className="label primary-color content-label">{investmentHub.label}</div>
          <h2>{investmentHub.heading}</h2>
          <p className="paragraph-large">{investmentHub.intro}</p>
        </div>
        <div className="investhub-grid reveal">
          <div className="investhub-media">
            <img
              className="investhub-image"
              src={investmentHub.image}
              alt={investmentHub.imageAlt}
              loading="lazy"
            />
            <div className="investhub-media-tag">{investmentHub.mediaTag}</div>
          </div>
          <div className="investhub-card">
            <div className="investhub-eyebrow">Location</div>
            <p>{investmentHub.location}</p>

            <div className="investhub-stats">
              {investmentHub.stats.map((stat) => (
                <div className="investhub-stat" key={stat.unit}>
                  <span className="investhub-stat-num">{stat.value}</span>
                  <span className="investhub-stat-unit">{stat.unit}</span>
                </div>
              ))}
            </div>

            <p>{investmentHub.description}</p>

            <div className="investhub-eyebrow">Key Tenants</div>
            {investmentHub.tenants.map((tenant) => (
              <div className="investhub-tenant" key={tenant.name}>
                <strong>{tenant.name}</strong> — {tenant.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
