type CtaContent = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  image1Src: string;
  image1Alt: string;
  image2Src: string;
  image2Alt: string;
  image3Src: string;
  image3Alt: string;
};

const cta: CtaContent = {
  heading: "Ready to Own Farmland Near Bengaluru?",
  ctaLabel: "Book a Free Site Visit",
  ctaHref: "#contact",
  image1Src: "/images%20new/four.jpeg",
  image1Alt: "Outdoor lounge area at Landmark Vanasiri",
  image2Src: "/images%20new/thirteen.jpeg",
  image2Alt: "Family enjoying a Landmark Vanasiri farmhouse",
  image3Src: "/images%20new/twentyseven.jpeg",
  image3Alt: "Landmark Vanasiri entrance gate",
};

export default function Cta() {
  const image1 = { src: cta.image1Src, alt: cta.image1Alt };
  const image2 = { src: cta.image2Src, alt: cta.image2Alt };
  const image3 = { src: cta.image3Src, alt: cta.image3Alt };

  return (
    <section
      data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05468"
      className="section home-section"
    >
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="cta-top">
          <img
            src={image1.src}
            loading="lazy"
            data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee0546b"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
            alt={image1.alt}
            className="cta-small-image"
          />
          <div className="cta-text-wrap">
            <h2 data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee0546d">{cta.heading}</h2>
          </div>
        </div>
        <div className="cta-bottom-wrap">
          <img
            src={image2.src}
            loading="lazy"
            data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05470"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
            alt={image2.alt}
            className="cta-image-2"
          />
          <div className="cta-image-3-wrap">
            <img
              src={image3.src}
              loading="lazy"
              data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05472"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px, 100vw"
              alt={image3.alt}
              className="cta-image-3"
            />
            <div data-w-id="e7ed3b35-efca-3baa-5c85-c3e3eee05473">
              <a
                data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                href={cta.ctaHref}
                className="primary-button w-inline-block"
              >
                <div className="button-spot-big">
                  <div className="button-spot-small"></div>
                </div>
                <div className="button-text">{cta.ctaLabel}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
