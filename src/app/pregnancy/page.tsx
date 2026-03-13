import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Pregnancy",
  "Trimester-by-trimester pregnancy guide: symptoms, prenatal testing, nutrition, warning signs, and what to expect. Evidence-based information by an OB/GYN.",
  "/pregnancy"
);

const faqs = [
  {
    question: "What are the earliest signs of pregnancy?",
    answer:
      "The most common early signs include a missed period, breast tenderness, fatigue, nausea (with or without vomiting), frequent urination, and mild cramping. However, symptoms vary widely and some women experience very few early signs.",
  },
  {
    question: "Is it safe to exercise during pregnancy?",
    answer:
      "For most women with uncomplicated pregnancies, moderate exercise is safe and beneficial. Walking, swimming, prenatal yoga, and stationary cycling are generally recommended. Aim for at least 150 minutes of moderate activity per week. Avoid contact sports, activities with fall risk, and exercising in extreme heat. Always discuss your exercise plan with your OB/GYN.",
  },
  {
    question: "How much weight should I gain during pregnancy?",
    answer:
      "Recommended weight gain depends on your pre-pregnancy BMI. General guidelines: underweight (BMI < 18.5): 28-40 lbs; normal weight (BMI 18.5-24.9): 25-35 lbs; overweight (BMI 25-29.9): 15-25 lbs; obese (BMI 30+): 11-20 lbs. Your provider can give personalized guidance.",
  },
  {
    question: "Which foods should I avoid during pregnancy?",
    answer:
      "Avoid raw or undercooked meat, fish, and eggs; unpasteurized dairy and juices; high-mercury fish (shark, swordfish, king mackerel); deli meats unless heated until steaming; and raw sprouts. Limit caffeine to under 200 mg per day. Avoid alcohol entirely.",
  },
  {
    question: "What prenatal vitamins do I need?",
    answer:
      "At minimum, a prenatal vitamin should contain folic acid (at least 400-800 mcg), iron, calcium, vitamin D, and DHA. Many formulations also include iodine, choline, and B vitamins. Start taking prenatal vitamins as early as possible, ideally before conception.",
  },
  {
    question: "When should I be concerned about pregnancy symptoms?",
    answer:
      "Contact your provider for heavy bleeding, severe abdominal pain, persistent vomiting that prevents eating or drinking, sudden swelling of face or hands, severe headache with visual changes, decreased fetal movement, or leaking fluid from the vagina. Trust your instincts: if something feels wrong, it is always appropriate to call.",
  },
];

