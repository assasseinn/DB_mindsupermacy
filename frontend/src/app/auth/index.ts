import { supabase } from "@/utils/supabaseClient";

const validateConfig = () => {
  console.log("No auth extension enabled");
};

export const auth = {
  validateConfig,
};

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export const signup = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}
