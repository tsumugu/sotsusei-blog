import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://dqkqivfaialvrrfsslaf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxa3FpdmZhaWFsdnJyZnNzbGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNTE3NzAsImV4cCI6MjA1NjgyNzc3MH0.kDf7lPNZEPrEcfK1MwmLBM-5BjJ3sII98fYUO1DtbEc"
);
