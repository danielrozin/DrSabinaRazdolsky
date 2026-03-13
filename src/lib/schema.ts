import type { Article } from "./articles";
import type { Publication } from "./publications";

const BASE_URL = "https://drsabinarazdolsky.com";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Sabina Razdolsky",
    givenName: "Sabina",
    familyName: "Razdolsky",
    honorificPrefix: "Dr.",
    jobTitle: "Obstetrician & Gynecologist",
    description:
      "Dr. Sabina Razdolsky is an OB/GYN physician. She graduated Summa Cum Laude from Semmelweis University in 2022, completed her internship at Ichilov (Tel Aviv Sourasky Medical Center), and is a resident in Obstetrics and Gynecology at Mayanei Hayeshua Medical Center.",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Semmelweis University",
        description: "Graduated Summa Cum Laude, 2022",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Budapest",
          addressCountry: "Hungary",
        },
      },
    ],
    workLocation: [
      {
        "@type": "Hospital",
        name: "Mayanei Hayeshua Medical Center",
        department: "Obstetrics and Gynecology",
      },
    ],
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Obstetrics and Gynecology",
    },
    url: BASE_URL,
    sameAs: [],
    knowsAbout: [
      "Obstetrics",
      "Gynecology",
      "Prenatal Care",
      "Labor and Delivery",
      "High-Risk Pregnancy",
      "Women's Health",
      "Evidence-Based Medicine",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Sabina Razdolsky | Obstetrics & Gynecology",
    url: BASE_URL,
    description:
      "Evidence-based obstetrics and gynecology information by Dr. Sabina Razdolsky, OB/GYN physician.",
    publisher: generatePersonSchema(),
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.metaDescription,
    url: `${BASE_URL}/articles/${article.slug}`,
    dateModified: article.lastReviewed,
    lastReviewed: article.lastReviewed,
    author: generatePersonSchema(),
    publisher: {
      "@type": "Organization",
      name: "Dr. Sabina Razdolsky | Obstetrics & Gynecology",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/articles/${article.slug}`,
    },
    about: {
      "@type": "MedicalCondition",
      name: article.category,
    },
    keywords: article.tags.join(", "),
    timeRequired: `PT${article.readingTime}M`,
    inLanguage: "en",
  };
}

export function generateMedicalWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  lastReviewed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.title,
    description: page.description,
    url: `${BASE_URL}${page.url}`,
    lastReviewed: page.lastReviewed ?? new Date().toISOString().split("T")[0],
    author: generatePersonSchema(),
    publisher: {
      "@type": "Organization",
      name: "Dr. Sabina Razdolsky | Obstetrics & Gynecology",
      url: BASE_URL,
    },
    inLanguage: "en",
    medicalAudience: {
      "@type": "PatientAudience",
      audienceType: "Patient",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { label: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generatePublicationListSchema(publications: Publication[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Research Publications by Dr. Sabina Razdolsky",
    numberOfItems: publications.filter((p) => !p.isUpcoming).length,
    itemListElement: publications
      .filter((p) => !p.isUpcoming)
      .map((pub, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ScholarlyArticle",
          headline: pub.title,
          author: pub.authors.split(", ").map((name) => ({
            "@type": "Person",
            name,
          })),
          datePublished: String(pub.year),
          isPartOf: {
            "@type": "Periodical",
            name: pub.journal,
          },
          identifier: [
            ...(pub.doi
              ? [
                  {
                    "@type": "PropertyValue",
                    propertyID: "DOI",
                    value: pub.doi,
                  },
                ]
              : []),
            ...(pub.pmid
              ? [
                  {
                    "@type": "PropertyValue",
                    propertyID: "PMID",
                    value: pub.pmid,
                  },
                ]
              : []),
          ],
          url: pub.pubmedUrl || undefined,
          description: pub.summary,
          keywords: pub.tags.join(", "),
        },
      })),
  };
}
