import Header from './layout/Header'
import Main from './layout/Main'
import ReviewList from './components/ReviewList'
import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from './utils/supabase'

export default function App(): React.ReactElement {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })

    window.addEventListener('SIGNED_OUT', () => {
      console.log('signed out')
      setSession(null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const hasSession = Boolean(session)
  const title = hasSession ? 'Lista de reseñas' : 'Iniciar sesión'

  return (
    <>
      <Header session={session} />
      <Main title={title}>
        {hasSession
          ? <ReviewList />
          : (
            <div className="card card-body mx-auto mt-5 max-w-lg bg-white shadow-md">
              <Auth
                supabaseClient={supabase}
                providers={[]}
                appearance={{
                  extend: false,
                  className: {
                    button: 'btn btn-primary btn-block mt-4',
                    label: 'label font-semibold',
                    container: 'flex flex-col gap-3',
                    input: 'input input-bordered w-full',
                  }
                }}
                localization={{
                  variables: {
                    sign_in: {
                      email_label: 'Correo electrónico: ',
                      password_label: 'Contraseña: ',
                      button_label: 'Iniciar sesión',
                      email_input_placeholder: 'Ej. correo@ejemplo.com',
                      password_input_placeholder: 'Ingresa tu contraseña...'
                    },
                  },
                }}
                showLinks={false}
              />
            </div>
            )}
      </Main>
    </>
  )
}
