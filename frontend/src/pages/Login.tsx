import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import { trackLogin, trackFormSubmit } from "@/utils/analytics";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    trackFormSubmit('login_form', true);
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    
    if (error) {
      setError(error.message);
      trackFormSubmit('login_form', false);
    } else {
      trackLogin('email');
      navigate("/payment");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="bg-secondary/10 p-8 rounded-xl border border-accent/20 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
          required
        />
        {error && <div className="text-red-400 text-sm">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent py-2 rounded font-bold text-lg text-black hover:bg-accent/90 transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="text-sm text-white/60 mt-2">
          Don&apos;t have an account? <a href="/signup" className="text-accent underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}
