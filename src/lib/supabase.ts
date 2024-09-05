import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://wxrfsbidutyxjfjrctsa.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cmZzYmlkdXR5eGpmanJjdHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTk2NzIsImV4cCI6MjA0MTA3NTY3Mn0.b5NzP59Y0Ot1L2FH3AC1KKIlD3SJXp4x7TlgK1F5PPc"
);
