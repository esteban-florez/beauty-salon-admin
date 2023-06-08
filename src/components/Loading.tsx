import { ArrowPathIcon } from '@heroicons/react/24/solid'

export default function Loading(): React.ReactElement {
  return (
    <div className="grid w-full place-items-center py-24">
      <div className="card bg-white px-10 py-5 shadow-md">
        <ArrowPathIcon className="mx-auto h-28 w-28 animate-spin" />
        <p className="text-2xl font-semibold">Cargando reseñas...</p>
      </div>
    </div>
  )
}
