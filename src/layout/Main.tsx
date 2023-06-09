import { Session } from '@supabase/supabase-js'

type Props = React.PropsWithChildren<{ session: Session | null }>

export default function Main(
  { children, session }: Props
): React.ReactElement {
  const title = session !== null ? 'Lista de reseñas' : 'Iniciar sesión'
  return (
    <main className="mx-auto h-full">
      <h1 className="bg-white px-20 py-5 text-4xl font-bold tracking-tight shadow-md">
        {title}
      </h1>
      <section className="h-full px-20">
        {children}
      </section>
    </main>
  )
}
