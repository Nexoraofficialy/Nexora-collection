/* =========================================
   NEXORA COLLECTION
   SUPABASE CONNECTION
========================================= */

/*
  STEP 1:
  नीचे अपना Supabase Project URL डालें.

  Example:
  https://your-project.supabase.co
*/

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";


/*
  STEP 2:
  नीचे अपना Supabase Publishable Key
  या Anon Key डालें.

  IMPORTANT:
  ❌ Service Role Key यहां कभी न डालें.
*/

const SUPABASE_ANON_KEY = "YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY";


/* =========================================
   CREATE SUPABASE CLIENT
========================================= */

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);


/* =========================================
   OPTIONAL CONNECTION CHECK
========================================= */

console.log(
  "Nexora Collection Supabase Client Connected"
);
