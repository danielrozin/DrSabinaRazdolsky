import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Postpartum Care",
  "Postpartum recovery guide: physical healing timeline, emotional health, breastfeeding basics, postpartum bleeding, and when to call your doctor. Evidence-based information.",
  "/postpartum"
);

const faqs = [
  {
    question: "How long does postpartum bleeding last?",
    answer:
      "Postpartum bleeding (lochia) typically lasts 4 to 6 weeks. It starts as heavy, bright red bleeding and gradually transitions to lighter pink or brown discharge, then to white or yellowish discharge. Heavy soaking (more than one pad per hour) or passage of large clots after the first 24 hours warrants a call to your doctor.",
  },
  {
    question: "What is the difference between baby blues and postpartum depression?",
    answer:
      "Baby blues affect up to 80% of new mothers and involve mood swings, tearfulness, and anxiety in the first 2 weeks after birth. They resolve on their own. Postpartum depression (PPD) is more intense, lasts longer than 2 weeks, and may include persistent sadness, loss of interest, difficulty bonding with the baby, changes in appetite or sleep beyond what is expected, and thoughts of self-harm. PPD requires professional treatment.",
  },
  {
    question: "When can I start exercising after delivery?",
    answer:
      "For uncomplicated vaginal deliveries, light activity like walking can usually resume within days. More vigorous exercise is generally safe after 4-6 weeks, once cleared by your provider. After a cesarean, recovery takes longer and you should wait at least 6-8 weeks before strenuous activity. Always get clearance from your OB/GYN.",
  },
  {
    question: "When will my period return after having a baby?",
    answer:
      "If you are not breastfeeding, your period may return within 6 to 8 weeks after delivery. If you are exclusively breastfeeding, menstruation may be delayed for months or until you reduce nursing frequency. However, ovulation can occur before your first postpartum period, so contraception is important if you want to avoid pregnancy.",
  },
  {
    question: "Is it normal to have pain during intercourse after delivery?",
    answer:
      "Yes, this is common. Hormonal changes, perineal healing (especially after a tear or episiotomy), vaginal dryness (particularly while breastfeeding), and emotional adjustment can all contribute to discomfort. Most women are advised to wait at least 4-6 weeks before resuming intercourse. Using a lubricant and going slowly can help. If pain persists, discuss it with your provider.",
  },
  {
    question: "When should I see my doctor after giving birth?",
    answer:
      "Current guidelines recommend a postpartum visit within 3 weeks of delivery, with a comprehensive follow-up by 12 weeks. If you had a cesarean or complications, earlier follow-up may be recommended. Contact your provider sooner if you experience heavy bleeding, fever, severe pain, signs of infection, or concerning mood changes.",
  },
];

