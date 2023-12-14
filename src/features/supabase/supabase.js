import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hylsiudemrsdclwjzmae.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bHNpdWRlbXJzZGNsd2p6bWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0ODUxNjMsImV4cCI6MjAxODA2MTE2M30.jwLch_sTJC0NZ2cMscXNz4-JpR46-hLPU_XrF5vIhpc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