export default function PregnancyPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Pregnancy Guide",
    description: "Trimester-by-trimester pregnancy information.",
    url: "/pregnancy",
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
        <Breadcrumbs items={[{ label: "Pregnancy", href: "/pregnancy" }]} />
        <LastReviewed date="2026-02-20" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Pregnancy: A Trimester-by-Trimester Guide
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Pregnancy spans approximately 40 weeks and is divided into three
          trimesters. Each stage brings distinct physical changes, developmental
          milestones for the baby, and specific medical considerations. This
          guide offers an evidence-based overview of what to expect, along with
          practical information on prenatal testing, nutrition, and warning signs
          to be aware of.
        </p>

        <KeyTakeaways
          items={[
            "Pregnancy is divided into three trimesters, each with unique changes and milestones.",
            "Regular prenatal care is essential for monitoring your health and your baby's development.",
            "Proper nutrition and prenatal vitamins support healthy pregnancy outcomes.",
            "Understanding warning signs helps you know when to seek medical attention.",
            "Many common pregnancy symptoms are normal, but your provider is always available for questions.",
          ]}
        />

        <div className="content-section">
          {/* Trimester Overview */}
          <h2>First Trimester (Weeks 1-12)</h2>
          <p>
            The first trimester is a period of rapid development. By the end of
            week 12, all major organ systems have begun forming. Common symptoms
            during this stage include:
          </p>
          <ul>
            <li>Nausea and vomiting (often called morning sickness, though it can occur at any time)</li>
            <li>Breast tenderness and swelling</li>
            <li>Fatigue and increased need for sleep</li>
            <li>Frequent urination</li>
            <li>Mild cramping as the uterus begins to grow</li>
            <li>Food aversions or cravings</li>
          </ul>
          <p>
            Key appointments during the first trimester include your initial
            prenatal visit (usually around 8-10 weeks), first-trimester screening
            for chromosomal abnormalities, and an early ultrasound to confirm
            dating and viability.
          </p>

          <h2>Second Trimester (Weeks 13-26)</h2>
          <p>
            Often called the &ldquo;golden trimester,&rdquo; many women find
            that nausea subsides and energy returns during this period. The baby
            grows significantly, and you may begin to feel fetal movement
            (quickening) between weeks 16 and 22. Common experiences include:
          </p>
          <ul>
            <li>Visible baby bump as the uterus expands</li>
            <li>Feeling the baby move (flutters progressing to kicks)</li>
            <li>Back pain as your center of gravity shifts</li>
            <li>Skin changes (linea nigra, stretch marks)</li>
            <li>Nasal congestion and occasional nosebleeds</li>
          </ul>
          <p>
            The anatomy scan (typically around week 20) provides a detailed
            ultrasound of the baby&apos;s organs and structure. Glucose screening
            for gestational diabetes is usually performed between weeks 24 and 28.
          </p>

          <h2>Third Trimester (Weeks 27-40)</h2>
          <p>
            The final trimester focuses on the baby&apos;s continued growth and
            preparation for birth. The baby gains weight rapidly, and the lungs
            mature for breathing outside the womb. Common symptoms include:
          </p>
          <ul>
            <li>Increased Braxton Hicks contractions (practice contractions)</li>
            <li>Shortness of breath as the uterus presses on the diaphragm</li>
            <li>Swelling of the ankles and feet</li>
            <li>Difficulty sleeping</li>
            <li>Pelvic pressure as the baby drops lower</li>
            <li>Heartburn and indigestion</li>
          </ul>
          <p>
            Prenatal visits become more frequent (weekly from week 36). Group B
            streptococcus (GBS) screening is typically performed between weeks 35
            and 37.
          </p>

          {/* Prenatal Testing */}
          <h2>Prenatal Testing Overview</h2>
          <p>
            Prenatal testing helps monitor your health and screen for potential
            complications. Common tests throughout pregnancy include:
          </p>
          <ul>
            <li><strong>First-trimester screening:</strong> Blood tests and nuchal translucency ultrasound to assess risk for chromosomal conditions.</li>
            <li><strong>Cell-free DNA testing (NIPT):</strong> A blood test that screens for Down syndrome and other chromosomal conditions with high accuracy.</li>
            <li><strong>Anatomy scan:</strong> A detailed ultrasound at around 20 weeks to evaluate fetal structure and development.</li>
            <li><strong>Glucose tolerance test:</strong> Screens for gestational diabetes, usually between 24-28 weeks.</li>
            <li><strong>GBS culture:</strong> Tests for Group B streptococcus colonization at 35-37 weeks.</li>
            <li><strong>Non-stress test (NST):</strong> Monitors fetal heart rate in response to movement, used in later pregnancy when indicated.</li>
          </ul>

          {/* Nutrition */}
          <h2>Nutrition During Pregnancy</h2>
          <p>
            Good nutrition supports your health and your baby&apos;s
            development. General guidelines include:
          </p>
          <ul>
            <li>Eat a varied diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats</li>
            <li>Increase caloric intake modestly: roughly 340 extra calories per day in the second trimester and 450 in the third</li>
            <li>Stay well hydrated (aim for 8-12 cups of water daily)</li>
            <li>Ensure adequate intake of iron, calcium, DHA, and folate</li>
            <li>Continue taking prenatal vitamins throughout pregnancy</li>
          </ul>

          {/* Warning Signs */}
          <h2>Warning Signs to Watch For</h2>
          <div className="rounded-xl border-l-4 border-[#F97066] bg-red-50/50 p-5 my-6">
            <p className="text-sm font-semibold text-red-800">
              Seek medical attention promptly if you experience:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-red-700">
              <li>Vaginal bleeding (more than light spotting)</li>
              <li>Severe or persistent abdominal or pelvic pain</li>
              <li>Persistent vomiting that prevents keeping food or fluids down</li>
              <li>High fever (over 100.4 F / 38 C)</li>
              <li>Sudden swelling of face, hands, or feet</li>
              <li>Severe headache, especially with visual disturbances</li>
              <li>Decreased fetal movement (fewer than 10 movements in 2 hours after 28 weeks)</li>
              <li>Fluid leaking from the vagina</li>
              <li>Regular contractions before 37 weeks</li>
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
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Obstetrics</Link>
            <Link href="/preconception" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Preconception</Link>
            <Link href="/labor-and-delivery" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Labor & Delivery</Link>
            <Link href="/postpartum" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Postpartum</Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
