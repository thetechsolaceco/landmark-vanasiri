type LeisureFeature = { title: string; description: string };
type LeisureFeaturesContent = {
  label: string;
  heading: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  mediaTag: string;
  features: LeisureFeature[];
};

const leisure: LeisureFeaturesContent = {
  label: "Leisure Living",
  heading: "Experience Leisure Living at Landmark Vanasiri",
  subtitle:
    "Experience serene living just 30 minutes from ITPB/Whitefield. Discover the perfect blend of nature and modern comfort with these exceptional features.",
  image: "/images%20new/slide7.jpg",
  imageAlt: "Couple enjoying leisure living surrounded by nature",
  mediaTag: "Landmark Vanasiri",
  features: [
    {
      title: "Reconnect with Nature",
      description:
        "Escape the hustle of city life and immerse yourself in the beauty of nature. Enjoy a pollution-free environment surrounded by lush greenery and open skies.",
    },
    {
      title: "Thoughtfully Planned Community",
      description:
        "A well-designed layout that ensures privacy, convenience, and aesthetic appeal, creating a harmonious living experience.",
    },
    {
      title: "Modern Infrastructure",
      description:
        "State-of-the-art facilities, including paved roads, solar-powered lighting, and efficient water management systems, for a hassle-free lifestyle.",
    },
  ],
};

export default function LeisureFeatures() {

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="leisure-panel reveal">
          <div className="leisure-media">
            <img
              className="leisure-image"
              src={leisure.image}
              alt={leisure.imageAlt}
              loading="lazy"
            />
            <div className="leisure-media-tag">{leisure.mediaTag}</div>
          </div>
          <div className="leisure-content">
            <div className="label text-white content-label">{leisure.label}</div>
            <h2>{leisure.heading}</h2>
            <p className="leisure-subtitle">{leisure.subtitle}</p>
            <div className="leisure-feature-list">
              {leisure.features.map((feature, i) => (
                <div className="leisure-feature" key={feature.title}>
                  <span className="leisure-feature-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
