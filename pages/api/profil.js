import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { user_id } = req.query;
  // Récupérer le profil global
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user_id)
    .single();

  // Récupérer l'historique des parties
  const { data: matches, error: matchesError } = await supabase
    .from('match_history')
    .select('*')
    .eq('profile_id', user_id)
    .order('date', { ascending: false });

  if (profileError) return res.status(500).json({ error: profileError.message });
  if (matchesError) return res.status(500).json({ error: matchesError.message });

  // Assemble structure UserProfile attendue par Flutter
  res.status(200).json({
    ...profile,
    history: matches
  });
}
