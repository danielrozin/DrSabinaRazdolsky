import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import LastReviewed from "@/components/LastReviewed";

export const metadata = generatePageMetadata(
  "Editorial Policy",
  "Our editorial standards: how content is created, reviewed for medical accuracy, and kept up to date. Evidence-based methodology and author credentials.",
  "/editorial-policy"
);

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Editorial Policy", href: "/editorial-policy" }]} />
      <LastReviewed date="2026-03-01" />

      <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
        Editorial Policy
      </h1>
      <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
        We are committed to providing accurate, trustworthy, and evidence-based
        women&apos;s health information. This page outlines how our content is
        created, reviewed, and maintained to ensure the highest standards of
        medical accuracy.
      </p>

      <div className="content-section">
        <h2>Content Review Process</h2>
        <p>
          Every piece of content published on this website goes through a
          structured review process:
        </p>
        <ul>
          <li><strong>Research phase:</strong> Topics are researched using peer-reviewed medical literature, clinical guidelines from professional organizations (such as ACOG, WHO, and NICE), and established medical textbooks.</li>
          <li><strong>Writing phase:</strong> Content is drafted with attention to medical accuracy, readability, and accessibility. Complex medical concepts are explained in plain language alongside their clinical terminology.</li>
          <li><strong>Medical review:</strong> All content is reviewed by Dr. Sabina Razdolsky to verify medical accuracy, appropriateness, and alignment with current evidence-based practice.</li>
          <li><strong>Publication:</strong> Reviewed content is published with a &ldquo;last reviewed&rdquo; date so readers can assess currency.</li>
        </ul>

        <h2>Evidence-Based Standards</h2>
        <p>
          Our content adheres to evidence-based medicine principles. We
          prioritize information from:
        </p>
        <ul>
          <li>Systematic reviews and meta-analyses</li>
          <li>Randomized controlled trials</li>
          <li>Clinical practice guidelines from recognized professional bodies</li>
          <li>Peer-reviewed journal articles indexed on PubMed</li>
          <li>Established medical textbooks and reference materials</li>
        </ul>
        <p>
          When evidence is limited or conflicting, we clearly state this and
          present the available perspectives. We do not present opinion as fact,
          and we avoid promoting unproven treatments or therapies.
        </p>

        <h2>Medical Accuracy Commitment</h2>
        <p>
          Medical knowledge evolves continuously. We are committed to:
        </p>
        <ul>
          <li>Presenting information that reflects current medical understanding</li>
          <li>Clearly distinguishing between established facts and areas of ongoing research</li>
          <li>Avoiding overstatement of benefits or understatement of risks</li>
          <li>Using precise medical language alongside accessible explanations</li>
          <li>Correcting errors promptly when identified</li>
        </ul>

        <h2>Update Schedule</h2>
        <p>
          We review and update our content on a regular basis to ensure it
          remains current:
        </p>
        <ul>
          <li>All articles include a &ldquo;last reviewed&rdquo; date</li>
          <li>Content is reviewed at least every 12 months</li>
          <li>Updates are made sooner when significant new evidence, guideline changes, or corrections are needed</li>
          <li>Major updates are noted within the content where relevant</li>
        </ul>

        <h2>Author Credentials</h2>
        <p>
          Content on this website is written and reviewed by Dr. Sabina
          Razdolsky. Her qualifications include:
        </p>
        <ul>
          <li>Master of Science in Medicine / Doctor of Medicine from Semmelweis University, Budapest (Summa Cum Laude, 2022)</li>
          <li>Internship completed at Ichilov (Tel Aviv Sourasky Medical Center)</li>
          <li>Currently an OB/GYN resident at Mayanei Hayeshua Medical Center</li>
          <li>Co-author of three PubMed-indexed research publications</li>
        </ul>
        <p>
          <Link href="/about">Read more about Dr. Razdolsky</Link>
        </p>

        <h2>How Content Is Created and Reviewed</h2>
        <p>
          Our content creation follows these principles:
        </p>
        <ul>
          <li><strong>Answer-first approach:</strong> Articles begin with clear, concise answers to the main question before expanding into detail.</li>
          <li><strong>Plain language first:</strong> Medical terms are explained in accessible language before using clinical terminology.</li>
          <li><strong>Structured format:</strong> Content uses clear headings, bullet points, and organized sections for easy navigation.</li>
          <li><strong>Patient-centered perspective:</strong> Information is presented from the patient&apos;s point of view, addressing common questions and concerns.</li>
          <li><strong>No commercial bias:</strong> Content is not influenced by commercial interests. We do not accept sponsored content or product endorsements.</li>
        </ul>

        <h2>Sources and References Methodology</h2>
        <p>
          We base our content on the following types of sources, prioritized by
          quality of evidence:
        </p>
        <ul>
          <li>Practice guidelines from ACOG (American College of Obstetricians and Gynecologists)</li>
          <li>WHO (World Health Organization) clinical recommendations</li>
          <li>Cochrane systematic reviews</li>
          <li>Peer-reviewed articles from major obstetrics and gynecology journals</li>
          <li>UpToDate and other evidence-based clinical decision support tools</li>
        </ul>
        <p>
          While individual articles may not include formal reference lists,
          our content is informed by these sources and we are happy to provide
          specific references upon request.
        </p>
      </div>

      {/* Link to disclaimer */}
      <section className="mt-10 mb-4">
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
          <p className="text-sm text-gray-600">
            For information about the limitations of our content and the
            educational nature of this website, please read our{" "}
            <Link href="/disclaimer" className="text-[#0F766E] underline hover:text-teal-800">
              Medical Disclaimer
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
