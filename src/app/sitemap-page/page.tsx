import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Dr. Sabina Razdolsky",
  description:
    "Complete sitemap of Dr. Sabina Razdolsky's obstetrics and gynecology educational website.",
};

const sections = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About Dr. Razdolsky", href: "/about" },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "Obstetrics", href: "/obstetrics" },
      { label: "Gynecology", href: "/gynecology" },
      { label: "Preconception", href: "/preconception" },
      { label: "Pregnancy", href: "/pregnancy" },
      { label: "Labor & Delivery", href: "/labor-and-delivery" },
      { label: "Postpartum", href: "/postpartum" },
      { label: "Procedures", href: "/procedures" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Research & Publications", href: "/research" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Medical Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Sitemap
      </h1>
      <p className="mt-2 text-gray-500">
        A complete list of all pages on this website.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#0F766E]">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-[#0F766E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-400">
          For the machine-readable XML sitemap, visit{" "}
          <a
            href="/sitemap.xml"
            className="text-[#0F766E] underline hover:text-[#0D6660]"
          >
            /sitemap.xml
          </a>
          . For LLM-readable site information, visit{" "}
          <a
            href="/llms.txt"
            className="text-[#0F766E] underline hover:text-[#0D6660]"
          >
            /llms.txt
          </a>
          .
        </p>
      </div>
    </main>
  );
}
