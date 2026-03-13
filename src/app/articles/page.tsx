import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import LastReviewed from "@/components/LastReviewed";
import { articles, articleCategories } from "@/lib/articles";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(
  "Articles",
  "Evidence-based articles on obstetrics, gynecology, pregnancy, preconception, postpartum care, and gynecologic procedures. Written and reviewed by Dr. Sabina Razdolsky.",
  "/articles"
);

export default function ArticlesPage() {
  const pageSchema = generateMedicalWebPageSchema({
    title: "Articles Library",
    description: "Evidence-based women's health articles.",
    url: "/articles",
    lastReviewed: "2026-03-01",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Articles", href: "/articles" }]} />
        <LastReviewed date="2026-03-01" />

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Articles Library
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl">
          Explore our growing collection of evidence-based articles on
          women&apos;s health topics. Each article is written with clarity and
          accuracy in mind, reviewed by Dr. Sabina Razdolsky, and grounded in
          current medical literature. Our goal is to help you understand your
          health and make informed decisions.
        </p>

        {/* Category filter (visual only) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {articleCategories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-[#0F766E] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-[#0F766E]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* More coming soon */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            More articles are added regularly. Check back for new evidence-based
            content on women&apos;s health topics.
          </p>
        </div>
      </div>
    </>
  );
}
