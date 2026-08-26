import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Privacy Policy for Landmark Vanasiri farmland and leisure living project in Hosakote, Bengaluru Rural. Details on data collection, protection, usage, cookies, and your rights under Indian DPDP Act 2023.",
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Privacy Policy for Landmark Vanasiri farmland and leisure living project in Hosakote, Bengaluru Rural.",
    type: "website",
  },
};

const tableOfContents = [
  { id: "introduction", num: "01", title: "Introduction" },
  { id: "scope", num: "02", title: "Scope of This Policy" },
  { id: "data-collected", num: "03", title: "Personal Data We Collect" },
  { id: "data-usage", num: "04", title: "How We Use Your Personal Data" },
  { id: "cookies", num: "05", title: "Cookies & Tracking Technologies" },
  { id: "data-disclosure", num: "06", title: "Disclosure of Personal Data" },
  { id: "data-retention", num: "07", title: "Data Retention" },
  { id: "data-security", num: "08", title: "Data Security" },
  { id: "your-rights", num: "09", title: "Your Rights" },
  { id: "marketing-opt-out", num: "10", title: "Marketing & Opt Out" },
  { id: "children", num: "11", title: "Children's Privacy" },
  { id: "policy-changes", num: "12", title: "Changes to This Policy" },
  { id: "grievance-officer", num: "13", title: "Grievance Officer & Contact" },
  { id: "governing-law", num: "14", title: "Governing Law & Jurisdiction" },
];

