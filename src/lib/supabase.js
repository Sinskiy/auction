import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thvspyrrqudcyrncqabt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRodnNweXJycXVkY3lybmNxYWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNjAxNDQsImV4cCI6MjAxMDkzNjE0NH0.0elmcd8oiZKzP9jTs4L0HOyL9jx0fa426bJB8sdHjPA'
export const supabase = createClient(supabaseUrl, supabaseKey)