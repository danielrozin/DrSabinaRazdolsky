import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Preconception Health",
  "Planning for pregnancy: preconception health checkups, recommended tests and screenings, nutrition, lifestyle changes, and when to start planning. Evidence-based guidance.",
  "/preconception"
);

const faqs = [
  {
    question: "How far in advance should I start preparing for pregnancy?",
    answer:
      "Ideally, start at least 3 months before trying to conceive. This gives time for folic acid supplementation to reach protective levels, completing vaccinations, optimizing chronic conditions, and making lifestyle changes. Some women benefit from starting even earlier, especially if managing health conditions.",
  },
  {
    question: "What vitamins should I take before getting pregnant?",
    answer:
      "The most important supplement is folic acid (at least 400 mcg daily), which helps prevent neural tube defects. A comprehensive prenatal vitamin that includes iron, vitamin D, calcium, DHA, and iodine is recommended. Start taking prenatal vitamins before you conceive.",
  },
  {
    question: "Do I need to stop birth control before trying to conceive?",
    answer:
      "Most hormonal contraceptives can be stopped when you are ready to try. Fertility typically returns quickly after stopping pills, patches, or rings. After injectable contraceptives (like Depo-Provera), it may take several months for ovulation to resume. Discuss timing with your doctor.",
  },
  {
    question: "What tests should I get before pregnancy?",
    answer:
      "Common preconception tests include complete blood count, blood type and Rh factor, rubella and varicella immunity, STI screening, thyroid function, and genetic carrier screening. Your doctor may recommend additional tests based on your personal and family medical history.",
  },
  {
    question: "Does my partner need a preconception checkup too?",
    answer:
      "Yes. Your partner's health matters too. Male partners should address any chronic health conditions, review medications, limit alcohol, avoid tobacco and recreational drugs, and consider genetic carrier screening. Sperm health can be affected by lifestyle factors, medications, and environmental exposures.",
  },
  {
    question: "How does age affect fertility and pregnancy planning?",
    answer:
      "Fertility gradually declines with age, more significantly after 35 for women and 40 for men. Age-related risks include longer time to conceive, higher miscarriage rates, and increased chance of chromosomal abnormalities. If you are over 35 and have not conceived after 6 months of trying, consult a specialist.",
  },
];

export default function PreconceptionPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Preconception Health",
    description: "Planning for pregnancy: evidence-based preconception guidance.",
    url: "/preconception",
    lastReviewed: "2026-02-15",
  });
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Preconception", href: "/preconception" }]} />
        <LastReviewed date="2026-02-15" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Preconception Health: Preparing for Pregnancy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          The best time to start taking care of a pregnancy is before it begins.
          Preconception health focuses on the steps you can take before
          conceiving to improve your chances of a healthy pregnancy and baby.
          From nutrition and supplements to medical screenings and lifestyle
          changes, this guide covers what the evidence says about getting ready
          for pregnancy.
        </p>

        <KeyTakeaways
          items={[
            "Start folic acid supplementation at least 1-3 months before trying to conceive.",
            "A preconception checkup helps identify and manage health factors that could affect pregnancy.",
            "Genetic carrier screening is available and can inform family planning decisions.",
            "Both partners' health contributes to pregnancy outcomes.",
            "Managing chronic conditions before pregnancy leads to better outcomes for mother and baby.",
          ]}
        />

        <div className="content-section">
          <h2>Preconception Health Checkup</h2>
          <p>
            A preconception visit with your OB/GYN or primary care provider is
            the first step in pregnancy planning. During this visit, your doctor
            will:
          </p>
          <ul>
            <li>Review your medical history and any chronic conditions</li>
            <li>Assess current medications for pregnancy safety</li>
            <li>Review your vaccination history and update immunizations if needed</li>
            <li>Discuss family medical history and genetic screening options</li>
            <li>Evaluate your menstrual cycle and reproductive health</li>
            <li>Provide guidance on nutrition, supplements, and lifestyle</li>
          </ul>

          <h2>Tests and Screenings Before Pregnancy</h2>
          <p>
            Your healthcare provider may recommend several tests to establish a
            health baseline and identify any issues to address before conceiving:
          </p>
          <ul>
            <li><strong>Complete blood count (CBC):</strong> Checks for anemia and other blood-related conditions.</li>
            <li><strong>Blood type and Rh factor:</strong> Important for identifying potential Rh incompatibility.</li>
            <li><strong>Rubella and varicella immunity:</strong> Confirms protection against infections harmful during pregnancy.</li>
            <li><strong>STI screening:</strong> Tests for infections that could affect pregnancy or be transmitted to the baby.</li>
            <li><strong>Thyroid function tests:</strong> Thyroid imbalances can affect fertility and pregnancy outcomes.</li>
            <li><strong>Genetic carrier screening:</strong> Tests for conditions like cystic fibrosis, sickle cell disease, or Tay-Sachs based on family background.</li>
            <li><strong>Pap smear:</strong> If due for cervical cancer screening.</li>
          </ul>

          <h2>Nutrition and Lifestyle</h2>
          <p>
            What you eat and how you live in the months before conception can
            meaningfully affect your pregnancy. Key recommendations include:
          </p>
          <ul>
            <li><strong>Folic acid:</strong> Take at least 400 mcg daily (some women may need more). This is the single most important supplement for preventing neural tube defects.</li>
            <li><strong>Balanced diet:</strong> Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods and excess sugar.</li>
            <li><strong>Healthy weight:</strong> Both underweight and overweight status can affect fertility and pregnancy outcomes. Work with your provider if weight management is a concern.</li>
            <li><strong>Avoid harmful substances:</strong> Stop smoking, limit alcohol, and avoid recreational drugs. Discuss any prescription medications with your doctor.</li>
            <li><strong>Exercise:</strong> Regular moderate physical activity supports overall health and can be continued into pregnancy.</li>
            <li><strong>Reduce caffeine:</strong> Moderate caffeine intake (under 200 mg/day, roughly one 12-oz coffee) is generally considered safe when trying to conceive.</li>
          </ul>

          <h2>When to Start Planning</h2>
          <p>
            There is no one-size-fits-all answer, but starting preconception
            care at least 3 months before trying to conceive is a good general
            guideline. This timeline allows for:
          </p>
          <ul>
            <li>Folic acid to reach protective levels in your system</li>
            <li>Completing any needed vaccinations (some require waiting periods before conception)</li>
            <li>Optimizing chronic conditions like diabetes or hypertension</li>
            <li>Establishing healthy habits</li>
            <li>Completing recommended screenings and lab work</li>
          </ul>
          <p>
            If you have complex health conditions or are over 35, consider
            starting the planning process even earlier and consulting with a
            specialist if needed.
          </p>
        </div>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related links */}
        <section className="mt-14 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Related Pages</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/pregnancy" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Pregnancy</Link>
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Obstetrics</Link>
            <Link href="/gynecology" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Gynecology</Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
