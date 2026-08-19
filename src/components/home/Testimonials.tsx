import { getTestimonials } from "@/lib/content";

const fallback = [
  {
    quote: "Awaiting a verified testimonial from a Landmark Vanasiri buyer or site visitor.",
    authorRole: "Homeowner",
    starRating: 5,
  },
  {
    quote: "Awaiting a verified testimonial from a Landmark Vanasiri buyer or site visitor.",
    authorRole: "Property Owner",
    starRating: 5,
  },
  {
    quote: "Awaiting a verified testimonial from a Landmark Vanasiri buyer or site visitor.",
    authorRole: "Investor",
    starRating: 5,
  },
];

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  const items = testimonials.length > 0 ? testimonials : fallback;

  return (
    <section id="testimonials" className="section home-photo-section" style={{ scrollMarginTop: "100px" }}>
      <div className="w-layout-blockcontainer base-container w-container">
        <div
          data-w-id="8108a63f-0da8-1353-870e-f054ee10ab75"
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
          className="testimonials-slider-card"
        >
          <div
            data-w-id="c891c2ed-bf5c-544f-9d08-da830e72040b"
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
            className="label"
          >
            Trusted by Homeowners
          </div>
          <div
            data-delay="4000"
            data-animation="outin"
            className="testimonials-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
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
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="04fdc146-684e-3d62-58cd-22f82be4d292"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="testimonials-mask w-slider-mask">
              {items.map((item, i) => (
                <div className="w-slide" key={`${item.authorRole}-${i}`}>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="testimonials-card">
                          <div className="testimonial-text-wrap">
                            <div className="stars-wrap">
                              {Array.from({ length: item.starRating }).map((_, starIndex) => (
                                <img
                                  key={starIndex}
                                  src="/images/6943cc0887db16916ac7e9ee_ic_baseline-star.svg"
                                  loading="lazy"
                                  alt="icon"
                                />
                              ))}
                            </div>
                            <div className="testimonial-text">{item.quote}</div>
                          </div>
                          <div className="client-name">
                            <div className="client-name-wrap">{item.authorRole}</div>
                            <p>Landmark Vanasiri</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonials-left-arrow w-slider-arrow-left">
              <img
                src="/images/6942d2f38561f80e049406f3_dark%20left%20arrow.svg"
                loading="lazy"
                alt="icon"
              />
            </div>
            <div className="testimonials-right-arrow w-slider-arrow-right">
              <img
                src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
                loading="lazy"
                alt="icon"
              />
            </div>
            <div className="hidden-nav w-slider-nav w-round w-num"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
