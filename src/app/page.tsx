import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Dr. Sabina Razdolsky | Evidence-Based Women's Health Education",
  "Trusted, evidence-based obstetrics and gynecology education. Explore topics on pregnancy, prenatal care, gynecologic conditions, and women's health by Dr. Sabina Razdolsky.",
  "/"
);

const topicHubs = [
  {
    title: "Obstetrics",
    description: "Prenatal care, high-risk pregnancy, and pregnancy-related conditions explained clearly.",
    href: "/obstetrics",
    color: "bg-teal-50 border-teal-100",
  },
  {
    title: "Gynecology",
    description: "Routine screenings, common conditions like endometriosis and PCOS, and when to see a gynecologist.",
    href: "/gynecology",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Pregnancy",
    description: "Trimester-by-trimester guidance, prenatal testing, nutrition, and warning signs to watch for.",
    href: "/pregnancy",
    color: "bg-cyan-50 border-cyan-100",
  },
  {
    title: "Preconception",
    description: "Planning for pregnancy: health checkups, tests, nutrition, and lifestyle changes before conceiving.",
    href: "/preconception",
    color: "bg-sky-50 border-sky-100",
  },
  {
    title: "Labor & Delivery",
    description: "Signs of labor, stages of delivery, pain management options, and what to expect at the hospital.",
    href: "/labor-and-delivery",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Postpartum",
    description: "Physical recovery, emotional health, breastfeeding basics, and when to call your doctor.",
    href: "/postpartum",
    color: "bg-violet-50 border-violet-100",
  },
  {
    title: "Procedures & Tests",
    description: "Pap smears, hysteroscopy, ultrasound types, and common gynecologic surgeries explained.",
    href: "/procedures",
    color: "bg-rose-50 border-rose-100",
  },
];

export default function HomePage() {
  const schema = generateMedicalWebPageSchema({
    title: "Evidence-Based Women's Health Education",
    description: "Trusted OB/GYN education by Dr. Sabina Razdolsky.",
    url: "/",
    lastReviewed: "2026-03-13",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F766E] to-teal-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Evidence-Based Women&apos;s Health Education
            </h1>
            <p className="mt-4 text-lg text-teal-100 leading-relaxed sm:text-xl max-w-2xl">
              Reliable obstetrics and gynecology information, written by a physician
              and grounded in current medical evidence. No jargon, no sales pitches
              &mdash; just clear, trustworthy health education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/articles"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0F766E] shadow-sm transition-colors hover:bg-teal-50"
              >
                Read latest articles
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* About Dr. Razdolsky brief */}
        <section className="py-12 sm:py-16">
          <Breadcrumbs items={[]} />
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                About Dr. Sabina Razdolsky
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Dr. Sabina Razdolsky is an OB/GYN resident physician at Mayanei
                Hayeshua Medical Center. She graduated Summa Cum Laude from
                Semmelweis University in Budapest and completed her internship at
                Ichilov (Tel Aviv Sourasky Medical Center). With co-authored
                research published in peer-reviewed journals, she is passionate
                about making evidence-based women&apos;s health information accessible
                to everyone.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F766E] hover:text-teal-800 transition-colors"
              >
                Read full bio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="/images/dr-sabina-razdolsky.jpg"
                  alt="Dr. Sabina Razdolsky, OB/GYN Resident Physician"
                  className="h-full w-full object-cover object-top"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Topic Hubs */}
        <section className="py-12 sm:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Explore Topics
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto">
              Browse our educational content organized by topic. Each section
              provides clear, evidence-based information reviewed by a physician.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topicHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className={`group rounded-xl border p-5 transition-shadow hover:shadow-md ${hub.color}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0F766E] transition-colors">
                  {hub.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {hub.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F766E]">
                  Explore topic
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Research Preview */}
        <section className="py-12 sm:py-16">
          <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Peer-Reviewed Research
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  Dr. Razdolsky has co-authored three published research papers
                  indexed on PubMed, covering topics such as preterm labor
                  induction, appendectomy during pregnancy, and expectant
                  management of prelabor rupture of membranes.
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
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="text-3xl font-bold text-[#0F766E]">3</p>
                  <p className="text-sm text-teal-700">Published papers</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-3xl font-bold text-gray-900">PubMed</p>
                  <p className="text-sm text-gray-500">Indexed research</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Disclaimer */}
        <section className="py-8 mb-8">
          <div className="rounded-xl border border-amber-100 bg-amber-50/50 px-5 py-4">
            <h2 className="text-sm font-semibold text-amber-800">
              Educational Purpose Only
            </h2>
            <p className="mt-1 text-sm text-amber-700 leading-relaxed">
              The content on this website is provided for informational and
              educational purposes only. It is not intended to be a substitute
              for professional medical advice, diagnosis, or treatment. Always
              seek the guidance of a qualified healthcare provider with any
              questions you may have regarding a medical condition.{" "}
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
