type ForestGuideCard = { cardLabel: string; cardHeading: string; items: string[] };
type ForestGuideContent = {
  label: string;
  heading: string;
  cards: ForestGuideCard[];
};

const forestGuide: ForestGuideContent = {
  label: "Nandugudi Forest",
  heading: "Planning a Visit to Nandugudi Forest",
  cards: [
    {
      cardLabel: "Know Before You Go",
      cardHeading: "Things to Keep in Mind",
      items: [
        "Limited Information: Nandugudi Forest is a reserve forest with minimal public details.",
        "Basic Facilities: As a smaller forest, tourist amenities are limited, carry essentials like water and snacks.",
        "Respect Nature: Follow responsible tourism, avoid littering, stay on marked trails, and protect wildlife.",
      ],
    },
    {
      cardLabel: "Trip Checklist",
      cardHeading: "If You Plan to Visit",
      items: [
        "Local Guidance: Connect with locals or groups for insights on trails and access points.",
        "Stay Safe: Be aware of your surroundings and potential hazards while exploring.",
      ],
    },
  ],
};

export default function ForestGuide() {

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap reveal">
          <div className="label primary-color content-label">{forestGuide.label}</div>
          <h2>{forestGuide.heading}</h2>
        </div>
        <div className="forestguide-grid reveal">
          {forestGuide.cards.map((card, i) => (
            <div
              className={i === 1 ? "forestguide-card accent" : "forestguide-card"}
              key={card.cardLabel}
            >
              <div className="forestguide-card-label">{card.cardLabel}</div>
              <h3>{card.cardHeading}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
