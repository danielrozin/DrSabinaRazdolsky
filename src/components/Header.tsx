"use client";

import { useState } from "react";
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

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
];

const trailingLinks = [
  { label: "Articles", href: "/articles" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight text-[#0F766E]">
            Dr. Sabina Razdolsky
          </span>
          <span className="text-xs font-medium tracking-wide text-gray-500">
            Obstetrics &amp; Gynecology
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
            >
              {link.label}
            </Link>
          ))}

          {/* Topics dropdown */}
          <div className="relative">
            <button
              onClick={() => setTopicsOpen(!topicsOpen)}
              onBlur={() => setTimeout(() => setTopicsOpen(false), 150)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
              aria-expanded={topicsOpen}
              aria-haspopup="true"
            >
              Topics
              <svg
                className={`h-4 w-4 transition-transform ${topicsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {topicsOpen && (
              <div className="absolute left-0 top-full mt-1 w-52 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                {topicLinks.map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
                    onClick={() => setTopicsOpen(false)}
                  >
                    {topic.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {trailingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="py-1">
            <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Topics
            </span>
            {topicLinks.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="block rounded-md px-6 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
                onClick={() => setMobileOpen(false)}
              >
                {topic.label}
              </Link>
            ))}
          </div>

          {trailingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0F766E]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
