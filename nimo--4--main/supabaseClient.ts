import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || "https://tjgzqaeyadranyjhmmbh.supabase.co";
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZ3pxYWV5YWRyYW55amhtbWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNDM0MTAsImV4cCI6MjA4MTgxOTQxMH0.2cCWdBB7dRdeLe6upaaz3StxUOUscF1kiSYthw1vvJg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);