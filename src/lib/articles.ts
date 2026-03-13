export interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  lastReviewed: string;
  readingTime: number;
  relatedArticles: string[];
}

export const articles: Article[] = [
  {
    slug: "preconception-checkup-guide",
    title: "Preconception Checkup: What to Expect and Why It Matters",
    metaDescription:
      "Learn what happens during a preconception checkup, which tests your OB/GYN may recommend, and how to prepare your body for a healthy pregnancy.",
    excerpt:
      "A preconception visit helps identify health factors that could affect your pregnancy. Learn which screenings, vaccines, and lifestyle changes your doctor may recommend before you conceive.",
    category: "Preconception",
    tags: ["preconception", "fertility", "prenatal planning", "checkup"],
    lastReviewed: "2026-02-15",
    readingTime: 7,
    relatedArticles: [
      "what-tests-before-pregnancy",
      "prenatal-vitamins-guide",
      "early-pregnancy-symptoms",
    ],
  },
  {
    slug: "early-pregnancy-symptoms",
    title:
      "Early Pregnancy Symptoms: A Doctor\u2019s Guide to the First Signs",
    metaDescription:
      "Recognize the earliest signs of pregnancy, from missed periods to fatigue and nausea. An OB/GYN explains what\u2019s normal and when to call your doctor.",
    excerpt:
      "From a missed period to morning sickness, early pregnancy symptoms vary widely. Here\u2019s what to look for, what\u2019s considered normal, and when you should see your OB/GYN.",
    category: "Pregnancy",
    tags: [
      "early pregnancy",
      "pregnancy symptoms",
      "first trimester",
      "morning sickness",
    ],
    lastReviewed: "2026-01-20",
    readingTime: 6,
    relatedArticles: [
      "trimester-guide",
      "prenatal-vitamins-guide",
      "preconception-checkup-guide",
    ],
  },
  {
    slug: "what-tests-before-pregnancy",
    title:
      "What Tests Should You Get Before Pregnancy? A Complete Checklist",
    metaDescription:
      "Discover the blood tests, genetic screenings, and health evaluations recommended before getting pregnant. An OB/GYN\u2019s evidence-based checklist.",
    excerpt:
      "From blood type and CBC to genetic carrier screening and STI panels, here is a comprehensive checklist of the tests your doctor may order before you try to conceive.",
    category: "Preconception",
    tags: [
      "preconception testing",
      "genetic screening",
      "blood tests",
      "fertility planning",
    ],
    lastReviewed: "2026-02-01",
    readingTime: 8,
    relatedArticles: [
      "preconception-checkup-guide",
      "prenatal-vitamins-guide",
      "early-pregnancy-symptoms",
    ],
  },
  {
    slug: "trimester-guide",
    title:
      "Pregnancy Trimester Guide: What Happens in Each Stage of Pregnancy",
    metaDescription:
      "A trimester-by-trimester overview of fetal development, body changes, tests, and milestones. Written by an OB/GYN for expecting parents.",
    excerpt:
      "Your body and baby change dramatically across 40 weeks. This guide walks through each trimester\u2019s key developments, recommended tests, and common symptoms.",
    category: "Pregnancy",
    tags: [
      "trimester",
      "fetal development",
      "pregnancy timeline",
      "prenatal care",
    ],
    lastReviewed: "2026-01-10",
    readingTime: 12,
    relatedArticles: [
      "early-pregnancy-symptoms",
      "signs-of-labor",
      "prenatal-vitamins-guide",
    ],
  },
  {
    slug: "postpartum-recovery",
    title:
      "Postpartum Recovery: What to Expect in the First 6 Weeks After Birth",
    metaDescription:
      "Understand the physical and emotional changes after delivery, including bleeding, healing, breastfeeding, and when to seek medical help postpartum.",
    excerpt:
      "The postpartum period brings significant physical and emotional changes. Learn what\u2019s normal during recovery, how to care for yourself, and warning signs that need attention.",
    category: "Postpartum",
    tags: [
      "postpartum",
      "recovery after birth",
      "postpartum bleeding",
      "breastfeeding",
    ],
    lastReviewed: "2026-02-20",
    readingTime: 9,
    relatedArticles: [
      "c-section-recovery",
      "signs-of-labor",
      "trimester-guide",
    ],
  },
  {
    slug: "irregular-bleeding-evaluation",
    title:
      "Irregular Bleeding: Causes, Evaluation, and When to See a Gynecologist",
    metaDescription:
      "Abnormal uterine bleeding can have many causes. An OB/GYN explains the evaluation process, common diagnoses, and treatment options.",
    excerpt:
      "Irregular periods, heavy bleeding, or spotting between cycles can signal a range of conditions. Learn how gynecologists evaluate abnormal bleeding and what treatments are available.",
    category: "Gynecology",
    tags: [
      "abnormal bleeding",
      "irregular periods",
      "menstrual disorders",
      "gynecology",
    ],
    lastReviewed: "2026-03-01",
    readingTime: 8,
    relatedArticles: [
      "hysteroscopy-explained",
      "pap-smear-guide",
      "common-gynecologic-procedures",
    ],
  },
  {
    slug: "hysteroscopy-explained",
    title:
      "Hysteroscopy: What It Is, Why It\u2019s Done, and What to Expect",
    metaDescription:
      "Learn about hysteroscopy, a minimally invasive procedure used to diagnose and treat uterine conditions. An OB/GYN explains the process, risks, and recovery.",
    excerpt:
      "Hysteroscopy lets your doctor look inside the uterus using a thin camera. Understand when it\u2019s recommended, how to prepare, what happens during the procedure, and recovery time.",
    category: "Procedures",
    tags: [
      "hysteroscopy",
      "uterine procedures",
      "minimally invasive",
      "polyps",
    ],
    lastReviewed: "2026-01-25",
    readingTime: 7,
    relatedArticles: [
      "irregular-bleeding-evaluation",
      "common-gynecologic-procedures",
      "pap-smear-guide",
    ],
  },
  {
    slug: "pap-smear-guide",
    title:
      "Pap Smear: Purpose, Procedure, Results, and Screening Guidelines",
    metaDescription:
      "Understand what a Pap smear screens for, how often you need one, what results mean, and the connection between HPV and cervical cancer prevention.",
    excerpt:
      "Pap smears are a key screening tool for cervical cancer. Learn about current guidelines, what to expect during the test, how to interpret results, and when follow-up is needed.",
    category: "Gynecology",
    tags: [
      "Pap smear",
      "cervical cancer screening",
      "HPV",
      "preventive care",
    ],
    lastReviewed: "2026-02-10",
    readingTime: 6,
    relatedArticles: [
      "common-gynecologic-procedures",
      "irregular-bleeding-evaluation",
      "hysteroscopy-explained",
    ],
  },
  {
    slug: "common-gynecologic-procedures",
    title:
      "Common Gynecologic Procedures: A Patient\u2019s Guide",
    metaDescription:
      "An overview of common gynecologic procedures including colposcopy, endometrial biopsy, LEEP, and D&C. Learn what each involves and how to prepare.",
    excerpt:
      "From colposcopy to endometrial biopsy, understanding common gynecologic procedures can ease anxiety. This guide covers what each procedure involves, why it\u2019s done, and recovery.",
    category: "Procedures",
    tags: [
      "gynecologic procedures",
      "colposcopy",
      "endometrial biopsy",
      "LEEP",
    ],
    lastReviewed: "2026-01-15",
    readingTime: 10,
    relatedArticles: [
      "hysteroscopy-explained",
      "pap-smear-guide",
      "irregular-bleeding-evaluation",
    ],
  },
  {
    slug: "signs-of-labor",
    title:
      "Signs of Labor: How to Know When It\u2019s Time to Go to the Hospital",
    metaDescription:
      "Recognize true labor signs vs. false alarms. An OB/GYN explains contractions, water breaking, and when to head to the hospital.",
    excerpt:
      "Knowing the difference between Braxton Hicks contractions and real labor can be challenging. Learn the key signs that labor is starting and when to call your doctor.",
    category: "Labor & Delivery",
    tags: [
      "labor signs",
      "contractions",
      "water breaking",
      "labor and delivery",
    ],
    lastReviewed: "2026-02-05",
    readingTime: 7,
    relatedArticles: [
      "trimester-guide",
      "c-section-recovery",
      "postpartum-recovery",
    ],
  },
  {
    slug: "c-section-recovery",
    title:
      "C-Section Recovery: Timeline, Tips, and What to Watch For",
    metaDescription:
      "A comprehensive guide to recovering after a cesarean delivery. Covers healing timeline, pain management, activity restrictions, and warning signs.",
    excerpt:
      "Recovery after a cesarean section takes time and care. Learn the typical healing timeline, practical tips for the first weeks, and signs that warrant a call to your OB/GYN.",
    category: "Postpartum",
    tags: [
      "C-section",
      "cesarean recovery",
      "postpartum healing",
      "surgical recovery",
    ],
    lastReviewed: "2026-01-30",
    readingTime: 8,
    relatedArticles: [
      "postpartum-recovery",
      "signs-of-labor",
      "trimester-guide",
    ],
  },
  {
    slug: "prenatal-vitamins-guide",
    title:
      "Prenatal Vitamins: What You Need, When to Start, and How to Choose",
    metaDescription:
      "An OB/GYN\u2019s guide to prenatal vitamins including folic acid, iron, DHA, and more. Learn what to look for, when to start, and common questions answered.",
    excerpt:
      "Prenatal vitamins support your baby\u2019s development and your health during pregnancy. Find out which nutrients matter most, when to begin taking them, and how to pick the right supplement.",
    category: "Preconception",
    tags: [
      "prenatal vitamins",
      "folic acid",
      "pregnancy nutrition",
      "supplements",
    ],
    lastReviewed: "2026-02-25",
    readingTime: 7,
    relatedArticles: [
      "preconception-checkup-guide",
      "what-tests-before-pregnancy",
      "early-pregnancy-symptoms",
    ],
  },
];
