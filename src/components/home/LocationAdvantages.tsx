type ProximityItem = { value: string; unit: string; place: string };
type LocationAdvantagesContent = {
  bannerImage: string;
  bannerImageAlt: string;
  label: string;
  heading: string;
  bodyHeading: string;
  bodyList: string[];
  proximityItems: ProximityItem[];
  quote: string;
};

const locAdv: LocationAdvantagesContent = {
  bannerImage: "/images%20new/twentyseven.jpeg",
  bannerImageAlt: "Entrance gate at Landmark Vanasiri",
  label: "Come See It Yourself",
  heading:
    "Visit Landmark Vanasiri today and begin your journey to a peaceful and harmonious lifestyle!",
  bodyHeading: "Prime Location Advantages of Vanasiri",
  bodyList: [
    "Bavapura, Sulibele Hobli, Hosakote Taluk, Bengaluru Rural District",
    "Vanasiri - Landmark is strategically located in Hosadimbahalli, within the Hosakote region of Bengaluru Rural, Karnataka.",
    "It offers easy access to nature, including the nearby Nandugudi Forest, a peaceful green space that adds to the area's natural beauty.",
  ],
  proximityItems: [
    { value: "10", unit: "Min Drive", place: "Sharnya Narayan International School" },
    { value: "20", unit: "Min Drive", place: "Orion Uptown" },
    { value: "15", unit: "Min Drive", place: "Hoskote Industrial Area" },
    { value: "2", unit: "Min Drive", place: "RMZ Warehouse" },
  ],
  quote:
    "Vanasiri - Landmark's location in Hosadimbahalli, Hosakote, offers a harmonious blend of rural tranquility and urban convenience, making it an attractive destination for residents and investors alike.",
};

export default function LocationAdvantages() {

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="locadv-banner reveal">
          <img
            className="locadv-banner-bg"
            src={locAdv.bannerImage}
            alt={locAdv.bannerImageAlt}
            loading="lazy"
          />
          <div className="locadv-banner-content">
            <div className="label primary-color content-label">{locAdv.label}</div>
            <h2>{locAdv.heading}</h2>
          </div>
        </div>

        <div className="locadv-body">
          <div>
            <h3>{locAdv.bodyHeading}</h3>
            <ul className="locadv-list">
              {locAdv.bodyList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="proximity-grid">
            {locAdv.proximityItems.map((item, i) => (
              <div
                className={i % 2 === 1 ? "proximity-item dark" : "proximity-item"}
                key={item.place}
              >
                <div className="proximity-value">{item.value}</div>
                <div className="proximity-unit">{item.unit}</div>
                <div className="proximity-place">{item.place}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="locadv-quote reveal">
          <span className="locadv-quote-mark">“</span>
          {locAdv.quote}
        </p>
      </div>
    </section>
  );
}
