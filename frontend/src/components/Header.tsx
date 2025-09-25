import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-mindsupremacy.png"; // Place the provided logo image as this file

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Reviews", to: "/#reviews" },
  { label: "Course", to: "/course" },
  { label: "FAQs", to: "/#faqs" },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-secondary/80 backdrop-blur-md shadow-md border-b border-accent/20 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 cursor-pointer">
          <img src={logo} alt="Mindsupremacy Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-accent/40 bg-white/80" />
          <span className="font-bold text-lg md:text-xl text-accent tracking-wide">Mindsupremacy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => {
            const isHashLink = link.to.includes("#");
            const targetHash = isHashLink ? `#${link.to.split("#")[1]}` : "";
            const isActive = isHashLink
              ? location.hash === targetHash
              : location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-white/80 hover:text-accent transition-colors px-2 py-1 rounded-md font-medium ${isActive ? "text-accent bg-accent/10" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-8 h-8 text-white/80 hover:text-accent transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-accent/20">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map(link => {
              const isHashLink = link.to.includes("#");
              const targetHash = isHashLink ? `#${link.to.split("#")[1]}` : "";
              const isActive = isHashLink
                ? location.hash === targetHash
                : location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-white/80 hover:text-accent transition-colors px-3 py-2 rounded-md font-medium ${isActive ? 'text-accent bg-accent/10' : 'hover:bg-secondary/20'}`}
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
