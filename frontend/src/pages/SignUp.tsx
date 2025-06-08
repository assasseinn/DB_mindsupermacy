import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false); // Reset success state

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      console.log("Starting signup process...");
      
      // First create the auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({ 
        email: formData.email, 
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            phone_number: formData.phone
          }
        }
      });
      
      console.log("Auth signup response:", { authData, authError });
      
      if (authError) {
        console.error("Auth error:", authError);
        throw authError;
      }
      
      if (!authData?.user) {
        console.error("No user data returned");
        throw new Error("No user data returned from signup");
      }

      console.log("Auth user created successfully, creating profile...");

      // Then store additional user data in the profiles table
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert([
          { 
            id: authData.user.id,
            email: formData.email,
            full_name: formData.name,
            phone_number: formData.phone,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]);

      console.log("Profile creation response:", { profileError });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        // If profile creation fails, we should clean up the auth user
        try {
          await supabase.auth.admin.deleteUser(authData.user.id);
        } catch (deleteError) {
          console.error("Error deleting auth user:", deleteError);
        }
        throw profileError;
      }

      console.log("Signup process completed successfully");
      setSuccess(true);
      
      // Wait for 3 seconds before redirecting to login
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "An error occurred during signup");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-secondary/10 p-8 rounded-xl border border-accent/20 w-full max-w-md text-center space-y-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-500">Registration Successful!</h2>
          <p className="text-white/80">
            Your account has been created successfully. You will be redirected to the login page in a few seconds...
          </p>
          <div className="text-sm text-white/60">
            <a href="/login" className="text-accent underline">Click here to login now</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSignUp} className="bg-secondary/10 p-8 rounded-xl border border-accent/20 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
            required
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
            required
            minLength={6}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-secondary/20 bg-black/60 text-white"
            required
            minLength={6}
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded border border-red-500/20">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent py-2 rounded font-bold text-lg text-black hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
        
        <div className="text-sm text-white/60 mt-2">
          Already have an account? <a href="/login" className="text-accent underline">Login</a>
        </div>
      </form>
    </div>
  );
} 