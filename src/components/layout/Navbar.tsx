export default function Navbar() {
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
              alt="Logo"
              src="/images/6941841ce2a9a7a93acd339f_Pody%20Logo%20White.svg"
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
                  alt="logo"
                  src="/images/693e9d1043906400d3af5754_ebc3d115bf3871e2591aac9e23647967_LOGO.svg"
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
                href="#home"
                aria-current="page"
                className="nav-link w-nav-link w--current"
              >
                HOME
              </a>
              <a href="#about" className="nav-link w-nav-link">
                ABOUT US
              </a>
              <a href="#projects" className="nav-link w-nav-link">
                PROJECTS
              </a>
              <a href="#services" className="nav-link w-nav-link">
                SERVICES
              </a>
              <a href="#testimonials" className="nav-link w-nav-link">
                TESTIMONIALS
              </a>
              <a href="#contact" className="nav-link w-nav-link">
                CONTACT US
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
                  <div className="button-text">Book a Site Visit</div>
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
              <div className="button-text">Request a Quote</div>
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
