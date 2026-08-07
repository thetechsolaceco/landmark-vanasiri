import { getList } from "@/lib/content";

type ProjectEntry = {
  title: string;
  location: string;
  description: string;
  verticalImageSrc: string;
  verticalImageAlt: string;
  horizontalImageSrc: string;
  horizontalImageAlt: string;
  ctaLabel: string;
};
type Project = {
  title: string;
  location: string;
  description: string;
  images: { src: string; alt: string }[];
  ctaLabel: string;
};
type RecentProjectsContent = {
  label: string;
  heading: string;
  bigStatValue: string;
  bigStatCaption: string;
  bigStatCtaLabel: string;
};

const recentProjectsBase: RecentProjectsContent = {
  label: "Our Vanasiri Farmland Project",
  heading: "Secure Farmland Ownership Near Bengaluru",
  bigStatValue: "40 KM",
  bigStatCaption: "from Bengaluru city center.",
  bigStatCtaLabel: "Book a Site Visit",
};

const fallbackProjects: ProjectEntry[] = [
  {
    title: "Sustainable Farmland Living",
    location: "Bavapura Village · Hosakote Taluk",
    description:
      "Grow your own produce, breathe fresh air and embrace a slower, greener pace of life near Bengaluru.",
    verticalImageSrc: "/images%20new/eleven.jpeg",
    verticalImageAlt: "Sustainable farmland living at Landmark Vanasiri",
    horizontalImageSrc: "/images%20new/twentyfour.jpeg",
    horizontalImageAlt: "Sustainable farmland living at Landmark Vanasiri",
    ctaLabel: "Learn more",
  },
  {
    title: "Long Term Farmland Investment",
    location: "Sulibele Hobli · Bengaluru Rural",
    description:
      "A tangible, appreciating asset you can cultivate, lease or develop for the future.",
    verticalImageSrc: "/images%20new/twelve.jpeg",
    verticalImageAlt: "Long term farmland investment at Landmark Vanasiri",
    horizontalImageSrc: "/images%20new/eight.jpeg",
    horizontalImageAlt: "Long term farmland investment at Landmark Vanasiri",
    ctaLabel: "Learn more",
  },
  {
    title: "Build Your Weekend Farmhouse",
    location: "Hosakote Taluk · Karnataka",
    description:
      "Flexible plots suited to custom homes, weekend getaways or eco friendly farmhouse stays.",
    verticalImageSrc: "/images%20new/one.jpeg",
    verticalImageAlt: "Weekend farmhouse at Landmark Vanasiri",
    horizontalImageSrc: "/images%20new/ten.jpeg",
    horizontalImageAlt: "Weekend farmhouse at Landmark Vanasiri",
    ctaLabel: "Learn more",
  },
];

function splitLocation(location: string) {
  const [first, ...rest] = location.split(" · ");
  return [first, rest.join(" · ")];
}

function toProject(entry: ProjectEntry): Project {
  return {
    title: entry.title,
    location: entry.location,
    description: entry.description,
    images: [
      { src: entry.verticalImageSrc, alt: entry.verticalImageAlt },
      { src: entry.horizontalImageSrc, alt: entry.horizontalImageAlt },
    ],
    ctaLabel: entry.ctaLabel,
  };
}

