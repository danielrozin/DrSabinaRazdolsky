import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Labor & Delivery",
  "Signs of labor, stages of labor, types of delivery, pain management options, and what to expect at the hospital. Evidence-based guide by an OB/GYN.",
  "/labor-and-delivery"
);

const faqs = [
  {
    question: "How do I know if I am in real labor or just having Braxton Hicks?",
    answer:
      "True labor contractions are regular, progressively get closer together, increase in intensity, and do not go away with rest or changing positions. Braxton Hicks contractions are irregular, do not get progressively stronger, and typically stop with rest or hydration. When in doubt, contact your provider.",
  },
  {
    question: "When should I go to the hospital?",
    answer:
      "A common guideline is the 5-1-1 rule: contractions every 5 minutes, lasting 1 minute each, for at least 1 hour. Go immediately if your water breaks, you have heavy bleeding, or you notice significantly decreased fetal movement. Your provider may give you personalized instructions.",
  },
  {
    question: "What happens during a cesarean delivery?",
    answer:
      "During a cesarean section, the baby is delivered through an incision in the abdomen and uterus. It is performed under regional anesthesia (spinal or epidural) so you are awake but pain-free. A support person can usually be present. The procedure itself takes about 45-60 minutes, with the baby typically delivered within the first 10-15 minutes.",
  },
  {
    question: "Can I eat or drink during labor?",
    answer:
      "Policies vary by hospital. Many facilities now allow clear liquids and light snacks during early labor for low-risk patients. During active labor or if a cesarean is anticipated, intake may be restricted. Discuss your hospital's policy with your provider in advance.",
  },
  {
    question: "What pain management options are available during labor?",
    answer:
      "Options range from non-pharmacologic methods (breathing techniques, position changes, hydrotherapy, massage) to medications (epidural analgesia, nitrous oxide, IV pain medications). Epidural is the most effective form of labor pain relief and is available in most hospitals. You can discuss preferences in your birth plan.",
  },
  {
    question: "How long does labor usually last?",
    answer:
      "Labor duration varies significantly. For first-time mothers, active labor averages 8-12 hours but can be shorter or longer. Subsequent labors tend to be shorter. The pushing phase typically lasts 20 minutes to 2 hours for first-time mothers. Every labor is unique.",
  },
];

