import type { Publication } from "@/lib/publications";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const {
    title,
    authors,
    journal,
    year,
    volume,
    pages,
    doi,
    summary,
    pubmedUrl,
    tags,
    isUpcoming,
  } = publication;

  return (
    <article className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      {/* Upcoming badge */}
      {isUpcoming && (
        <span className="mb-3 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
          Upcoming
        </span>
      )}

      {/* Title */}
      <h3 className="text-base font-semibold leading-snug text-gray-900 sm:text-lg">
        {title}
      </h3>

      {/* Journal & year */}
      <p className="mt-2 text-sm italic text-gray-500">
        {journal}
        {volume && `, ${volume}`}
        {pages && pages !== "Online ahead of print" && `: ${pages}`}
        {pages === "Online ahead of print" && " \u2014 Online ahead of print"}
        {" "}({year})
      </p>

      {/* Authors */}
      <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
        {authors}
      </p>

      {/* Summary */}
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{summary}</p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {!isUpcoming && (
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          {pubmedUrl && (
            <a
              href={pubmedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0F766E] transition-colors hover:text-teal-900"
            >
              PubMed
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0F766E] transition-colors hover:text-teal-900"
            >
              DOI
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
