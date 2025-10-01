import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-mindsupremacy.png"; // Place the provided logo image as this file

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/#reviews" },
  { label: "Course", to: "/course" },
  { label: "Contact", to: "/contact" },
  { label: "FAQs", to: "/faqs" },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLinkActive = (path: string) => {
    const isHashLink = path.includes("#");
    if (isHashLink) {
      const targetHash = `#${path.split("#")[1]}`;
      return location.hash === targetHash;
    }
    return location.pathname === path;
  };

  return (
    <header className="relative sticky top-0 z-40 w-full">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

      <div className="relative overflow-hidden border-b border-accent/35 bg-[linear-gradient(140deg,_#0b0905_0%,_#1d1407_45%,_#0b0905_100%)] shadow-[0_18px_46px_rgba(0,0,0,0.65)]">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="absolute -right-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-accent/20 blur-[2px]" />
          <div className="absolute left-6 top-1/2 h-28 w-28 -translate-y-1/2 rotate-12 rounded-full border border-accent/12" />
        </div>

        <div className="container relative z-10 mx-auto flex h-16 items-center justify-between gap-4 px-4 md:h-20 md:px-6">
          <Link to="/" className="group relative flex items-center gap-3 rounded-full px-3 py-2 transition-all duration-300 hover:bg-white/5">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-accent/40 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
              <img
                src={logo}
                alt="Mindsupremacy Logo"
                className="relative h-10 w-10 rounded-full border border-accent/50 bg-white/95 shadow-[0_0_25px_rgba(179,141,77,0.25)] md:h-12 md:w-12"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-montserrat text-lg font-bold uppercase tracking-[0.2em] text-accent md:text-xl">
                MindSupremacy
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-white/45">
                Ancient Mastery
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-accent/25 bg-black/30 px-3 py-1.5 shadow-[0_0_30px_rgba(0,0,0,0.45)] md:flex">
            {navLinks.map(link => {
              const isActive = isLinkActive(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 transition-all duration-300 before:absolute before:left-1/2 before:-bottom-1 before:h-[2px] before:w-12 before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-accent before:to-transparent before:opacity-0 before:transition-opacity ${
                    isActive
                      ? "border-accent/40 bg-black/60 text-accent before:opacity-100 shadow-[0_0_18px_rgba(179,141,77,0.35)]"
                      : "border-transparent hover:border-accent/30 hover:bg-black/45 hover:text-accent hover:before:opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/35 bg-black/30 text-white/75 transition-all duration-300 hover:border-accent/60 hover:text-accent md:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="h-[6px] w-full bg-[repeating-linear-gradient(90deg,_transparent_0,_transparent_16px,_rgba(179,141,77,0.4)_16px,_rgba(179,141,77,0.4)_22px)] opacity-70" />
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-accent/30 bg-[linear-gradient(150deg,_rgba(12,8,5,0.96)_0%,_rgba(26,18,10,0.96)_100%)] shadow-[0_18px_30px_rgba(0,0,0,0.6)]">
          <nav className="container mx-auto flex flex-col gap-3 px-4 py-6">
            {navLinks.map(link => {
              const isActive = isLinkActive(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-300 ${
                    isActive
                      ? "border-accent/50 bg-black text-accent shadow-[0_0_20px_rgba(179,141,77,0.35)]"
                      : "border-accent/15 bg-black/35 text-white/70 hover:border-accent/35 hover:bg-black/45 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
