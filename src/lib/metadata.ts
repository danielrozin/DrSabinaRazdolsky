import type { Metadata } from "next";

export const SITE_NAME = "Dr. Sabina Razdolsky | Obstetrics & Gynecology";
export const BASE_URL = "https://drsabinarazdolsky.com";

/** @deprecated Use BASE_URL instead */
export const SITE_URL = BASE_URL;

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website"
): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "article:author": "Dr. Sabina Razdolsky",
    },
  };
}
