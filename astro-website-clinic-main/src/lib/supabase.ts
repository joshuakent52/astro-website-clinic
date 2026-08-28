import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client for the volunteer application form.
 *
 * This project is statically rendered (see CLAUDE.md > Core principles),
 * so this file runs in the browser, not on a server — that's why it
 * reads the anon key rather than a service-role key. The anon key is
 * safe to ship to the client as long as Row Level Security policies on
 * `volunteer_applications` and the `resumes` storage bucket are set up
 * to only allow inserts/uploads, not reads, from anonymous requests.
 *
 * Astro only exposes env vars to client-side code when they're prefixed
 * with `PUBLIC_` (see https://docs.astro.build/en/guides/environment-variables/).
 * Set these in the Vercel project's environment variables:
 *
 *   PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
 *   PUBLIC_SUPABASE_ANON_KEY=<anon key>
 *
 * See .env.example for local development.
 */

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY. Set them in the " +
      "Vercel project's environment variables (see src/lib/supabase.ts)."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
