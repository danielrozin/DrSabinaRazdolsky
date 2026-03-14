import type { Article } from "./articles";
import type { Publication } from "./publications";

const BASE_URL = "https://dr-razdolsky.com";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Sabina Razdolsky",
    givenName: "Sabina",
    familyName: "Razdolsky",
    honorificPrefix: "Dr.",
    honorificSuffix: "M.D.",
    jobTitle: "OB/GYN Resident Physician",
    description:
      "Dr. Sabina Razdolsky is an OB/GYN physician. She graduated Summa Cum Laude from Semmelweis University in 2022, completed her internship at Ichilov (Tel Aviv Sourasky Medical Center), and is a resident in Obstetrics and Gynecology at Mayanei Hayeshua Medical Center.",
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/dr-sabina-razdolsky.jpg`,
      caption: "Dr. Sabina Razdolsky, OB/GYN Physician",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Semmelweis University",
        url: "https://semmelweis.hu/english/",
        description:
          "One of Europe's oldest and most prestigious medical universities, founded in 1769.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Budapest",
          addressCountry: "Hungary",
        },
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor of Medicine (M.D.)",
        description:
          "Master of Science in Medicine / Doctor of Medicine, Summa Cum Laude",
        educationalLevel: "EQF Level 7 / HUQF Level 7",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Semmelweis University",
        },
        dateCreated: "2022-06-25",
        image: `${BASE_URL}/images/degree-certificate.jpg`,
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Obstetrician-Gynecologist",
      occupationalCategory: "29-1218.00",
      description:
        "Physicians who specialize in obstetrics and gynecology, providing medical and surgical care to women.",
      educationRequirements: "Doctor of Medicine (M.D.)",
      occupationLocation: {
        "@type": "Country",
        name: "Israel",
      },
    },
    workLocation: [
      {
        "@type": "Hospital",
        name: "Mayanei Hayeshua Medical Center",
        department: {
          "@type": "MedicalClinic",
          name: "Department of Obstetrics and Gynecology",
          medicalSpecialty: "Obstetrics and Gynecology",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "Israel",
        },
      },
    ],
    medicalSpecialty: [
      {
        "@type": "MedicalSpecialty",
        name: "Obstetrics",
      },
      {
        "@type": "MedicalSpecialty",
        name: "Gynecology",
      },
    ],
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
      "Cesarean Section",
      "Preterm Labor",
      "Prenatal Screening",
    ],
    knowsLanguage: ["English", "Hebrew", "Russian"],
  };
}

export function generateCredentialSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "Doctor of Medicine (M.D.)",
    description:
      "Master of Science in Medicine / Doctor of Medicine degree from Semmelweis University. 12-semester integrated medical program. Graduated Summa Cum Laude.",
    educationalLevel: "EQF Level 7",
    competencyRequired:
      "Completion of six-year integrated master's degree programme in medicine",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Semmelweis University",
      url: "https://semmelweis.hu/english/",
      foundingDate: "1769",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressCountry: "Hungary",
      },
    },
    dateCreated: "2022-06-25",
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/degree-certificate.jpg`,
      caption:
        "Doctor of Medicine degree certificate, Semmelweis University, awarded to Sabina Razdolsky, Summa Cum Laude, June 25, 2022",
      width: 800,
      height: 1100,
    },
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
