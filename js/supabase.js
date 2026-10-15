// ===== SUPABASE CONFIG =====
// Mesmo projeto Supabase das outras apps (tabelas com prefixo mq_).
const SUPABASE_URL = 'https://kbbiefmggkvugmrgvcvv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYmllZm1nZ2t2dWdtcmd2Y3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MDQyOTAsImV4cCI6MjEwMDI4MDI5MH0.FFTAg8-uf8ERqmTJjhQSUFtLedalmQGQ_eQMZ6M4KlY';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
