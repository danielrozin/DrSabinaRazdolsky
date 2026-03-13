import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Obstetrics",
  "Evidence-based obstetrics information: prenatal care, high-risk pregnancy, labor and delivery, and common obstetric conditions explained by an OB/GYN physician.",
  "/obstetrics"
);

const faqs = [
  {
    question: "What is the difference between an obstetrician and a gynecologist?",
    answer:
      "An obstetrician specializes in pregnancy, childbirth, and the postpartum period, while a gynecologist focuses on the female reproductive system outside of pregnancy. Many physicians train in both fields (OB/GYN) and provide comprehensive care across all stages of a woman's reproductive life.",
  },
  {
    question: "How often should I see my obstetrician during pregnancy?",
    answer:
      "For a typical low-risk pregnancy, visits are usually scheduled monthly through 28 weeks, every two weeks from 28 to 36 weeks, and weekly from 36 weeks until delivery. High-risk pregnancies may require more frequent monitoring.",
  },
  {
    question: "What qualifies as a high-risk pregnancy?",
    answer:
      "A pregnancy may be considered high-risk due to maternal age (under 17 or over 35), pre-existing conditions like diabetes or hypertension, multiple gestations (twins or more), prior pregnancy complications, or conditions that develop during pregnancy such as preeclampsia or gestational diabetes.",
  },
  {
    question: "What prenatal tests are recommended during pregnancy?",
    answer:
      "Standard prenatal testing includes blood type and antibody screening, complete blood count, glucose tolerance testing, infectious disease screening, and ultrasounds. First-trimester screening and genetic testing options are also offered based on individual risk factors and preferences.",
  },
  {
    question: "When should I go to the hospital during labor?",
    answer:
      "Generally, you should head to the hospital when contractions are regular, roughly 5 minutes apart, lasting about 1 minute each, for at least 1 hour (the 5-1-1 rule). Go immediately if your water breaks, you have heavy bleeding, or you notice decreased fetal movement.",
  },
  {
    question: "Can I have a vaginal delivery after a previous cesarean section?",
    answer:
      "Vaginal birth after cesarean (VBAC) is an option for many women, depending on the type of prior uterine incision, the reason for the previous cesarean, and overall pregnancy health. Your obstetrician can assess whether VBAC is appropriate for your specific situation.",
  },
];

