import { ReviewType } from '../types'
import formatDate from '../utils/formatDate'

type Props = React.PropsWithChildren<{
  review: ReviewType
  viewDetails: (reviewId: number) => void
}>

export default function Review({ review, viewDetails }: Props): React.ReactElement {
  const { id, name, review: description, created_at: createdAt } = review

  return (
    <div className="card card-body flex w-full flex-col justify-between border-l-4 border-primary bg-white shadow-md">
      <h3 className="line-clamp-1 text-xl font-bold">
        {description}
      </h3>
      <div>
        <p className="font-bold text-primary">
          {name}
        </p>
        <p className="font-bold text-gray-500">
          {formatDate(createdAt)}
        </p>
        <button className="btn-info btn-sm btn me-2" onClick={() => viewDetails(id)}>
          Detalles
        </button>
        <button className="btn-error btn-sm btn mt-4">
          Eliminar
        </button>
      </div>

    </div>
  )
}