export default function LaborAndDeliveryPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Labor & Delivery",
    description: "Evidence-based labor and delivery guide.",
    url: "/labor-and-delivery",
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
        <Breadcrumbs items={[{ label: "Labor & Delivery", href: "/labor-and-delivery" }]} />
        <LastReviewed date="2026-02-20" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Labor and Delivery: What to Expect
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Labor and delivery is the process through which your baby is born.
          Understanding the signs of labor, the stages involved, and your
          options for pain management and delivery can help you feel more
          prepared and confident. This guide covers the key aspects of
          childbirth, from recognizing early labor to the immediate postpartum
          period.
        </p>

        <KeyTakeaways
          items={[
            "True labor contractions are regular, increasingly intense, and do not stop with rest.",
            "Labor has three stages: cervical dilation, delivery of the baby, and delivery of the placenta.",
            "Both vaginal delivery and cesarean section are safe options depending on circumstances.",
            "Multiple pain management approaches are available, from breathing techniques to epidural analgesia.",
            "Know your hospital's contact information and when to call or go in.",
          ]}
        />

        <div className="content-section">
          <h2>Signs of Labor</h2>
          <p>
            As your due date approaches, your body begins preparing for
            delivery. Signs that labor may be starting include:
          </p>
          <ul>
            <li><strong>Regular contractions:</strong> Tightening sensations that come at predictable intervals and get closer together over time.</li>
            <li><strong>Water breaking:</strong> Rupture of the amniotic membrane, which may feel like a gush or a slow trickle of fluid.</li>
            <li><strong>Bloody show:</strong> Passage of the mucus plug, sometimes tinged with blood, indicating cervical changes.</li>
            <li><strong>Lower back pain:</strong> Persistent or rhythmic lower back discomfort that may accompany contractions.</li>
            <li><strong>Pelvic pressure:</strong> A sensation of heaviness or pressure as the baby descends into the pelvis.</li>
          </ul>
          <p>
            Pre-labor signs (which can occur days to weeks before true labor)
            include lightening (the baby dropping lower), increased Braxton
            Hicks contractions, nesting urge, and loose stools.
          </p>

          <h2>Stages of Labor</h2>

          <h3>First Stage: Dilation</h3>
          <p>
            The first stage begins with regular contractions and ends when the
            cervix is fully dilated to 10 centimeters. It is divided into:
          </p>
          <ul>
            <li><strong>Early (latent) labor:</strong> The cervix dilates from 0 to about 6 cm. Contractions are mild to moderate and may be irregular. This can last hours to days.</li>
            <li><strong>Active labor:</strong> The cervix dilates from 6 to 10 cm. Contractions become stronger, longer, and closer together. This is when most women go to the hospital.</li>
          </ul>

          <h3>Second Stage: Pushing and Birth</h3>
          <p>
            Once the cervix is fully dilated, you will feel the urge to push.
            Your provider will guide you through pushing with each contraction.
            This stage ends with the birth of your baby. For first-time mothers,
            this stage may last 20 minutes to 2-3 hours.
          </p>

          <h3>Third Stage: Placenta Delivery</h3>
          <p>
            After the baby is born, the uterus continues to contract to deliver
            the placenta. This usually happens within 5 to 30 minutes. Your
            provider will examine the placenta to ensure it has been delivered
            completely.
          </p>

          <h2>Types of Delivery</h2>

          <h3>Vaginal Delivery</h3>
          <p>
            Vaginal delivery is the most common method of childbirth. The baby
            passes through the birth canal, aided by contractions and the
            mother&apos;s pushing efforts. Sometimes an episiotomy (a small
            incision to widen the vaginal opening) or the use of vacuum or
            forceps may be needed to assist delivery.
          </p>

          <h3>Cesarean Delivery (C-Section)</h3>
          <p>
            A cesarean delivery involves surgically delivering the baby through
            an incision in the abdomen and uterus. It may be planned (for known
            medical reasons) or unplanned (if complications arise during labor).
            Common reasons include abnormal fetal positioning, failure to
            progress in labor, fetal distress, placenta previa, or prior
            cesarean delivery.
          </p>

          <h2>Pain Management Options</h2>
          <p>
            Pain during labor is managed through a range of approaches. You can
            discuss preferences with your provider in advance:
          </p>
          <ul>
            <li><strong>Non-pharmacologic methods:</strong> Breathing techniques, position changes, massage, warm water (hydrotherapy), birthing balls, and relaxation exercises.</li>
            <li><strong>Epidural analgesia:</strong> The most common and effective method of labor pain relief. A catheter is placed in the lower back to deliver continuous pain medication while keeping you awake and alert.</li>
            <li><strong>Nitrous oxide:</strong> Inhaled gas that provides mild pain relief and reduces anxiety. Available in some hospitals.</li>
            <li><strong>IV medications:</strong> Opioid analgesics that can take the edge off pain. Typically used in early labor as they may affect the baby if given close to delivery.</li>
          </ul>

          <h2>What to Expect at the Hospital</h2>
          <p>
            When you arrive at the labor and delivery unit, your team will:
          </p>
          <ul>
            <li>Confirm you are in labor (check cervical dilation and effacement)</li>
            <li>Monitor the baby&apos;s heart rate</li>
            <li>Review your birth plan and preferences</li>
            <li>Start an IV line if needed</li>
            <li>Provide ongoing support and monitoring throughout labor</li>
          </ul>
          <p>
            Packing a hospital bag in advance (around week 36) ensures you are
            ready when the time comes. Include identification, insurance
            information, comfortable clothes, toiletries, and items for the
            baby.
          </p>

          <h2>Recovery Basics</h2>
          <p>
            The immediate postpartum period begins right after delivery. Whether
            you had a vaginal or cesarean birth, your body needs time to heal.
            The hospital team will monitor you for bleeding, blood pressure
            changes, and signs of infection. Most women stay 1-2 days after
            vaginal delivery and 2-4 days after a cesarean.
          </p>
          <p>
            <Link href="/postpartum">Read more about postpartum recovery</Link>
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
            <Link href="/postpartum" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Postpartum</Link>
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Obstetrics</Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
