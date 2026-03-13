import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import LastReviewed from "@/components/LastReviewed";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Procedures & Tests",
  "Common gynecologic procedures and tests explained: Pap smear, hysteroscopy, ultrasound types, and gynecologic surgeries. What to expect before, during, and after.",
  "/procedures"
);

const faqs = [
  {
    question: "Is a Pap smear painful?",
    answer:
      "Most women describe a Pap smear as mildly uncomfortable rather than painful. The procedure involves inserting a speculum and gently collecting cells from the cervix, which takes less than a minute. Some women feel brief pressure or a slight pinch. Communicating with your provider and taking slow breaths can help.",
  },
  {
    question: "How do I prepare for a hysteroscopy?",
    answer:
      "Preparation depends on whether it is diagnostic or operative. Your doctor may ask you to avoid food and drink for a few hours beforehand, take ibuprofen before the procedure, or avoid aspirin and blood thinners. The procedure is often scheduled in the first half of your menstrual cycle. Your provider will give specific instructions.",
  },
  {
    question: "What is the difference between a transvaginal and abdominal ultrasound?",
    answer:
      "An abdominal ultrasound uses a probe on the outside of your belly and is common during pregnancy. A transvaginal ultrasound uses a slim probe inserted into the vagina to get closer, more detailed images of the uterus, ovaries, and early pregnancy. Both are painless, though the transvaginal approach may cause mild pressure.",
  },
  {
    question: "How long does recovery take after a laparoscopic procedure?",
    answer:
      "Most women recover from diagnostic laparoscopy within 1-2 weeks. More complex laparoscopic surgeries may require 2-4 weeks. You may feel bloated, have shoulder pain from the gas used during surgery, and need a few days of rest. Your surgeon will provide specific activity restrictions.",
  },
  {
    question: "What does an abnormal Pap smear mean?",
    answer:
      "An abnormal Pap result means unusual cells were found on your cervix, but it does not mean you have cancer. Many abnormalities are minor and resolve on their own. Depending on the type and severity, your doctor may recommend repeat testing, HPV testing, or a colposcopy (a closer examination of the cervix) for further evaluation.",
  },
  {
    question: "Will I be asleep during gynecologic procedures?",
    answer:
      "It depends on the procedure. Office-based procedures like Pap smears, colposcopy, and some hysteroscopies are done awake with local anesthesia if needed. Operative hysteroscopy and laparoscopy typically require sedation or general anesthesia. Your provider will discuss anesthesia options with you beforehand.",
  },
];