export default async function RecentProjects() {
  const projectEntries = await getList<ProjectEntry>("project");
  const projects = (projectEntries.length ? projectEntries : fallbackProjects).map(toProject);
  const recentProjects = {
    ...recentProjectsBase,
    projects,
    bigStat: {
      value: recentProjectsBase.bigStatValue,
      caption: recentProjectsBase.bigStatCaption,
      ctaLabel: recentProjectsBase.bigStatCtaLabel,
    },
  };
  const [project1, project2, project3] = recentProjects.projects;
  const [p1LocA, p1LocB] = splitLocation(project1.location);
  const [p2LocA, p2LocB] = splitLocation(project2.location);
  const [p3LocA, p3LocB] = splitLocation(project3.location);

  return (
    <section id="projects" className="section small-bottom-section" style={{ scrollMarginTop: "100px" }}>
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="title-wrap center">
          <div
            data-w-id="ca6bb18d-f01f-24bb-57eb-ce5a23f6a317"
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
            {recentProjects.label}
          </div>
          <h2
            data-w-id="263783fd-36ce-9d9d-fb8c-a1d40f455fef"
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
            {recentProjects.heading}
          </h2>
        </div>
        <div
          data-delay="4000"
          data-animation="outin"
          className="projects-slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          style={{ opacity: "0" }}
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-w-id="7ceaecc5-6d23-1e3c-460f-e6ae1e6e650d"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
        >
          <div className="projects-mask w-slider-mask">
            <div className="w-slide">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-card">
                      <div className="project-card-left-wrap">
                        <div
                          data-w-id="d8df464f-c4e1-ab94-0cc6-718af6894ef2"
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
                          className="project-title-wrap"
                        >
                          <a href="#contact" className="project-link">
                            {project1.title}
                          </a>
                          <div className="project-card-details-wrap">
                            <p>{p1LocA}</p>
                            <div className="dot"></div>
                            <p>{p1LocB}</p>
                          </div>
                        </div>
                        <div
                          data-w-id="37d137c6-640a-8a60-928b-93e452537cec"
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
                          <p>{project1.description}</p>
                        </div>
                      </div>
                      <div
                        data-w-id="cf876ab3-0558-52bf-d8e6-e5b192c06683"
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
                        className="project-images-wrap"
                      >
                        <img
                          loading="lazy"
                          src={project1.images[0].src}
                          alt={project1.images[0].alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                          className="project-vertical-image"
                        />
                        <img
                          loading="lazy"
                          src={project1.images[1].src}
                          alt={project1.images[1].alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                          className="project-horizontal-image"
                        />
                      </div>
                      <div
                        data-w-id="be616441-1d68-9c79-783f-5306e054c398"
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
                        className="project-button"
                      >
                        <a
                          data-w-id="6cc3df2f-41c6-d574-494a-7a27f09ca261"
                          href="#contact"
                          className="link-button primary-color w-inline-block"
                        >
                          <div className="button-spot-big secondary-primary-color">
                            <div className="button-spot-small secondary-primary-color"></div>
                          </div>
                          <div className="button-text primary-color">
                            {project1.ctaLabel}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-card">
                      <div className="project-card-left-wrap">
                        <div className="project-title-wrap">
                          <a href="#contact" className="project-link">
                            {project2.title}
                          </a>
                          <div className="project-card-details-wrap">
                            <p>{p2LocA}</p>
                            <div className="dot"></div>
                            <p>{p2LocB}</p>
                          </div>
                        </div>
                        <div>
                          <p>{project2.description}</p>
                        </div>
                      </div>
                      <div className="project-images-wrap">
                        <img
                          loading="lazy"
                          src={project2.images[0].src}
                          alt={project2.images[0].alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                          className="project-vertical-image"
                        />
                        <img
                          loading="lazy"
                          src={project2.images[1].src}
                          alt={project2.images[1].alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                          className="project-horizontal-image"
                        />
                      </div>
                      <div className="project-button">
                        <a
                          data-w-id="6cc3df2f-41c6-d574-494a-7a27f09ca261"
                          href="#contact"
                          className="link-button primary-color w-inline-block"
                        >
                          <div className="button-spot-big secondary-primary-color">
                            <div className="button-spot-small secondary-primary-color"></div>
                          </div>
                          <div className="button-text primary-color">
                            {project2.ctaLabel}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slide">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="project-card">
                      <div className="project-card-left-wrap">
                        <div className="project-title-wrap">
                          <a href="#contact" className="project-link">
                            {project3.title}
                          </a>
                          <div className="project-card-details-wrap">
                            <p>{p3LocA}</p>
                            <div className="dot"></div>
                            <p>{p3LocB}</p>
                          </div>
                        </div>
                        <div>
                          <p>{project3.description}</p>
                        </div>
                      </div>
                      <div className="project-images-wrap">
                        <img
                          src={project3.images[0].src}
                          loading="lazy"
                          alt={project3.images[0].alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                          className="project-vertical-image"
                        />
                        <img
                          src={project3.images[1].src}
                          loading="lazy"
                          alt={project3.images[1].alt}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"
                          className="project-horizontal-image"
                        />
                      </div>
                      <div className="project-button">
                        <a
                          data-w-id="6cc3df2f-41c6-d574-494a-7a27f09ca261"
                          href="#contact"
                          className="link-button primary-color w-inline-block"
                        >
                          <div className="button-spot-big secondary-primary-color">
                            <div className="button-spot-small secondary-primary-color"></div>
                          </div>
                          <div className="button-text primary-color">
                            {project3.ctaLabel}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="7ceaecc5-6d23-1e3c-460f-e6ae1e6e6511"
            className="projects-left-arrow w-slider-arrow-left"
          >
            <img
              loading="lazy"
              src="/images/6942d2f38561f80e049406f3_dark%20left%20arrow.svg"
              alt="icon"
              className="arrow"
            />
          </div>
          <div
            data-w-id="7ceaecc5-6d23-1e3c-460f-e6ae1e6e6513"
            className="projects-right-arrow w-slider-arrow-right"
          >
            <img
              loading="lazy"
              src="/images/6942d2f3e3ac4011a3ae3cf9_dark%20arrow.svg"
              alt="icon"
              className="arrow"
            />
          </div>
          <div className="hidden-nav w-slider-nav w-round w-num"></div>
        </div>
        <div className="large-text-wrapper">
          <div
            data-w-id="4edb3fb4-181b-81f1-1858-b47402ac52b4"
            style={{ opacity: "0" }}
            className="large-text"
          >
            {recentProjects.bigStat.value}
          </div>
          <div
            data-w-id="251b39a8-3725-c106-141f-dce0aad090be"
            style={{ opacity: "0" }}
            className="large-text-bottom-wrap"
          >
            <div>
              <a
                data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                href="#contact"
                className="primary-button w-inline-block"
              >
                <div className="button-spot-big">
                  <div className="button-spot-small"></div>
                </div>
                <div className="button-text">{recentProjects.bigStat.ctaLabel}</div>
              </a>
            </div>
            <div
              id="w-node-e3a4de3a-f45d-7d16-a386-214082411457-d3af5718"
              className="large-text bottom"
            >
              {recentProjects.bigStat.caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
