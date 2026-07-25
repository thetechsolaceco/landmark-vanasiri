import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <div className="form-footer">
      <div className="base-container">
        <div className="footer-top-wrap">
          <div className="footer-title-wrap">
            <h2
              data-w-id="d7b7b9ea-dacd-d701-16de-492485155cb5"
              className="text-white"
            >
              Stay Updated on Landmark Vanasiri
            </h2>
          </div>
          <div className="footer-contacts-wrap">
            <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cb8">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                className="footer-contact-link"
              >
                {siteConfig.address.full}
              </a>
            </div>
            <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cbb">
              <a href={siteConfig.phoneHref} className="footer-contact-link">
                {siteConfig.phone}
              </a>
            </div>
            <div data-w-id="d7b7b9ea-dacd-d701-16de-492485155cbe">
              <a href="#" className="footer-contact-link">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-middle-wrap">
          <div className="footer-links-wrap">
            <div className="links-column">
              <a
                href="/"
                aria-current="page"
                className="footer-link w--current"
              >
                Home
              </a>
              <a href="/about-us" className="footer-link">
                about vanasiri
              </a>
              <a href="/projects" className="footer-link">
                projects
              </a>
              <a href="/services" className="footer-link">
                Services
              </a>
              <a href="/faq" className="footer-link">
                FAQ
              </a>
            </div>
            <div className="links-column">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                className="footer-link"
              >
                FACEBOOK
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                className="footer-link"
              >
                INSTAGRAM
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                className="footer-link"
              >
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
                value="Submit Request"
              />
            </form>
            <div className="succes-message text-white w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message text-white w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrap">
          <div className="footer-rights-text">
            © Landmark Vanasiri. All Rights Reserved.{" "}
            <a
              href="https://pody-wcopilot.webflow.io/templates/licensing"
              className="footer-rights-bottom-link"
            >
              Licensing
            </a>
          </div>
          <div className="footer-rights-wrap">
            <div className="footer-rights-text">
              <a
                href="https://wcopilot.com/templates"
                target="_blank"
                className="footer-rights-bottom-link"
              >
                Template
              </a>{" "}
              by{" "}
              <a
                href="https://wcopilot.com/"
                target="_blank"
                className="footer-rights-bottom-link brand-rights"
              >
                wCopilot
              </a>
            </div>
            <div className="footer-rights-text">
              Powered by{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="footer-rights-bottom-link"
              >
                Next.js
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
