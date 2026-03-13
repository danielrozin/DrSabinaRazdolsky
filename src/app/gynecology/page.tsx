import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Gynecology",
  "Evidence-based gynecology information: routine screenings, common conditions like PCOS and endometriosis, gynecologic procedures, and when to see a gynecologist.",
  "/gynecology"
);

const faqs = [
  {
    question: "How often should I see a gynecologist?",
    answer:
      "Most guidelines recommend an annual well-woman visit starting at age 21 (or earlier if needed). Pap smear frequency depends on age and history: every 3 years from ages 21-29, and every 3-5 years from 30-65 when combined with HPV testing. Your gynecologist can recommend a schedule tailored to your health.",
  },
  {
    question: "What is a Pap smear and why is it important?",
    answer:
      "A Pap smear (or Pap test) is a screening procedure that collects cells from the cervix to detect precancerous or cancerous changes. Combined with HPV testing, it is one of the most effective tools for preventing cervical cancer through early detection.",
  },
  {
    question: "What are the most common symptoms of endometriosis?",
    answer:
      "Endometriosis commonly causes painful periods (dysmenorrhea), pelvic pain between periods, pain during intercourse, and sometimes difficulty conceiving. Symptoms can range from mild to severely debilitating and do not always correlate with the extent of disease.",
  },
  {
    question: "Is irregular bleeding always a sign of something serious?",
    answer:
      "Not always. Irregular bleeding can result from hormonal fluctuations, stress, changes in birth control, perimenopause, or benign conditions like polyps. However, persistent irregular bleeding should be evaluated by a gynecologist to rule out conditions that may need treatment.",
  },
  {
    question: "What is PCOS and how is it diagnosed?",
    answer:
      "Polycystic ovary syndrome (PCOS) is a hormonal condition characterized by irregular periods, elevated androgen levels, and polycystic-appearing ovaries on ultrasound. Diagnosis typically requires at least two of these three criteria. PCOS affects about 8-13% of women of reproductive age.",
  },
  {
    question: "When should I see a gynecologist outside of my annual visit?",
    answer:
      "See a gynecologist if you experience abnormal bleeding, severe pelvic pain, unusual vaginal discharge, missed periods (without pregnancy), painful intercourse, or if you have concerns about fertility. Do not wait for your annual visit if something feels wrong.",
  },
];

