export default function Main(
  { children }: React.PropsWithChildren
): React.ReactElement {
  return (
    <main className="mx-auto h-full">
      <h1 className="bg-white px-20 py-5 text-4xl font-bold tracking-tight shadow-md">
        Lista de reseñas
      </h1>
      <section className="h-full px-20">
        {children}
      </section>
    </main>
  )
}
