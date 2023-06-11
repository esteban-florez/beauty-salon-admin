import { createClient } from '@supabase/supabase-js'
import { Database } from '../types'

let SUPABASE_URL = 'https://ilbuojdhtjuzrrshhijc.supabase.co'
let SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsYnVvamRodGp1enJyc2hoaWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxNDY2MjgsImV4cCI6MjAwMTcyMjYyOH0.Nl6heKx6o5h7pSp4rAEOqXvfbWu4I8HMkmrulqvQB04'

if (import.meta.env.DEV) {
  SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
  SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY)