export default function GynecologyPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Gynecology",
    description: "Evidence-based gynecology education.",
    url: "/gynecology",
    lastReviewed: "2026-03-01",
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
        <Breadcrumbs items={[{ label: "Gynecology", href: "/gynecology" }]} />
        <LastReviewed date="2026-03-01" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Gynecology: Women&apos;s Reproductive Health
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Gynecology is the medical specialty focused on the health of the
          female reproductive system, including the uterus, ovaries, fallopian
          tubes, cervix, and vagina. Regular gynecologic care plays a key role
          in preventive health, early detection of conditions, and maintaining
          overall well-being throughout every stage of life.
        </p>

        <KeyTakeaways
          items={[
            "Annual well-woman visits are important for preventive screening and early detection.",
            "Cervical cancer screening (Pap smear and HPV testing) is one of the most effective cancer prevention tools available.",
            "Common conditions like PCOS, endometriosis, and fibroids are manageable with proper diagnosis and treatment.",
            "Many gynecologic symptoms have benign causes, but evaluation is important to rule out serious conditions.",
            "Do not delay seeing a gynecologist if you notice changes in your menstrual cycle or pelvic health.",
          ]}
        />

        <div className="content-section">
          <h2>What Is Gynecology?</h2>
          <p>
            Gynecology encompasses the diagnosis, treatment, and prevention of
            diseases related to the female reproductive tract. Unlike obstetrics,
            which focuses on pregnancy and childbirth, gynecology covers
            reproductive health outside of pregnancy &mdash; including menstrual
            health, contraception, infections, benign growths, cancer screening,
            and menopause management.
          </p>

          <h2>Routine Screening and Preventive Care</h2>
          <p>
            Preventive gynecologic care helps catch problems early, often before
            symptoms appear. Key screenings include:
          </p>
          <ul>
            <li><strong>Pap smear:</strong> Screens for cervical cancer and precancerous changes. Recommended starting at age 21, with frequency based on age and results. <Link href="/procedures">Learn more about procedures</Link></li>
            <li><strong>HPV testing:</strong> Often performed alongside the Pap smear for women 30 and older to detect high-risk strains of human papillomavirus.</li>
            <li><strong>Breast examination:</strong> Clinical breast exams and mammography referrals as part of cancer screening.</li>
            <li><strong>STI screening:</strong> Testing for sexually transmitted infections based on risk factors and sexual history.</li>
            <li><strong>Pelvic exam:</strong> A physical examination of the reproductive organs to check for abnormalities.</li>
          </ul>

          <h2>Common Gynecologic Conditions</h2>

          <h3>Irregular Periods</h3>
          <p>
            Menstrual irregularities are among the most common reasons women
            visit a gynecologist. Causes range from hormonal imbalances and
            stress to conditions like PCOS, thyroid disorders, or uterine
            polyps. A cycle is generally considered irregular if it consistently
            falls outside the 21-to-35-day range or varies significantly from
            month to month.
          </p>

          <h3>Endometriosis Overview</h3>
          <p>
            Endometriosis occurs when tissue similar to the uterine lining
            grows outside the uterus, commonly on the ovaries, fallopian tubes,
            and pelvic lining. It affects roughly 10% of women of reproductive
            age and can cause significant pelvic pain, painful periods, and
            fertility challenges. Diagnosis often requires laparoscopy, though
            clinical suspicion based on symptoms is an important first step.
          </p>

          <h3>Uterine Fibroids Overview</h3>
          <p>
            Fibroids (leiomyomas) are benign growths of the uterine muscle.
            They are extremely common, affecting up to 70-80% of women by age
            50. Many women have no symptoms, while others experience heavy
            menstrual bleeding, pelvic pressure, or reproductive difficulties.
            Treatment depends on symptoms and may range from monitoring to
            medication or surgery.
          </p>

          <h3>PCOS Overview</h3>
          <p>
            Polycystic ovary syndrome (PCOS) is one of the most common
            endocrine disorders in women. It is characterized by menstrual
            irregularity, excess androgen levels (which may cause acne or excess
            hair growth), and polycystic-appearing ovaries. PCOS is also
            associated with insulin resistance, metabolic syndrome, and
            fertility challenges. Management typically involves lifestyle
            modifications, hormonal therapy, and addressing individual symptoms.
          </p>

          <h2>Gynecologic Procedures Overview</h2>
          <p>
            Several diagnostic and therapeutic procedures are commonly
            performed in gynecology, including:
          </p>
          <ul>
            <li><strong>Pap smear:</strong> Cervical screening for cancer and precancerous changes.</li>
            <li><strong>Colposcopy:</strong> A magnified examination of the cervix, often following an abnormal Pap result.</li>
            <li><strong>Hysteroscopy:</strong> A procedure using a thin camera to view the inside of the uterus.</li>
            <li><strong>Endometrial biopsy:</strong> A sample of the uterine lining taken for analysis.</li>
            <li><strong>Ultrasound:</strong> Imaging used to evaluate pelvic organs.</li>
          </ul>
          <p>
            <Link href="/procedures">Learn more about gynecologic procedures and what to expect</Link>
          </p>

          {/* When to see a gynecologist */}
          <h2>When to See a Gynecologist</h2>
          <div className="rounded-xl border-l-4 border-[#0F766E] bg-teal-50/50 p-5 my-6">
            <p className="text-sm font-semibold text-teal-900">
              You should schedule a gynecologic visit if you experience:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-teal-800">
              <li>Abnormal or heavy menstrual bleeding</li>
              <li>Pelvic pain or cramping outside your normal cycle</li>
              <li>Unusual vaginal discharge or odor</li>
              <li>Missed periods (not related to pregnancy)</li>
              <li>Pain during intercourse</li>
              <li>Difficulty getting pregnant after 12 months of trying (6 months if over 35)</li>
              <li>Any new lump, sore, or skin change in the genital area</li>
            </ul>
          </div>
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
            <Link href="/procedures" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Procedures & Tests</Link>
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Obstetrics</Link>
            <Link href="/preconception" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Preconception</Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
