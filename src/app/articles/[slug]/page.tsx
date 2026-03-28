import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { generatePageMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateFAQSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import LastReviewed from "@/components/LastReviewed";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleCard from "@/components/ArticleCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles
    .filter((a) => a.sections && a.sections.length > 0)
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return generatePageMetadata(
    article.title,
    article.metaDescription,
    `/articles/${article.slug}`,
    "article"
  );
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article || !article.sections) {
    notFound();
  }

  const relatedArticles = articles.filter((a) =>
    article.relatedArticles.includes(a.slug)
  );

  const articleSchema = generateArticleSchema(article);
  const faqSchema = article.faqs ? generateFAQSchema(article.faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Articles", href: "/articles" },
            { label: article.title, href: `/articles/${article.slug}` },
          ]}
        />
        <LastReviewed date={article.lastReviewed} />

        {/* Category badge */}
        <span className="mt-4 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-[#0F766E]">
          {article.category}
        </span>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          {article.title}
        </h1>

        {/* Reading time */}
        <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-400">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {article.readingTime} min read
        </p>

        {/* Introduction */}
        {article.introduction && (
          <p className="mt-6 text-base leading-relaxed text-gray-600 max-w-3xl">
            {article.introduction}
          </p>
        )}

        {/* Key Takeaways */}
        {article.keyTakeaways && (
          <KeyTakeaways items={article.keyTakeaways} />
        )}

        {/* Article sections */}
        <div className="mt-8 space-y-10">
          {article.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-gray-600">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-4">
              <FAQAccordion items={article.faqs} />
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Related Articles
            </h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.slug} article={related} />
              ))}
            </div>
          </div>
        )}

        {/* Back to articles */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F766E] hover:underline"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all articles
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-lg bg-gray-50 p-4 text-xs text-gray-400 leading-relaxed">
          <strong>Disclaimer:</strong> This article is for educational purposes
          only and does not constitute medical advice. Always consult your
          healthcare provider for personalized guidance regarding your health.
        </div>
      </div>
    </>
  );
}
