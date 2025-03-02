import Script from "next/script"

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://greenseedfinancial.com/#organization",
        name: "Green Seed Financial LLC",
        url: "https://greenseedfinancial.com",
        logo: {
          "@type": "ImageObject",
          url: "https://greenseedfinancial.com/logo.png",
          width: 112,
          height: 112,
        },
        description:
          "Empowering global agriculture through financial solutions. We facilitate export/import of U.S. agricultural products and help foreign buyers obtain letters of credit.",
        sameAs: [
          "https://facebook.com/greenseedfinancial",
          "https://twitter.com/greenseedfinancial",
          "https://linkedin.com/company/greenseedfinancial",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://greenseedfinancial.com/#website",
        url: "https://greenseedfinancial.com",
        name: "Green Seed Financial LLC",
        publisher: {
          "@id": "https://greenseedfinancial.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://greenseedfinancial.com/#webpage",
        url: "https://greenseedfinancial.com",
        name: "Green Seed Financial LLC | Agricultural Export/Import Financial Solutions",
        isPartOf: {
          "@id": "https://greenseedfinancial.com/#website",
        },
        about: {
          "@id": "https://greenseedfinancial.com/#organization",
        },
        description:
          "Empowering global agriculture through financial solutions. We facilitate export/import of U.S. agricultural products and help foreign buyers obtain letters of credit.",
      },
      {
        "@type": "Service",
        name: "U.S. Export Assistance",
        description:
          "We help U.S. agricultural producers expand their markets globally through tailored financial solutions.",
        provider: {
          "@id": "https://greenseedfinancial.com/#organization",
        },
        url: "https://greenseedfinancial.com/services/export-assistance",
      },
      {
        "@type": "Service",
        name: "Letters of Credit",
        description:
          "Secure international transactions with our specialized letter of credit services for agricultural trade.",
        provider: {
          "@id": "https://greenseedfinancial.com/#organization",
        },
        url: "https://greenseedfinancial.com/services/letters-of-credit",
      },
      {
        "@type": "Service",
        name: "International Import",
        description:
          "Facilitating smooth import of U.S. agricultural products for foreign buyers with comprehensive financial support.",
        provider: {
          "@id": "https://greenseedfinancial.com/#organization",
        },
        url: "https://greenseedfinancial.com/services/international-import",
      },
    ],
  }

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

