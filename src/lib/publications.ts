export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi: string;
  pmid: string;
  summary: string;
  plainLanguageSummary: string;
  tags: string[];
  pubmedUrl: string;
  isUpcoming?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "Preterm labour induction: modalities, implications and outcomes",
    authors:
      "Shanny Kolp-Asis, Roi Yozevitch, Reut Baram, Elad Miron, Limor Vaknin-Geron, Shani Levin, Sabina Razdolsky, Nissim Arbib",
    journal:
      "European Journal of Obstetrics & Gynecology and Reproductive Biology",
    year: 2026,
    volume: "317",
    pages: "114847",
    doi: "10.1016/j.ejogrb.2025.114847",
    pmid: "41313864",
    summary:
      "Retrospective cohort study of 563 preterm inductions (29\u201336 weeks). Prostaglandins associated with lowest caesarean rates (10.7% vs 30.4% balloon catheter + oxytocin, 21.5% oxytocin alone). No significant differences in adverse neonatal outcomes across groups.",
    plainLanguageSummary:
      "This study looked at different ways to start labor early (between 29 and 36 weeks) and found that using prostaglandin medication led to the lowest rate of cesarean deliveries, without increasing risks for the baby.",
    tags: ["preterm labor", "labor induction", "prostaglandins", "obstetrics"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41313864/",
  },
  {
    title:
      "The risk of preterm delivery after appendectomy during pregnancy is higher in the face of a negative appendectomy",
    authors:
      "Yoav Baruch, Sabina Razdolsky, Emmanuel Attali, Matan Anteby, Yariv Yogev, Nadav Michaan",
    journal: "American Journal of Surgery",
    year: 2025,
    volume: "240",
    pages: "116120",
    doi: "10.1016/j.amjsurg.2024.116120",
    pmid: "39632335",
    summary:
      "Retrospective cohort of 185 pregnant women who had appendectomy vs 555 controls. Preterm delivery higher in appendectomy group (11.9% vs 5.4%). Negative appendectomies carried higher preterm risk than inflamed cases. Appendectomy itself was the sole significant risk factor (OR 2.3).",
    plainLanguageSummary:
      "This research compared pregnant women who had their appendix removed to those who did not and found that the surgery itself increased the risk of early delivery, especially when the appendix turned out not to be inflamed.",
    tags: [
      "pregnancy",
      "appendectomy",
      "preterm delivery",
      "surgery in pregnancy",
    ],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39632335/",
  },
  {
    title:
      "Is expectant management of late preterm prelabor rupture of membranes an option in patients with Group B streptococcus colonization?",
    authors:
      "Elior Eliasi, Sabina Razdolsky, Elena Minich, Shanny Kolp Asis, Ella Segal, Ariel Many, Miriam Lopian",
    journal: "International Journal of Gynecology & Obstetrics",
    year: 2025,
    volume: undefined,
    pages: "Online ahead of print",
    doi: "10.1002/ijgo.70684",
    pmid: "41277613",
    summary:
      "Study of 217 pregnancies (34\u201337 weeks) comparing GBS carriers (98) vs non-carriers (119). No significant difference in chorioamnionitis, neonatal fever, or adverse outcomes. Expectant management with antibiotic prophylaxis appears safe for GBS-colonized women with late PPROM.",
    plainLanguageSummary:
      "When membranes break early between 34 and 37 weeks, this study found that a wait-and-see approach with antibiotics is safe for women who carry Group B strep bacteria, with no increase in infections for mother or baby.",
    tags: [
      "PPROM",
      "Group B streptococcus",
      "expectant management",
      "neonatal outcomes",
    ],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/41277613/",
  },
  {
    title:
      "Maternal and neonatal outcomes following emergency cerclage placement: a single-center experience",
    authors: "Sabina Razdolsky et al.",
    journal: "TBD",
    year: 2026,
    doi: "",
    pmid: "",
    summary:
      "Upcoming study analyzing outcomes of emergency cervical cerclage procedures performed during the second trimester.",
    plainLanguageSummary:
      "An upcoming study examining how emergency cervical stitching during mid-pregnancy affects outcomes for mothers and babies.",
    tags: ["cerclage", "cervical insufficiency", "preterm birth"],
    pubmedUrl: "",
    isUpcoming: true,
  },
  {
    title:
      "Vaginal progesterone versus cervical pessary for short cervix: a comparative effectiveness study",
    authors: "Sabina Razdolsky et al.",
    journal: "TBD",
    year: 2026,
    doi: "",
    pmid: "",
    summary:
      "Upcoming comparative study evaluating vaginal progesterone against cervical pessary in women with shortened cervix detected on mid-trimester ultrasound.",
    plainLanguageSummary:
      "An upcoming study comparing two approaches\u2014progesterone medication vs. a pessary device\u2014for managing a short cervix found during pregnancy ultrasound.",
    tags: [
      "short cervix",
      "progesterone",
      "cervical pessary",
      "preterm prevention",
    ],
    pubmedUrl: "",
    isUpcoming: true,
  },
];
