type CityVsFarmContent = {
  label: string;
  heading: string;
  body: string;
  dividerLabel: string;
  cityImage: string;
  cityImageAlt: string;
  cityTag: string;
  cityText: string;
  farmImage: string;
  farmImageAlt: string;
  farmTag: string;
  farmText: string;
};

const cityVsFarm: CityVsFarmContent = {
  label: "Compare",
  heading: "How Farmland Living Differs from City Life",
  body: "Owning farmland is more than just a financial investment — it's a commitment to a healthier, more balanced lifestyle.",
  dividerLabel: "Environment",
  cityImage: "/images%20new/slide4b.jpg",
  cityImageAlt: "Traffic congestion representing city life",
  cityTag: "City Life",
  cityText: "Pollution, noise, and concrete jungles",
  farmImage: "/images%20new/slide4a.jpg",
  farmImageAlt: "Green open parkland representing farm life at Landmark Vanasiri",
  farmTag: "Farm Life",
  farmText: "Clean air, serene surroundings, and lush greenery",
};

export default function CityVsFarm() {
  const city = {
    image: cityVsFarm.cityImage,
    imageAlt: cityVsFarm.cityImageAlt,
    tag: cityVsFarm.cityTag,
    text: cityVsFarm.cityText,
  };
  const farm = {
    image: cityVsFarm.farmImage,
    imageAlt: cityVsFarm.farmImageAlt,
    tag: cityVsFarm.farmTag,
    text: cityVsFarm.farmText,
  };

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap center reveal">
          <div className="label primary-color content-label">{cityVsFarm.label}</div>
          <h2>{cityVsFarm.heading}</h2>
          <p className="paragraph-large">{cityVsFarm.body}</p>
        </div>
        <div className="cityfarm-split reveal">
          <div className="cityfarm-half city">
            <img src={city.image} alt={city.imageAlt} loading="lazy" />
            <div className="cityfarm-tag">{city.tag}</div>
            <p className="cityfarm-text">{city.text}</p>
          </div>
          <div className="cityfarm-divider">
            <span className="cityfarm-aspect">{cityVsFarm.dividerLabel}</span>
          </div>
          <div className="cityfarm-half farm">
            <img src={farm.image} alt={farm.imageAlt} loading="lazy" />
            <div className="cityfarm-tag">{farm.tag}</div>
            <p className="cityfarm-text">{farm.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
