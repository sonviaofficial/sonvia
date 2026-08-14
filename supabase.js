import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://kuhynelbomedbyjsqhas.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1aHluZWxib21lZGJ5anNxaGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NTEyMzYsImV4cCI6MjEwMjIyNzIzNn0.V0AvGoj1_qG2IspiSAyoOnqaSTNlQO8qoS_vaV7ZNl8';

export const supabase = createClient(supabaseUrl, supabaseKey);
