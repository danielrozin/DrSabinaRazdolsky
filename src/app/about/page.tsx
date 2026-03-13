import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import LastReviewed from "@/components/LastReviewed";
import { generatePersonSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "About Dr. Sabina Razdolsky",
  "Learn about Dr. Sabina Razdolsky, OB/GYN resident physician. Graduated Summa Cum Laude from Semmelweis University, trained at Ichilov Medical Center, and published researcher in obstetrics.",
  "/about"
);

const timeline = [
  {
    year: "2016 - 2022",
    title: "Semmelweis University, Budapest",
    description:
      "Six-year English-language medical program. Graduated June 2022 with a Master of Science in Medicine / Doctor of Medicine degree, Summa Cum Laude.",
  },
  {
    year: "2022 - 2023",
    title: "Internship at Ichilov (Tel Aviv Sourasky Medical Center)",
    description:
      "Completed medical internship at one of Israel's leading academic hospitals, gaining broad clinical experience across specialties.",
  },
  {
    year: "2023 - Present",
    title: "OB/GYN Residency at Mayanei Hayeshua Medical Center",
    description:
      "Currently training as an Obstetrics and Gynecology resident, managing deliveries, gynecologic procedures, and contributing to clinical research.",
  },
];

export default function AboutPage() {
  const personSchema = generatePersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        <LastReviewed date="2026-03-13" />

        {/* Header */}
        <div className="mt-6 grid gap-8 lg:grid-cols-3 items-start">
          {/* Photo */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="/images/dr-sabina-razdolsky.jpg"
                alt="Dr. Sabina Razdolsky, OB/GYN Resident Physician"
                className="h-full w-full object-cover object-top"
                width={400}
                height={533}
              />
            </div>
          </div>

          {/* Intro */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Dr. Sabina Razdolsky
            </h1>
            <p className="mt-1 text-lg text-[#0F766E] font-medium">
              OB/GYN Resident Physician
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Dr. Sabina Razdolsky is an Obstetrics and Gynecology resident
              physician at Mayanei Hayeshua Medical Center. Born on December 21,
              1994, in Holon, Israel, she pursued her medical education at
              Semmelweis University in Budapest, Hungary, completing the rigorous
              six-year English-language program and graduating in June 2022 with
              a Master of Science in Medicine / Doctor of Medicine degree, Summa
              Cum Laude.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              After graduation, she completed her medical internship at Ichilov
              (Tel Aviv Sourasky Medical Center), one of Israel&apos;s premier
              academic hospitals. She then began her residency in Obstetrics and
              Gynecology at Mayanei Hayeshua Medical Center, where she currently
              practices.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Sabina is married and a mother to her daughter, Lia. Beyond her
              clinical work, she is deeply passionate about women&apos;s health
              education and making evidence-based medical information accessible
              to patients and families.
            </p>
          </div>
        </div>

        {/* Education & Training Timeline */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Education & Training
          </h2>
          <div className="mt-6 space-y-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative pl-6 border-l-2 border-teal-200"
              >
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#0F766E]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                  {item.year}
                </p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Research Interests
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Dr. Razdolsky&apos;s research focuses on obstetric outcomes and
            evidence-based management of pregnancy complications. Her published
            work addresses topics including:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Preterm labor induction methods and their impact on cesarean delivery rates",
              "Surgical interventions during pregnancy and preterm delivery risk",
              "Expectant management of prelabor rupture of membranes in GBS carriers",
              "Emergency cerclage placement and pregnancy outcomes",
              "Comparative effectiveness of cervical shortening treatments",
            ].map((interest) => (
              <li
                key={interest}
                className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
              >
                <svg className="mt-1 h-4 w-4 shrink-0 text-[#0F766E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Publications Summary */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Publications
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Dr. Razdolsky has co-authored three published research papers
            indexed on PubMed, with additional studies currently in progress.
            Her published work appears in the European Journal of Obstetrics &
            Gynecology and Reproductive Biology, the American Journal of
            Surgery, and the International Journal of Gynecology & Obstetrics.
          </p>
          <Link
            href="/research"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F766E] hover:text-teal-800 transition-colors"
          >
            View all publications
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

        {/* Professional Philosophy */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Professional Philosophy
          </h2>
          <div className="mt-4 rounded-xl bg-teal-50/50 border border-teal-100 p-6">
            <p className="text-base leading-relaxed text-gray-700 italic">
              &ldquo;I believe every woman deserves access to clear, accurate,
              and compassionate health information. Too often, medical
              knowledge is locked behind jargon or overshadowed by
              misinformation. My goal is to bridge that gap &mdash; to translate
              evidence-based medicine into language that empowers women to make
              informed decisions about their health and their pregnancies.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium text-[#0F766E]">
              &mdash; Dr. Sabina Razdolsky
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-14 mb-4">
          <div className="rounded-xl border border-amber-100 bg-amber-50/50 px-5 py-4">
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Note:</strong> Dr. Razdolsky is currently a resident
              physician in training. The information provided on this website is
              for educational purposes only and does not constitute medical
              advice or establish a doctor-patient relationship.{" "}
              <Link href="/disclaimer" className="underline hover:text-amber-900">
                Read full disclaimer
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
