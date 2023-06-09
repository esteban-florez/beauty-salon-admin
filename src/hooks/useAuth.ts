import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import { Session } from '@supabase/supabase-js'

export default function useAuth(): Session | null {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    // TODO -> handle error on login
    void supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })

    const handleSignedOut = (): void => setSession(null)

    window.addEventListener('SIGNED_OUT', handleSignedOut)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('SIGNED_OUT', handleSignedOut)
    }
  }, [])

  return session
}
