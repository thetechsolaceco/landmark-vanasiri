import { siteConfig } from "@/lib/site-config";

// No aggregateRating/review here: no verified Vanasiri reviews exist yet.
// Add them once real buyer/site-visitor testimonials are collected.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description:
    "Landmark Vanasiri offers architectural farmland plots for sale in Bavapura Village, Sulibele Hobli, Hosakote Taluk, Bengaluru Rural District, 40 km from Bengaluru.",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    addressCountry: siteConfig.address.addressCountry,
  },
  sameAs: [
    siteConfig.socials.facebook,
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
  ],
};

// FAQPage schema, verbatim from the Vanasiri content doc's Home page FAQ block.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Landmark Vanasiri farmland close to Bengaluru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Landmark Vanasiri is located in Bavapura Village, Sulibele Hobli, Hosakote Taluk, just 40 km from Bengaluru city center.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build a farmhouse on a Landmark Vanasiri plot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The plots are designed to support custom homes, weekend farmhouses and eco friendly accommodations alongside farming use.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Hosakote a strong location for farmland investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hosakote is emerging as a major logistics and industrial hub in Bengaluru Rural, with large scale warehousing projects driving demand and land values across the surrounding region.",
      },
    },
    {
      "@type": "Question",
      name: "Can non-agriculturists buy farmland in Karnataka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. Since the Karnataka Land Reforms (Amendment) Act, 2020, any Indian citizen can purchase agricultural land in the state regardless of agricultural background or profession. Confirm current requirements with your legal advisor before purchase.",
      },
    },
  ],
};

export default function OrganizationSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
