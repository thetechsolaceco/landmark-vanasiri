type FarmLivingContent = {
  index: string;
  label: string;
  heading: string;
  body: string;
};

const farmLiving: FarmLivingContent = {
  index: "01",
  label: "Farm Living",
  heading: "Discover the Joy of Farm Living",
  body: "Escape the hustle and bustle of city life and immerse yourself in the beauty of nature at Landmark Vanasiri. Located just 40 km from Bengaluru city center, this idyllic retreat offers the perfect blend of modern comforts and serene countryside living. Designed to elevate your lifestyle, Landmark Vanasiri is your gateway to a peaceful, rejuvenating, and sustainable way of life.",
};

export default function FarmLiving() {

  return (
    <section className="section home-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="farmliving-row reveal">
          <div className="farmliving-mark">
            <span className="farmliving-index">{farmLiving.index}</span>
            <span className="farmliving-line" />
          </div>
          <div className="farmliving-copy">
            <div className="label primary-color content-label">
              {farmLiving.label}
            </div>
            <h2>{farmLiving.heading}</h2>
            <p className="paragraph-large">{farmLiving.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
