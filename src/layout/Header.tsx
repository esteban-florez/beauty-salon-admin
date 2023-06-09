import { BuildingStorefrontIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../utils/supabase'
type Props = React.PropsWithChildren<{ session: Session | null }>

export default function Header({ session }: Props
): React.ReactElement {
  function handleSignOut(): void {
    async function signOut(): Promise<void> {
      const { error } = await supabase.auth.signOut()

      if (error != null) {
        console.log(error)
        // TODO -> handle error
      }
    }

    void signOut()
  }

  return (
    <header className="flex items-center justify-between bg-neutral px-20 py-4 text-neutral-content shadow">
      <div className="flex items-center gap-1">
        <BuildingStorefrontIcon className="h-6 w-6" />
        <p className="text-2xl font-bold tracking-tight">
          Peluquería "Jeanelly Adames"
        </p>
      </div>
      {session !== null && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <UserCircleIcon className="h-6 w-6" />
            <p className="font-semibold">{session?.user.email}</p>
          </div>
          <button className="btn-primary btn-sm btn" onClick={handleSignOut}>
            Cerrar sesión
          </button>
        </div>
      )}
    </header>
  )
}
