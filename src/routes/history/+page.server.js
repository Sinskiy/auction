import { supabase } from "$lib/supabase"

export async function load() {
  const { data } = await supabase.from("bids").select('price, name, created_at').order('created_at', { ascending: false })
  return { bids: data}
}