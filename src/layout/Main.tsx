type Props = React.PropsWithChildren<{ title: string }>

export default function Main(
  { children, title }: Props
): React.ReactElement {
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
