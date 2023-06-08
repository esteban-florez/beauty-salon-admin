import { ReviewInterface } from '../types'

export default function Review(
  { review }: { review: ReviewInterface }
): React.ReactElement {
  const { id, name, email, review: description } = review

  return (
    <div className="card card-body flex w-full flex-col justify-between border-l-4 border-primary bg-white shadow-md">
      <h3 className="line-clamp-1 text-xl font-bold">
        {id === 1 ? description + description + description : description}
      </h3>
      <div>
        <p className="font-bold text-primary">
          {name}
        </p>
        <p className="font-bold text-gray-500">
          {email ?? 'Sin correo'}
        </p>
        <button className="btn-info btn-sm btn me-2">
          Detalles
        </button>
        <button className="btn-error btn-sm btn mt-4">
          Eliminar
        </button>
      </div>

    </div>
  )
}