export default function PrivacyPolicyPage() {
  const address = siteConfig.address;
  const phone = siteConfig.phone;
  const email = siteConfig.email;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Privacy Policy - ${siteConfig.name}`,
    description:
      "Official privacy policy for Landmark Vanasiri farmland and leisure living project in Hosakote, Bengaluru.",
    url: `${siteConfig.url}/privacy-policy`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "Customer Support / Grievance Officer",
        email: email,
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Hindi"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealOnScroll />
      <Navbar light />

      {/* Hero Section */}
      <section className="section policy-hero-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="policy-page-banner">
            <a href="/" className="blog-back-link">
              ← Back to Home
            </a>
            <div className="policy-badge">
              <span>Legal &amp; Privacy Compliance</span>
            </div>
            <h1 className="policy-page-heading">Privacy Policy</h1>
            <p className="policy-intro">
              This Privacy Policy explains how Landmark Vanasiri and Landmark Nest collect, use, store, disclose,
              and protect your personal data in accordance with applicable Indian laws, including the Digital
              Personal Data Protection Act, 2023.
            </p>
            <div className="policy-meta-bar">
              <div className="policy-meta-item">
                <span>Effective Date:</span>
                <strong>March 1, 2025</strong>
              </div>
              <div className="policy-meta-dot"></div>
              <div className="policy-meta-item">
                <span>Last Updated:</span>
                <strong>March 1, 2025</strong>
              </div>
              <div className="policy-meta-dot"></div>
              <div className="policy-meta-item">
                <span>Jurisdiction:</span>
                <strong>Bengaluru, Karnataka, India</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar & Sections */}
      <section className="section policy-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="policy-layout">
            {/* Sidebar Table of Contents */}
            <aside className="policy-sidebar">
              <div className="policy-toc-card">
                <div className="policy-toc-title">Table of Contents</div>
                <nav className="policy-toc-nav" aria-label="Privacy Policy Sections">
                  {tableOfContents.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="policy-toc-link">
                      <span className="policy-toc-index">{item.num}</span>
                      <span>{item.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="policy-sidebar-cta">
                <div className="policy-sidebar-cta-title">Have Questions?</div>
                <p className="policy-sidebar-cta-text">
                  Our Grievance Officer and advisory team are available to assist you with any privacy-related inquiries.
                </p>
                <a href="#grievance-officer" className="policy-sidebar-cta-btn">
                  Contact Grievance Officer
                </a>
              </div>
            </aside>

            {/* Policy Content Sections */}
            <main className="policy-content-wrapper">
              {/* 1. Introduction */}
              <article id="introduction" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">01</div>
                  <h2 className="policy-card-title">1. Introduction</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    This Privacy Policy explains how <strong>Landmark Nest</strong>, the developer of the{" "}
                    <strong>Landmark Vanasiri</strong> project (referred to as &quot;we&quot;, &quot;us&quot; or &quot;our&quot;),
                    collects, uses, stores, discloses and protects your personal data when you visit{" "}
                    <strong>vanasiri.landmarknest.com</strong> (the &quot;Website&quot;), submit an enquiry form,
                    respond to our advertisements, or otherwise interact with us.
                  </p>
                  <p>
                    Landmark Vanasiri is a farmland and leisure living project located at{" "}
                    <strong>{address.full}</strong>.
                  </p>
                  <div className="policy-callout-notice">
                    <strong>Consent Notice:</strong> By using the Website or submitting your details to us, you confirm
                    that you have read and understood this Privacy Policy and consent to the processing of your personal
                    data as described here. If you do not agree, please do not use the Website or submit your information.
                  </div>
                </div>
              </article>

              {/* 2. Scope of This Policy */}
              <article id="scope" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">02</div>
                  <h2 className="policy-card-title">2. Scope of This Policy</h2>
                </div>
                <div className="policy-card-body">
                  <p>This Policy applies to:</p>
                  <ul className="policy-bullets">
                    <li>The Website <strong>vanasiri.landmarknest.com</strong> and any subdomains operated by us.</li>
                    <li>Enquiry forms, callback requests and site visit booking requests submitted through the Website.</li>
                    <li>Lead forms submitted through third party advertising platforms including Meta (Facebook and Instagram) and Google.</li>
                    <li>Communications with our sales team by phone, WhatsApp, SMS or email.</li>
                    <li>Visits to our project site or marketing office, where visitor details are recorded.</li>
                  </ul>
                  <p>
                    This Policy does not apply to third party websites that you may reach through links on our Website.
                    Those websites operate under their own privacy policies and we are not responsible for their practices.
                  </p>
                </div>
              </article>

              {/* 3. Personal Data We Collect */}
              <article id="data-collected" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">03</div>
                  <h2 className="policy-card-title">3. Personal Data We Collect</h2>
                </div>
                <div className="policy-card-body">
                  <h3 className="policy-subsection-title">3.1 Information You Provide Directly</h3>
                  <ul className="policy-bullets">
                    <li>Full name</li>
                    <li>Mobile number and alternate contact number</li>
                    <li>Email address</li>
                    <li>City or locality of residence</li>
                    <li>Budget range, purchase timeline and intended use of the property</li>
                    <li>Preferred site visit date and time</li>
                    <li>Any other information you voluntarily include in an enquiry message</li>
                  </ul>

                  <h3 className="policy-subsection-title">3.2 Information Collected Automatically</h3>
                  <ul className="policy-bullets">
                    <li>IP address and approximate location derived from it</li>
                    <li>Browser type, operating system and device type</li>
                    <li>Pages viewed, time spent on pages and referring URL</li>
                    <li>Cookie identifiers and similar tracking identifiers</li>
                  </ul>

                  <h3 className="policy-subsection-title">3.3 Information From Third Parties</h3>
                  <ul className="policy-bullets">
                    <li>Lead details received from advertising platforms such as Meta and Google when you submit an instant lead form.</li>
                    <li>Referral details shared by existing customers, channel partners or authorised property consultants.</li>
                  </ul>

                  <div className="policy-callout-notice">
                    <strong>Sensitive Information Exclusion:</strong> We do not knowingly collect financial account
                    details, government identification numbers, biometric data or health data through the Website.
                    Documents required for a property transaction, such as identity proof, are collected separately at
                    the booking stage under a distinct agreement and consent process.
                  </div>
                </div>
              </article>

              {/* 4. How We Use Your Personal Data */}
              <article id="data-usage" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">04</div>
                  <h2 className="policy-card-title">4. How We Use Your Personal Data</h2>
                </div>
                <div className="policy-card-body">
                  <p>We use your personal data for the following purposes:</p>
                  <ul className="policy-bullets">
                    <li>To respond to your enquiry and share project details, plot layouts, pricing and availability.</li>
                    <li>To contact you by phone, WhatsApp, SMS or email regarding your enquiry.</li>
                    <li>To schedule and coordinate site visits.</li>
                    <li>To process bookings, allotments and related documentation.</li>
                    <li>To send project updates, construction progress and offers, where you have consented to receive them.</li>
                    <li>To measure and improve the performance of our advertising campaigns.</li>
                    <li>To improve the Website, its content and user experience.</li>
                    <li>To comply with applicable law, including record keeping obligations under real estate and tax legislation.</li>
                    <li>To establish, exercise or defend legal claims.</li>
                  </ul>
                  <p>
                    We rely on your consent for marketing communications and on the necessity of performing a contract
                    or complying with a legal obligation for the remaining purposes.
                  </p>
                </div>
              </article>

              {/* 5. Cookies and Tracking Technologies */}
              <article id="cookies" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">05</div>
                  <h2 className="policy-card-title">5. Cookies and Tracking Technologies</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    The Website uses cookies and similar technologies to operate correctly, remember your preferences,
                    analyse traffic and measure advertising performance. These may include:
                  </p>
                  <ul className="policy-bullets">
                    <li><strong>Essential cookies:</strong> Required for the Website to function properly.</li>
                    <li>
                      <strong>Analytics cookies:</strong> Such as those used by Google Analytics, which help us understand
                      how visitors interact with the Website.
                    </li>
                    <li>
                      <strong>Advertising and remarketing cookies:</strong> Such as the Meta Pixel and Google Ads tags, which
                      allow us to show relevant advertisements to you on other platforms.
                    </li>
                  </ul>
                  <p>
                    You can control or delete cookies through your browser settings. Disabling certain cookies may affect
                    the functionality of the Website. You may also manage advertising preferences through the settings
                    offered directly by Meta and Google.
                  </p>
                </div>
              </article>

              {/* 6. Disclosure of Personal Data */}
              <article id="data-disclosure" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">06</div>
                  <h2 className="policy-card-title">6. Disclosure of Personal Data</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    <strong>We do not sell your personal data.</strong> We may share it with:
                  </p>
                  <ul className="policy-bullets">
                    <li>Our internal sales, marketing and customer relationship teams.</li>
                    <li>Authorised channel partners and property consultants engaged to assist with enquiries and site visits, subject to confidentiality obligations.</li>
                    <li>Service providers who host our Website, manage our CRM, send communications, or provide analytics and advertising services.</li>
                    <li>Professional advisers such as legal counsel, auditors and accountants where reasonably required.</li>
                    <li>Banks and financial institutions, only where you specifically request assistance with a home loan or land loan.</li>
                    <li>Government authorities, regulators, courts or law enforcement agencies where disclosure is required by law or by a valid legal process.</li>
                    <li>A successor entity in the event of a merger, acquisition, restructuring or transfer of business assets.</li>
                  </ul>
                </div>
              </article>

              {/* 7. Data Retention */}
              <article id="data-retention" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">07</div>
                  <h2 className="policy-card-title">7. Data Retention</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    We retain your personal data only for as long as necessary for the purposes described in this Policy:
                  </p>
                  <ul className="policy-bullets">
                    <li>Enquiry and lead data is retained for the duration of the sales cycle and for a reasonable period thereafter for follow up purposes.</li>
                    <li>Transaction and booking records are retained for the period required under applicable tax, real estate and corporate law.</li>
                    <li>Website analytics data is retained in line with the retention settings of the relevant analytics platform.</li>
                  </ul>
                  <p>
                    Where retention is no longer necessary and no legal obligation requires us to keep the data, we delete or anonymise it.
                  </p>
                </div>
              </article>

              {/* 8. Data Security */}
              <article id="data-security" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">08</div>
                  <h2 className="policy-card-title">8. Data Security</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    We implement reasonable security practices and procedures to protect personal data against
                    unauthorised access, disclosure, alteration and destruction. These include access controls,
                    restricted internal access on a need to know basis, and use of reputable service providers.
                  </p>
                  <p>
                    No method of transmission over the internet or method of electronic storage is completely secure.
                    While we take reasonable steps to protect your data, we cannot guarantee absolute security.
                    You are responsible for keeping any credentials or communications shared with you confidential.
                  </p>
                </div>
              </article>

              {/* 9. Your Rights */}
              <article id="your-rights" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">09</div>
                  <h2 className="policy-card-title">9. Your Rights</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    Subject to applicable law, including the <strong>Digital Personal Data Protection Act, 2023</strong>,
                    you have the following rights regarding your personal data:
                  </p>
                  
                  <div className="policy-rights-grid">
                    <div className="policy-right-item">
                      <span className="policy-right-icon">📋</span>
                      <div>
                        <div className="policy-right-name">Right of Access</div>
                        <div className="policy-right-desc">Request access to a summary of personal data we hold about you.</div>
                      </div>
                    </div>
                    <div className="policy-right-item">
                      <span className="policy-right-icon">✏️</span>
                      <div>
                        <div className="policy-right-name">Right of Correction</div>
                        <div className="policy-right-desc">Request correction of inaccurate, incomplete, or outdated data.</div>
                      </div>
                    </div>
                    <div className="policy-right-item">
                      <span className="policy-right-icon">🗑️</span>
                      <div>
                        <div className="policy-right-name">Right of Erasure</div>
                        <div className="policy-right-desc">Request deletion of data no longer required for legal or business needs.</div>
                      </div>
                    </div>
                    <div className="policy-right-item">
                      <span className="policy-right-icon">🛑</span>
                      <div>
                        <div className="policy-right-name">Withdraw Consent</div>
                        <div className="policy-right-desc">Withdraw consent for promotional and marketing communications anytime.</div>
                      </div>
                    </div>
                    <div className="policy-right-item">
                      <span className="policy-right-icon">👥</span>
                      <div>
                        <div className="policy-right-name">Right of Nomination</div>
                        <div className="policy-right-desc">Nominate an individual to exercise your rights in the event of death or incapacity.</div>
                      </div>
                    </div>
                    <div className="policy-right-item">
                      <span className="policy-right-icon">⚖️</span>
                      <div>
                        <div className="policy-right-name">Register a Grievance</div>
                        <div className="policy-right-desc">Register a formal grievance with our designated Grievance Officer.</div>
                      </div>
                    </div>
                  </div>

                  <p style={{ marginTop: "12px" }}>
                    To exercise any of these rights, contact us using the details in Section 13. We may need to verify
                    your identity before acting on your request. We will respond within the timelines prescribed by applicable law.
                  </p>
                </div>
              </article>

              {/* 10. Marketing Communications and Opt Out */}
              <article id="marketing-opt-out" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">10</div>
                  <h2 className="policy-card-title">10. Marketing Communications and Opt Out</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    If you have submitted your contact details, you may receive calls, WhatsApp messages, SMS or emails
                    from us or our authorised representatives regarding Landmark Vanasiri.
                  </p>
                  <p>You may opt out at any time by:</p>
                  <ul className="policy-bullets">
                    <li>Replying <strong>STOP</strong> to a WhatsApp or SMS message.</li>
                    <li>Using the unsubscribe link in any marketing email.</li>
                    <li>Writing to us at <strong>{email}</strong> or through the contact details in Section 13.</li>
                  </ul>
                  <p>
                    Even after you opt out of marketing communications, we may continue to contact you regarding an
                    ongoing property transaction or where required by law.
                  </p>
                </div>
              </article>

              {/* 11. Children */}
              <article id="children" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">11</div>
                  <h2 className="policy-card-title">11. Children</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    The Website is not directed at children. We do not knowingly collect personal data of any individual
                    below the age of eighteen (18) years. If we become aware that we have collected such data without
                    verifiable consent from a parent or lawful guardian, we will delete it promptly.
                  </p>
                </div>
              </article>

              {/* 12. Changes to This Policy */}
              <article id="policy-changes" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">12</div>
                  <h2 className="policy-card-title">12. Changes to This Policy</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology
                    or legal requirements. The revised version will be posted on this page with an updated effective date.
                  </p>
                  <p>
                    We encourage you to review this page periodically. Continued use of the Website after changes are
                    posted constitutes acceptance of the revised Policy.
                  </p>
                </div>
              </article>

              {/* 13. Grievance Officer and Contact Details */}
              <article id="grievance-officer" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">13</div>
                  <h2 className="policy-card-title">13. Grievance Officer and Contact Details</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    In accordance with the Information Technology Act, 2000, the rules made thereunder, and the Digital
                    Personal Data Protection Act, 2023, the contact details of our Grievance Officer are set out below:
                  </p>

                  <div className="policy-contact-card">
                    <div className="policy-contact-grid">
                      <div className="policy-contact-field">
                        <span className="policy-contact-field-label">Officer Title</span>
                        <span className="policy-contact-field-val">Grievance Officer</span>
                      </div>
                      <div className="policy-contact-field">
                        <span className="policy-contact-field-label">Designation</span>
                        <span className="policy-contact-field-val">Grievance Officer &amp; Data Redressal</span>
                      </div>
                      <div className="policy-contact-field">
                        <span className="policy-contact-field-label">Entity Name</span>
                        <span className="policy-contact-field-val">Landmark Nest (Landmark Vanasiri)</span>
                      </div>
                      <div className="policy-contact-field">
                        <span className="policy-contact-field-label">Working Hours</span>
                        <span className="policy-contact-field-val">Monday to Saturday, 9:30 AM – 6:30 PM IST</span>
                      </div>
                      <div className="policy-contact-field">
                        <span className="policy-contact-field-label">Email Address</span>
                        <span className="policy-contact-field-val">
                          <a href={`mailto:${email}`}>{email}</a>
                        </span>
                      </div>
                      <div className="policy-contact-field">
                        <span className="policy-contact-field-label">Contact Phone</span>
                        <span className="policy-contact-field-val">
                          <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                        </span>
                      </div>
                      <div className="policy-contact-field full-span">
                        <span className="policy-contact-field-label">Project &amp; Registered Location</span>
                        <span className="policy-contact-field-val">
                          <a href={address.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            {address.full}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p style={{ marginTop: "8px" }}>
                    We will acknowledge your complaint and endeavour to resolve it within the timelines prescribed under
                    applicable law.
                  </p>
                </div>
              </article>

              {/* 14. Governing Law and Jurisdiction */}
              <article id="governing-law" className="policy-article-card reveal">
                <div className="policy-card-header">
                  <div className="policy-card-num">14</div>
                  <h2 className="policy-card-title">14. Governing Law and Jurisdiction</h2>
                </div>
                <div className="policy-card-body">
                  <p>
                    This Privacy Policy is governed by and construed in accordance with the laws of India. Any dispute
                    arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the
                    courts at <strong>Bengaluru, Karnataka, India</strong>.
                  </p>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
