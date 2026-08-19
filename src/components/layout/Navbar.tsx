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
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [home, about, projects, services, testimonials, blog, contact] = navLinks;

  return (
    <div
      data-animation="over-left"
      className="navbar-fixed w-nav"
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
              src={navbar.logo}
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
              <a
                href={home.href}
                aria-current="page"
                className="nav-link w-nav-link w--current"
              >
                {home.label}
              </a>
              <a href={about.href} className="nav-link w-nav-link">
                {about.label}
              </a>
              <a href={projects.href} className="nav-link w-nav-link">
                {projects.label}
              </a>
              <a href={services.href} className="nav-link w-nav-link">
                {services.label}
              </a>
              <a href={testimonials.href} className="nav-link w-nav-link">
                {testimonials.label}
              </a>
              <a href={blog.href} className="nav-link w-nav-link">
                {blog.label}
              </a>
              <a href={contact.href} className="nav-link w-nav-link">
                {contact.label}
              </a>
              <div className="nav-button-tablet">
                <a
                  data-w-id="d8b176ee-32c4-ac10-5c41-2635c78207bf"
                  href="#contact"
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
              href="#contact"
              className="link-button w-inline-block"
            >
              <div className="button-spot-big secondary">
                <div className="button-spot-small secondary"></div>
              </div>
              <div className="button-text">{navbar.secondaryCtaLabel}</div>
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