export default function PostpartumPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Postpartum Care",
    description: "Evidence-based postpartum recovery guide.",
    url: "/postpartum",
    lastReviewed: "2026-02-20",
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
        <Breadcrumbs items={[{ label: "Postpartum", href: "/postpartum" }]} />
        <LastReviewed date="2026-02-20" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Postpartum Care: Recovery After Birth
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          The postpartum period (also called the fourth trimester) refers to the
          weeks and months following childbirth. During this time, your body
          undergoes significant physical recovery while you adjust to life with
          a newborn. Understanding what to expect can help you take better care
          of yourself and know when to seek help.
        </p>

        <KeyTakeaways
          items={[
            "Physical recovery after birth takes at least 6 weeks, longer after a cesarean delivery.",
            "Postpartum bleeding (lochia) is normal and gradually decreases over 4-6 weeks.",
            "Baby blues are common but should resolve within 2 weeks. Longer or more severe symptoms may indicate postpartum depression.",
            "Breastfeeding is beneficial but may come with challenges that lactation support can help address.",
            "Do not hesitate to contact your healthcare provider if something does not feel right.",
          ]}
        />

        <div className="content-section">
          <h2>Physical Recovery Timeline</h2>
          <p>
            Your body has undergone remarkable changes during pregnancy, and
            recovery takes time. Here is a general timeline:
          </p>
          <ul>
            <li><strong>First 24 hours:</strong> Monitored in hospital. Heavy bleeding, uterine cramping (afterpains), and fatigue are normal. Perineal pain is common after vaginal delivery.</li>
            <li><strong>Week 1:</strong> Bleeding gradually decreases. Uterine cramping continues, especially while breastfeeding. Swelling begins to subside. Bowel function returns.</li>
            <li><strong>Weeks 2-3:</strong> Bleeding becomes lighter and changes color. Perineal or incision soreness improves. Hormonal shifts may cause mood fluctuations and night sweats.</li>
            <li><strong>Weeks 4-6:</strong> Most women feel significantly better. Bleeding may stop or become very light. Your provider will perform a postpartum checkup to assess healing.</li>
            <li><strong>Months 2-6:</strong> Continued hormonal adjustment. Hair loss (telogen effluvium) may peak around 3-4 months postpartum. Abdominal muscles gradually regain tone.</li>
          </ul>

          <h2>Postpartum Bleeding (Lochia)</h2>
          <p>
            Lochia is the vaginal discharge that occurs after delivery,
            consisting of blood, mucus, and uterine tissue. It is a normal part
            of recovery and progresses through three stages:
          </p>
          <ul>
            <li><strong>Lochia rubra (days 1-3):</strong> Heavy, bright red bleeding. Small clots are normal.</li>
            <li><strong>Lochia serosa (days 4-10):</strong> Pink to brownish discharge, lighter volume.</li>
            <li><strong>Lochia alba (days 10-42):</strong> White or yellowish discharge that gradually tapers off.</li>
          </ul>

          <h2>Emotional Health</h2>

          <h3>Baby Blues</h3>
          <p>
            Baby blues affect up to 80% of new mothers and typically appear
            within the first few days after delivery. Symptoms include mood
            swings, tearfulness, irritability, and feeling overwhelmed. Baby
            blues usually resolve on their own within two weeks and do not
            require treatment, but support from family and friends is important.
          </p>

          <h3>Postpartum Depression (PPD)</h3>
          <p>
            Postpartum depression is more severe and longer-lasting than baby
            blues. It affects approximately 10-15% of new mothers and can begin
            anytime in the first year after birth. Symptoms may include:
          </p>
          <ul>
            <li>Persistent feelings of sadness, hopelessness, or emptiness</li>
            <li>Loss of interest in activities you used to enjoy</li>
            <li>Difficulty bonding with your baby</li>
            <li>Excessive worry or anxiety</li>
            <li>Changes in appetite or sleep (beyond what is expected with a newborn)</li>
            <li>Thoughts of harming yourself or your baby</li>
          </ul>
          <div className="rounded-xl border-l-4 border-[#F97066] bg-red-50/50 p-5 my-6">
            <p className="text-sm font-semibold text-red-800">
              PPD is treatable. If you or someone you know is experiencing these
              symptoms, reach out to a healthcare provider. You are not alone, and
              help is available.
            </p>
          </div>

          <h2>Breastfeeding Basics</h2>
          <p>
            Breastfeeding provides optimal nutrition for newborns and offers
            health benefits for both mother and baby. Key points include:
          </p>
          <ul>
            <li>Colostrum (early breast milk) is nutrient-rich and provides important antibodies in the first few days.</li>
            <li>Mature milk typically comes in 2-5 days after delivery.</li>
            <li>Aim to breastfeed or pump 8-12 times per day in the early weeks to establish supply.</li>
            <li>A proper latch is essential for effective feeding and preventing nipple pain.</li>
            <li>Lactation consultants can provide hands-on support if you encounter challenges.</li>
          </ul>
          <p>
            Whether you breastfeed, formula-feed, or combine both, what matters
            most is that your baby is well-nourished and that the feeding method
            works for your family.
          </p>

          <h2>When to Call Your Doctor</h2>
          <div className="rounded-xl border-l-4 border-[#F97066] bg-red-50/50 p-5 my-6">
            <p className="text-sm font-semibold text-red-800">
              Contact your healthcare provider if you experience:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-red-700">
              <li>Heavy bleeding (soaking more than one pad per hour)</li>
              <li>Passing large clots (bigger than a golf ball) after the first 24 hours</li>
              <li>Fever over 100.4 F (38 C)</li>
              <li>Severe headache or vision changes</li>
              <li>Foul-smelling vaginal discharge</li>
              <li>Increasing pain, redness, or drainage at an incision site</li>
              <li>Calf pain or swelling (possible sign of blood clot)</li>
              <li>Chest pain or difficulty breathing</li>
              <li>Thoughts of harming yourself or your baby</li>
            </ul>
          </div>

          <h2>Return of Menstruation</h2>
          <p>
            When your period returns depends largely on whether you are
            breastfeeding. For non-breastfeeding mothers, menstruation typically
            returns within 6-8 weeks. For exclusively breastfeeding mothers, it
            may be delayed for several months or longer, though this varies
            considerably.
          </p>
          <p>
            Important: Ovulation can occur before your first postpartum period,
            meaning pregnancy is possible even before menstruation resumes.
            Discuss contraception options with your provider at your postpartum
            visit.
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
            <Link href="/labor-and-delivery" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Labor & Delivery</Link>
            <Link href="/pregnancy" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Pregnancy</Link>
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Obstetrics</Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
