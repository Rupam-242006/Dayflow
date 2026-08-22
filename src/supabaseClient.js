import { createClient } from '@supabase/supabase-js';

// Replace these with the actual URL and Key from your Supabase API settings
const supabaseUrl = 'https://qhubqewiybsdgwfiwggx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodWJxZXdpeWJzZGd3Zml3Z2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczNzM0MjYsImV4cCI6MjEwMjk0OTQyNn0.Co1R6DTjABNbvWrLoruhaED6ZHa6VJCPNLC9IdkgQ50';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);