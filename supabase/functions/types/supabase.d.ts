declare module "https://esm.sh/@supabase/supabase-js@2.38.4" {
  export interface SupabaseClient {
    from(table: string): {
      insert(data: any[]): {
        select(): {
          single(): Promise<{ data: any; error: Error | null }>;
        };
      };
      update(data: any): {
        eq(column: string, value: any): Promise<{ error: Error | null }>;
      };
    };
    functions: {
      invoke: (name: string, options: { body: any }) => Promise<{ error: Error | null }>;
    };
  }

  export function createClient(
    supabaseUrl: string,
    supabaseKey: string,
    options?: any
  ): SupabaseClient;
} 