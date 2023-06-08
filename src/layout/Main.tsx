export default function Main (
  { children }: React.PropsWithChildren
): React.ReactElement {
  return (
    <main className="mx-auto">
      <h1 className="mt-2 bg-base-300 px-20 py-5 text-3xl font-bold tracking-tight shadow-md">
        Lista de reseñas
      </h1>
      <section className="px-20">
        {children}
      </section>
    </main>
  )
}
