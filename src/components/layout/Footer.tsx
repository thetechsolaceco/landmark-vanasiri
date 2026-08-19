import { siteConfig } from "@/lib/site-config";

type FooterNavLink = { label: string; href: string };
type FooterContent = {
  heading: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  copyright: string;
};

const content: FooterContent = {
  heading: "Stay Updated on Landmark Vanasiri",
  submitLabel: "Submit Request",
  successMessage: "Thank you! Your submission has been received!",
  errorMessage: "Oops! Something went wrong while submitting the form.",
  copyright: "© Landmark Vanasiri. All Rights Reserved.",
};

const navLinks: FooterNavLink[] = [
  { label: "Home", href: "#home" },
  { label: "about vanasiri", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const address = siteConfig.address;
  const phone = siteConfig.phone;
  const socials = siteConfig.socials;
  const [home, about, projects, services, testimonials, blog, contact] = navLinks;

  return (
    <div id="contact" className="form-footer" style={{ scrollMarginTop: "100px" }}>
      <div className="base-container">
        <div className="footer-top-wrap">
          <div className="footer-title-wrap">
            <h2
              data-w-id="d7b7b9ea-dacd-d701-16de-492485155cb5"
              className="text-white"
            >
              {content.heading}
            </h2>
          </div>
          <div className="footer-contacts-wrap">
            <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cb8">
              <a
                href={address.googleMapsUrl}
                target="_blank"
                className="footer-contact-link"
              >
                {address.full}
              </a>
            </div>
            <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cbb">
              <span className="footer-contact-link">{phone}</span>
            </div>
          </div>
        </div>
        <div className="footer-middle-wrap">
          <div className="footer-links-wrap">
            <div className="links-column">
              <a
                href={home.href}
                aria-current="page"
                className="footer-link w--current"
              >
                {home.label}
              </a>
              <a href={about.href} className="footer-link">
                {about.label}
              </a>
              <a href={projects.href} className="footer-link">
                {projects.label}
              </a>
              <a href={services.href} className="footer-link">
                {services.label}
              </a>
              <a href={testimonials.href} className="footer-link">
                {testimonials.label}
              </a>
              <a href={blog.href} className="footer-link">
                {blog.label}
              </a>
              <a href={contact.href} className="footer-link">
                {contact.label}
              </a>
            </div>
            <div className="links-column">
              <a href={socials.facebook} target="_blank" className="footer-link">
                FACEBOOK
              </a>
              <a href={socials.instagram} target="_blank" className="footer-link">
                INSTAGRAM
              </a>
              <a href={socials.linkedin} target="_blank" className="footer-link">
                Linkedin
              </a>
            </div>
          </div>
          <div
            id="w-node-d7b7b9ea-dacd-d701-16de-492485155cd5-85155cb1"
            data-w-id="d7b7b9ea-dacd-d701-16de-492485155cd5"
            className="form-block w-form"
          >
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form"
              data-wf-page-id="693e9d1043906400d3af5718"
              data-wf-element-id="d7b7b9ea-dacd-d701-16de-492485155cd6"
            >
              <div className="text-fields-line">
                <input
                  className="text-field w-input"
                  maxLength={256}
                  name="First-Name"
                  data-name="First Name"
                  placeholder="First name"
                  type="text"
                  id="First-Name"
                  required
                />
                <input
                  className="text-field w-input"
                  maxLength={256}
                  name="Last-Name"
                  data-name="Last Name"
                  placeholder="Last name"
                  type="text"
                  id="Last-Name"
                  required
                />
              </div>
              <div className="text-fields-line">
                <input
                  className="text-field w-input"
                  maxLength={256}
                  name="Phone"
                  data-name="Phone"
                  placeholder="Phone"
                  type="tel"
                  id="Phone"
                  required
                />
                <input
                  className="text-field w-input"
                  maxLength={256}
                  name="Email"
                  data-name="Email"
                  placeholder="email"
                  type="email"
                  id="Email"
                  required
                />
              </div>
              <textarea
                required
                placeholder="your message"
                maxLength={5000}
                id="message"
                name="message"
                data-name="message"
                className="text-field message-field w-input"
              ></textarea>
              <input
                type="submit"
                data-wait="Please wait..."
                className="primary-button footer-submit w-button"
                value={content.submitLabel}
              />
            </form>
            <div className="succes-message text-white w-form-done">
              <div>{content.successMessage}</div>
            </div>
            <div className="error-message text-white w-form-fail">
              <div>{content.errorMessage}</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrap">
          <div className="footer-rights-text">{content.copyright}</div>
        </div>
      </div>
    </div>
  );
}
