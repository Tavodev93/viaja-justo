import { supabaseServer } from './supabaseServer'

export async function requireActiveAccess(userId: string) {
  const { data, error } = await supabaseServer
    .from('access_passes')
    .select('id')
    .eq('user_id', userId)
    .gt('access_until', new Date().toISOString())
    .limit(1)

  if (error) {
    console.error(error)
    return false
  }

  return data.length > 0
}
