import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ilbuojdhtjuzrrshhijc.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsYnVvamRodGp1enJyc2hoaWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNDY2MjgsImV4cCI6MjAwMTcyMjYyOH0.Nl6heKx6o5h7pSp4rAEOqXvfbWu4I8HMkmrulqvQB04'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
