import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import LastReviewed from "@/components/LastReviewed";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/lib/publications";
import { generatePublicationListSchema, generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Research & Publications",
  "Peer-reviewed research publications co-authored by Dr. Sabina Razdolsky. PubMed-indexed studies on preterm labor, pregnancy complications, and obstetric outcomes.",
  "/research"
);

export default function ResearchPage() {
  const publishedPubs = publications.filter((p) => !p.isUpcoming);
  const upcomingPubs = publications.filter((p) => p.isUpcoming);

  const pubListSchema = generatePublicationListSchema(publications);
  const pageSchema = generateMedicalWebPageSchema({
    title: "Research & Publications",
    description: "Peer-reviewed research by Dr. Sabina Razdolsky.",
    url: "/research",
    lastReviewed: "2026-03-13",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pubListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Research", href: "/research" }]} />
        <LastReviewed date="2026-03-13" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Research & Publications
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Dr. Sabina Razdolsky has co-authored peer-reviewed research focused on
          obstetric outcomes and evidence-based management of pregnancy
          complications. All published papers are indexed on PubMed and available
          through their respective journals.
        </p>

        {/* Published Research */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Published Research
          </h2>
          <div className="mt-6 space-y-5">
            {publishedPubs.map((pub) => (
              <PublicationCard key={pub.pmid} publication={pub} />
            ))}
          </div>
        </section>

        {/* Upcoming Research */}
        {upcomingPubs.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">
              Upcoming Research
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              The following studies are currently in progress or under review.
              Details will be updated upon publication.
            </p>
            <div className="mt-6 space-y-5">
              {upcomingPubs.map((pub) => (
                <PublicationCard key={pub.title} publication={pub} />
              ))}
            </div>
          </section>
        )}

        {/* Research Interests */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Research Interests & Methodology
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Dr. Razdolsky&apos;s research interests center on maternal and
            neonatal outcomes, with a particular focus on preterm birth
            prevention, labor induction strategies, and surgical decision-making
            during pregnancy. Her work is primarily based on retrospective cohort
            studies conducted at academic medical centers, analyzed using
            established statistical methodologies.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            All research follows institutional ethical guidelines and undergoes
            rigorous peer review before publication in indexed journals.
          </p>
        </section>

        {/* PubMed Profile */}
        <section className="mt-14">
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Find on PubMed
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              View Dr. Razdolsky&apos;s full publication record on PubMed, the
              U.S. National Library of Medicine&apos;s database of biomedical
              literature.
            </p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=Sabina+Razdolsky"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0F766E] hover:text-teal-800 transition-colors"
            >
              Search PubMed for Sabina Razdolsky
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Related links */}
        <section className="mt-14 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Related Pages</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/about" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">
              About Dr. Razdolsky
            </Link>
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">
              Obstetrics
            </Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">
              Articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
