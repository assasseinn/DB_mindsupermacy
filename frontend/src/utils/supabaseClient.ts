/**
 * Re-export the single Supabase client instance from integrations.
 * This ensures we only have one instance of the Supabase client throughout the application.
 */
export { supabase } from '@/integrations/supabase/client';