export default function ObstetricsPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Obstetrics",
    description: "Evidence-based obstetrics education.",
    url: "/obstetrics",
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
        <Breadcrumbs items={[{ label: "Obstetrics", href: "/obstetrics" }]} />
        <LastReviewed date="2026-03-01" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Obstetrics: Pregnancy, Birth, and Maternal Care
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Obstetrics is the medical specialty dedicated to pregnancy, childbirth,
          and the postpartum period. An obstetrician monitors the health of both
          mother and baby from the first prenatal visit through delivery and
          recovery. This page provides an evidence-based overview of key
          obstetric topics.
        </p>

        <KeyTakeaways
          items={[
            "Obstetrics covers the full spectrum of pregnancy care, from conception to the postpartum period.",
            "Regular prenatal visits are essential for monitoring maternal and fetal health.",
            "High-risk pregnancies require closer surveillance and specialized management.",
            "Understanding the stages of labor helps you feel more prepared for delivery.",
            "Knowing warning signs during pregnancy can prompt timely medical evaluation.",
          ]}
        />

        <div className="content-section">
          {/* What is Obstetrics */}
          <h2>What Is Obstetrics?</h2>
          <p>
            Obstetrics is the branch of medicine focused on caring for women
            during pregnancy, labor, delivery, and the period immediately after
            birth. Obstetricians are trained to manage both normal pregnancies
            and those complicated by medical conditions, ensuring the safest
            possible outcomes for mothers and their babies.
          </p>
          <p>
            Most obstetricians in practice today are trained as OB/GYNs,
            meaning they also specialize in gynecology. This dual training
            allows them to provide continuity of care across a woman&apos;s
            reproductive life.
          </p>

          {/* Prenatal Care */}
          <h2>Prenatal Care</h2>
          <p>
            Prenatal care (also called antenatal care) refers to the regular
            medical check-ups and screenings you receive throughout pregnancy.
            These visits allow your doctor to track your health and your
            baby&apos;s development, identify potential complications early, and
            provide guidance on nutrition, activity, and preparation for birth.
          </p>
          <p>A typical prenatal care schedule includes:</p>
          <ul>
            <li>First visit around 8-10 weeks of pregnancy</li>
            <li>Monthly visits through 28 weeks</li>
            <li>Biweekly visits from 28 to 36 weeks</li>
            <li>Weekly visits from 36 weeks until delivery</li>
          </ul>
          <p>
            <Link href="/pregnancy">Read more about pregnancy by trimester</Link>
          </p>

          {/* High-Risk Pregnancy */}
          <h2>High-Risk Pregnancy Overview</h2>
          <p>
            A high-risk pregnancy is one in which the mother, the baby, or both
            face a higher chance of health problems before, during, or after
            delivery. Factors that may contribute to a high-risk classification
            include:
          </p>
          <ul>
            <li>Advanced maternal age (typically over 35) or very young age</li>
            <li>Pre-existing conditions such as hypertension, diabetes, or autoimmune disorders</li>
            <li>Multiple gestations (twins, triplets, or more)</li>
            <li>History of preterm birth, pregnancy loss, or cesarean delivery</li>
            <li>Pregnancy-specific conditions like preeclampsia or gestational diabetes</li>
          </ul>
          <p>
            High-risk pregnancies often require more frequent monitoring,
            additional testing, and potentially referral to a maternal-fetal
            medicine specialist (perinatologist).
          </p>

          {/* Labor & Delivery */}
          <h2>Labor and Delivery Overview</h2>
          <p>
            Labor is the process by which your body prepares for and accomplishes
            childbirth. It consists of three main stages:
          </p>
          <ul>
            <li><strong>First stage:</strong> Begins with regular contractions and ends when the cervix is fully dilated (10 cm). This is the longest stage and includes early labor and active labor.</li>
            <li><strong>Second stage:</strong> The pushing phase, from full dilation to the birth of the baby.</li>
            <li><strong>Third stage:</strong> Delivery of the placenta, usually within 5 to 30 minutes after birth.</li>
          </ul>
          <p>
            <Link href="/labor-and-delivery">Learn more about labor and delivery</Link>
          </p>

          {/* Common Obstetric Conditions */}
          <h2>Common Obstetric Conditions</h2>
          <p>
            Several conditions can arise during pregnancy that require medical
            attention. Some of the most common include:
          </p>
          <ul>
            <li><strong>Gestational diabetes:</strong> High blood sugar that develops during pregnancy and typically resolves after delivery.</li>
            <li><strong>Preeclampsia:</strong> A condition characterized by high blood pressure and protein in the urine, usually after 20 weeks of pregnancy.</li>
            <li><strong>Placenta previa:</strong> When the placenta partially or fully covers the cervix, which may require cesarean delivery.</li>
            <li><strong>Preterm labor:</strong> Labor that begins before 37 weeks of pregnancy.</li>
            <li><strong>Intrauterine growth restriction (IUGR):</strong> When the baby grows more slowly than expected in the womb.</li>
          </ul>
          <p>
            Each of these conditions has specific monitoring protocols and
            management strategies. Your obstetrician will tailor care based on
            the specific condition and its severity.
          </p>

          {/* When to seek urgent care */}
          <h2>When to Seek Urgent Care During Pregnancy</h2>
          <div className="rounded-xl border-l-4 border-[#F97066] bg-red-50/50 p-5 my-6">
            <p className="text-sm font-semibold text-red-800">
              Contact your healthcare provider or go to the hospital immediately if you experience:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-red-700">
              <li>Heavy vaginal bleeding</li>
              <li>Severe or persistent abdominal pain</li>
              <li>Sudden swelling of the face, hands, or feet</li>
              <li>Severe headache that does not improve</li>
              <li>Visual disturbances (blurred vision, seeing spots)</li>
              <li>Decreased or absent fetal movement</li>
              <li>Leaking fluid from the vagina (possible water breaking)</li>
              <li>Regular contractions before 37 weeks</li>
            </ul>
          </div>
        </div>

        {/* Related Research */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-900">Related Research</h2>
          <p className="mt-2 text-sm text-gray-600">
            Dr. Razdolsky&apos;s published research includes studies on preterm
            labor induction, appendectomy during pregnancy, and management of
            prelabor rupture of membranes.
          </p>
          <Link
            href="/research"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#0F766E] hover:text-teal-800 transition-colors"
          >
            View research publications
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

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
            <Link href="/labor-and-delivery" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Labor & Delivery</Link>
            <Link href="/postpartum" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Postpartum</Link>
            <Link href="/preconception" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Preconception</Link>
          </div>
        </section>
      </div>
    </>
  );
}
