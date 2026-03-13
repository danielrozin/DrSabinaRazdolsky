import Link from "next/link";

const topicLinks = [
  { label: "Obstetrics", href: "/obstetrics" },
  { label: "Gynecology", href: "/gynecology" },
  { label: "Preconception", href: "/preconception" },
  { label: "Pregnancy", href: "/pregnancy" },
  { label: "Labor & Delivery", href: "/labor-and-delivery" },
  { label: "Postpartum", href: "/postpartum" },
  { label: "Procedures", href: "/procedures" },
];

const resourceLinks = [
  { label: "Articles", href: "/articles" },
  { label: "Research", href: "/research" },
  { label: "About Dr. Razdolsky", href: "/about" },
];

const policyLinks = [
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Medical Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-lg font-semibold text-[#0F766E]">
                Dr. Sabina Razdolsky
              </span>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Evidence-based obstetrics and gynecology education. Helping women
              make informed decisions about their health.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Topics
            </h3>
            <ul className="mt-3 space-y-2">
              {topicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-[#0F766E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-[#0F766E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Policies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Trust & Policies
            </h3>
            <ul className="mt-3 space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-[#0F766E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-lg border border-amber-100 bg-amber-50/50 px-4 py-3">
          <p className="text-xs leading-relaxed text-amber-800">
            <strong>Medical Disclaimer:</strong> This website provides
            educational information only and is not a substitute for
            professional medical care. Always consult your physician or
            qualified healthcare provider with questions about a medical
            condition. Never disregard professional medical advice or delay
            seeking it because of something you have read on this site.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Dr. Sabina Razdolsky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
