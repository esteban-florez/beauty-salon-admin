import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../utils/supabase'

export default function LogIn(): React.ReactElement {
  return (
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
  )
}
