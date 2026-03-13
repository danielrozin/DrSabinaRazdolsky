import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/articles/${article.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 rounded-lg"
      >
        {/* Category badge */}
        <span className="inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-[#0F766E]">
          {article.category}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#0F766E]">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg
              className="h-3.5 w-3.5"
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
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Reviewed {article.lastReviewed}
          </span>
        </div>
      </Link>
    </article>
  );
}
