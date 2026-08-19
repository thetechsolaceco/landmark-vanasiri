type AboutContent = {
  label: string;
  heading: string;
  image: string;
  imageAlt: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
};

const about: AboutContent = {
  label: "About Vanasiri",
  heading:
    "We create architectural farmland plots designed for modern countryside living.",
  image: "/images%20new/nine.jpeg",
  imageAlt: "Landmark Vanasiri farmhouse exteriors with pool",
  bodyParagraph1:
    "Offering architectural farmland plots for sale near Bengaluru, built through thoughtful design, honest guidance and a lasting commitment to countryside living in Hosakote. Your family deserves a farmland retreat that's built to last, planned with care, precision and a deep respect for the land.",
  bodyParagraph2:
    "Landmark Vanasiri is developed by Landmark Nest, a Bengaluru based real estate developer with a focus on eco conscious, nature integrated design across residential and farmland projects in Bengaluru Rural District. Landmark Nest's approach centers on building with minimal disruption to the natural landscape, a principle carried through in Landmark Vanasiri's farmland layout.",
};

export default function About() {
  const paragraph1 = about.bodyParagraph1;
  const paragraph2 = about.bodyParagraph2;

  return (
    <section id="about" className="section home-section" style={{ scrollMarginTop: "100px" }}>
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="about-block">
          <div className="about-block-top">
            <div className="about-block-title-wrap">
              <div
                data-w-id="79062e2d-76e1-260d-1cbb-c28428294fe3"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="label mobile"
              >
                {about.label}
              </div>
              <h2
                data-w-id="d8d1f341-077c-213a-62de-5751c47cde69"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
              >
                {about.heading}
              </h2>
            </div>
            <div className="about-block-image-wrap">
              <img
                className="about-block-image"
                src={about.image}
                alt={about.imageAlt}
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                data-w-id="1a8cbe77-0587-13ae-a42f-e74a866e04c1"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-block-bottom">
            <div
              data-w-id="8364dd7f-854d-e699-e2d5-736eecd08e1e"
              style={{
                opacity: "0",
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="label mobile-hidden"
            >
              {about.label}
            </div>
            <div className="about-paragraphs-wrapper">
              <div
                data-w-id="07c22280-4410-7bc9-e215-32acc2a7c776"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="about-paragraph-wrap"
              >
                <p>{paragraph1}</p>
              </div>
              <div
                data-w-id="28075625-f108-28bd-f9bd-c6b35fa7c65b"
                style={{
                  opacity: "0",
                  WebkitTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="about-paragraph-wrap"
              >
                <p>{paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
