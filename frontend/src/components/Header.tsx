import React, { startTransition, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import logo from "../assets/logo-mindsupremacy.png"; // Place the provided logo image as this file

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/course", label: "Course" },
  { path: "/payment", label: "Payment" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
          {isLoggedIn && (
            <span
              onClick={() => startTransition(() => navigate("/payment-history"))}
              className={`text-white/80 hover:text-accent transition-colors px-2 py-1 rounded-md font-medium cursor-pointer ${location.pathname === "/payment-history" ? 'text-accent bg-accent/10' : ''}`}
            >
              Payment History
            </span>
          )}
          <span
            onClick={() => startTransition(() => navigate(isLoggedIn ? "/course" : "/login"))}
            className="text-white/80 hover:text-accent transition-colors px-2 py-1 rounded-md font-medium cursor-pointer"
          >
            {isLoggedIn ? "Dashboard" : "Login"}
          </span>
        </nav>
      </div>
    </header>
  );
}