export default function ProceduresPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Procedures & Tests",
    description: "Common gynecologic procedures and tests explained.",
    url: "/procedures",
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
        <Breadcrumbs items={[{ label: "Procedures & Tests", href: "/procedures" }]} />
        <LastReviewed date="2026-02-15" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Gynecologic Procedures and Tests Explained
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Gynecologic procedures and tests are essential tools for diagnosing
          and treating conditions of the female reproductive system. Whether you
          are going in for a routine screening or a more involved procedure,
          understanding what to expect can reduce anxiety and help you prepare.
          This guide explains common procedures in plain language.
        </p>

        <KeyTakeaways
          items={[
            "Pap smears are a quick, essential screening for cervical cancer and precancerous changes.",
            "Hysteroscopy allows direct visualization of the uterus for both diagnosis and treatment.",
            "Ultrasound is painless and used extensively in both gynecology and obstetrics.",
            "Many gynecologic procedures are minimally invasive with relatively short recovery times.",
            "Understanding what to expect before, during, and after a procedure helps reduce anxiety.",
          ]}
        />

        <div className="content-section">
          <h2>Pap Smear (Cervical Screening)</h2>
          <p>
            A Pap smear (also called a Pap test) is a screening procedure that
            collects cells from the cervix to detect precancerous or cancerous
            changes. It is one of the most effective cancer prevention tools
            available.
          </p>
          <ul>
            <li><strong>Purpose:</strong> Screen for cervical cancer and precancerous changes caused by HPV.</li>
            <li><strong>How it works:</strong> A speculum is inserted to visualize the cervix, and a small brush collects cells from the cervical surface.</li>
            <li><strong>Frequency:</strong> Starting at age 21, every 3 years for ages 21-29. Ages 30-65: every 3 years (Pap alone) or every 5 years (Pap + HPV co-testing).</li>
            <li><strong>Duration:</strong> The cell collection takes less than 1 minute.</li>
            <li><strong>Results:</strong> Normal results mean no abnormal cells were found. Abnormal results may require follow-up testing.</li>
          </ul>

          <h2>Hysteroscopy</h2>
          <p>
            Hysteroscopy is a procedure that allows your doctor to look inside
            the uterus using a thin, lighted telescope called a hysteroscope.
            It can be both diagnostic (to identify problems) and operative (to
            treat them).
          </p>
          <ul>
            <li><strong>Purpose:</strong> Evaluate abnormal bleeding, remove polyps or fibroids, investigate infertility, or locate and remove an IUD.</li>
            <li><strong>How it works:</strong> The hysteroscope is inserted through the vagina and cervix into the uterus. Fluid or gas gently expands the uterus for better visibility.</li>
            <li><strong>Setting:</strong> Diagnostic hysteroscopy can often be done in the office. Operative hysteroscopy is typically performed in a surgical setting.</li>
            <li><strong>Recovery:</strong> Office-based procedures usually allow same-day return to normal activities. Operative procedures may require 1-3 days of rest.</li>
          </ul>

          <h2>Ultrasound Types</h2>
          <p>
            Ultrasound uses sound waves to create images of internal structures.
            It is painless, does not use radiation, and is used extensively in
            gynecology and obstetrics.
          </p>
          <ul>
            <li><strong>Transvaginal ultrasound:</strong> A slim probe is inserted into the vagina to get detailed images of the uterus, ovaries, and pelvic structures. Used for evaluating ovarian cysts, fibroids, endometrial thickness, and early pregnancy.</li>
            <li><strong>Transabdominal ultrasound:</strong> A probe moves over the abdomen (a full bladder may be needed). Commonly used during pregnancy for anatomy scans and growth monitoring.</li>
            <li><strong>Doppler ultrasound:</strong> Evaluates blood flow to organs and the placenta. Used to assess fetal well-being and certain vascular conditions.</li>
            <li><strong>3D/4D ultrasound:</strong> Provides three-dimensional images, useful for evaluating uterine anatomy and certain fetal conditions.</li>
          </ul>

          <h2>Common Gynecologic Surgeries</h2>
          <p>
            When medical management is not sufficient, surgical intervention
            may be recommended. Common gynecologic surgeries include:
          </p>
          <ul>
            <li><strong>Colposcopy:</strong> A magnified examination of the cervix following an abnormal Pap smear. A biopsy may be taken for further analysis.</li>
            <li><strong>Endometrial biopsy:</strong> A thin catheter is inserted through the cervix to collect a sample of the uterine lining. Used to evaluate abnormal bleeding.</li>
            <li><strong>LEEP (Loop Electrosurgical Excision Procedure):</strong> Removes abnormal cervical tissue using a thin wire loop with electrical current. Treats precancerous cervical changes.</li>
            <li><strong>D&C (Dilation and Curettage):</strong> The cervix is dilated and tissue is removed from the uterus. Used for diagnosis or treatment of abnormal bleeding and after miscarriage.</li>
            <li><strong>Laparoscopy:</strong> A minimally invasive surgery using small incisions and a camera. Used for diagnosing and treating endometriosis, ovarian cysts, tubal conditions, and more.</li>
            <li><strong>Hysterectomy:</strong> Surgical removal of the uterus. May be performed vaginally, abdominally, or laparoscopically depending on the indication.</li>
          </ul>

          <h2>What to Expect Before, During, and After</h2>
          <h3>Before a Procedure</h3>
          <ul>
            <li>Your provider will explain the procedure, risks, benefits, and alternatives</li>
            <li>You may need blood tests or imaging beforehand</li>
            <li>Fasting may be required if sedation or anesthesia is planned</li>
            <li>Arrange for someone to drive you home if needed</li>
            <li>Write down any questions you have in advance</li>
          </ul>

          <h3>During the Procedure</h3>
          <ul>
            <li>Your team will monitor your vital signs throughout</li>
            <li>You will receive the appropriate level of pain management or anesthesia</li>
            <li>Procedures range from a few minutes (Pap smear) to over an hour (complex surgery)</li>
          </ul>

          <h3>After the Procedure</h3>
          <ul>
            <li>Follow your provider&apos;s specific recovery instructions</li>
            <li>Mild cramping and light bleeding are common after many gynecologic procedures</li>
            <li>Avoid intercourse, tampons, and heavy lifting for the recommended period</li>
            <li>Attend follow-up appointments as scheduled</li>
            <li>Contact your provider if you develop fever, heavy bleeding, or increasing pain</li>
          </ul>
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
            <Link href="/gynecology" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Gynecology</Link>
            <Link href="/obstetrics" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Obstetrics</Link>
            <Link href="/articles" className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-[#0F766E] hover:bg-teal-100 transition-colors">Articles</Link>
          </div>
        </section>
      </div>
    </>
  );
}
