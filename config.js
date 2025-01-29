
const {createClient} = supabase
const supabaseUrl = 'https://pafwmninzoiqhmisizvh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZndtbmluem9pcWhtaXNpenZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MjA0NDYsImV4cCI6MjA1MjE5NjQ0Nn0.u72buGhl8nlGb-tyGPNsdQMGNqGmCrFr2TkRHeuHOVY'
const supabaseClient = createClient(supabaseUrl, supabaseKey)
window.supabase = supabaseClient
