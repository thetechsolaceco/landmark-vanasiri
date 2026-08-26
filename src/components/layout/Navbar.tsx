type NavLink = { label: string; href: string };
type NavbarContent = {
  logo: string;
  logoAlt: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

const navbar: NavbarContent = {
  logo: "/images/vanasiri-logo.svg",
  logoAlt: "Landmark Vanasiri",
  primaryCtaLabel: "Book a Site Visit",
  secondaryCtaLabel: "Request a Quote",
};

const navLinks: NavLink[] = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT US", href: "/#about" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "SERVICES", href: "/#services" },
  { label: "TESTIMONIALS", href: "/#testimonials" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/#contact" },
];

// The header overlays a dark hero by default (transparent bg, white text);
// the bundled Webflow interactions runtime (webflow.*.js in layout.tsx)
// already fades it to a dark background on scroll via its own inline style,
// so we leave that path untouched. Pages whose content is light throughout
// (no dark hero to fade into, e.g. blog) pass `light` to render a static
// solid-white/dark-text header instead — its CSS uses !important so the
// Webflow runtime's inline style can't silently re-darken it on scroll.
export default function Navbar({ light = false }: { light?: boolean }) {
  const [home, about, projects, services, testimonials, blog, contact] = navLinks;
  const solid = light;
  const navLinkClass = (extra = "") => `nav-link w-nav-link${solid ? " dark" : ""}${extra}`;

  return (
    <div
      data-animation="over-left"
      className={`navbar-fixed w-nav${solid ? " white-bg" : ""}`}
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="7b40ee2c-2ee2-900e-5405-95ed25872c05"
      role="banner"
      data-duration="400"
      data-doc-height="1"
    >
      <div className="base-container w-container">
        <div className="nav-menu-wrapper">
          <a
            href="/"
            aria-current="page"
            className="brand w-nav-brand w--current"
          >
            <img
              loading="lazy"
              height="30"
              alt={navbar.logoAlt}
              src={solid ? "/images/vanasiri-logo-dark.svg" : navbar.logo}
              className="brand-logo"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="tablet-menu">
              <a
                href="/"
                aria-current="page"
                className="brand-tablet w-nav-brand w--current"
              >
                <img
                  loading="lazy"
                  height="30"
                  alt={navbar.logoAlt}
                  src="/images/vanasiri-logo-dark.svg"
                  className="brand-logo"
                />
              </a>
              <div className="close-menu-button w-nav-button">
                <img
                  loading="lazy"
                  src="/images/68d12485a38c00f033aa5a7d_close-btn.svg"
                  alt=""
                  className="nav-close-icon"
                />
              </div>
            </div>
            <div className="menu-wrap">
              <a href={home.href} aria-current="page" className={navLinkClass(" w--current")}>
                {home.label}
              </a>
              <a href={about.href} className={navLinkClass()}>
                {about.label}
              </a>
              <a href={projects.href} className={navLinkClass()}>
                {projects.label}
              </a>
              <a href={services.href} className={navLinkClass()}>
                {services.label}
              </a>
              <a href={testimonials.href} className={navLinkClass()}>
                {testimonials.label}
              </a>
              <a href={blog.href} className={navLinkClass()}>
                {blog.label}
              </a>
              <a href={contact.href} className={navLinkClass()}>
                {contact.label}
              </a>
              <div className="nav-button-tablet">
                <a
                  data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                  href="/#contact"
                  className="primary-button w-inline-block"
                >
                  <div className="button-spot-big">
                    <div className="button-spot-small"></div>
                  </div>
                  <div className="button-text">{navbar.primaryCtaLabel}</div>
                </a>
              </div>
            </div>
          </nav>
          <div className="nav-button-wrap">
            <a
              data-w-id="e849a25e-291d-a702-7a0a-1e19f7905b30"
              href="/#contact"
              className="link-button w-inline-block"
            >
              <div className="button-spot-big secondary">
                <div className={`button-spot-small secondary${solid ? " dark" : ""}`}></div>
              </div>
              <div className={`button-text${solid ? " dark" : ""}`}>{navbar.secondaryCtaLabel}</div>
            </a>
          </div>
          <div className="menu-button w-nav-button">
            <img
              loading="lazy"
              height="16"
              alt=""
              src="/images/68d12485a38c00f033aa5a7c_menu-btn.svg"
              className="image-burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
