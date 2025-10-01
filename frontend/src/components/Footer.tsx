import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-secondary/90 text-white/80 border-t border-accent/20 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-lg text-accent">MindSupremacy</span> &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        <nav className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          <Link to="/faqs" className="hover:text-accent transition-colors">FAQs</Link>
          <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-use" className="hover:text-accent transition-colors">Terms of Use</Link>
          <Link to="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
