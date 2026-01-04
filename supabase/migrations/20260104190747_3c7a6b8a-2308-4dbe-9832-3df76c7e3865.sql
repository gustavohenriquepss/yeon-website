-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Service role can view waitlist" ON public.waitlist;

-- Create a new SELECT policy that allows service role access
CREATE POLICY "Service role can view waitlist" 
ON public.waitlist 
FOR SELECT 
USING (auth.role() = 'service_role');