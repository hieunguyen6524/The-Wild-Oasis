import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://preusqqzmoipvmqatoqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZXVzcXF6bW9pcHZtcWF0b3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwODQ2NTcsImV4cCI6MjA1NDY2MDY1N30.r8EcnmALDpTmySK1qSHq_c_ouuYZl8EIx9FrKtnCqpg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
