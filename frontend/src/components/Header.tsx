import React, { startTransition } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-mindsupremacy.png"; // Place the provided logo image as this file

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/course", label: "Course" },
  { path: "/payment", label: "Payment" },
  { path: "/login", label: "Login" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="w-full bg-secondary/80 backdrop-blur-md shadow-md border-b border-accent/20 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <span className="flex items-center space-x-3 cursor-pointer" onClick={() => startTransition(() => navigate("/"))}>
          <img src={logo} alt="Mindsupremacy Logo" className="h-10 w-10 rounded-full border border-accent/40 bg-white/80" />
          <span className="font-bold text-xl text-accent tracking-wide">Mindsupremacy</span>
        </span>
        <nav className="flex items-center space-x-6">
          {navLinks.map(link => (
            <span
              key={link.path}
              onClick={() => startTransition(() => navigate(link.path))}
              className={`text-white/80 hover:text-accent transition-colors px-2 py-1 rounded-md font-medium cursor-pointer ${location.pathname === link.path ? 'text-accent bg-accent/10' : ''}`}
            >
              {link.label}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
