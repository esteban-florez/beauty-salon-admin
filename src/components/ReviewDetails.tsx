import { forwardRef } from 'react'
import { ReviewType } from '../types'
import formatDate from '../utils/formatDate'

type Props = React.PropsWithChildren<{
  review: ReviewType | null
  closeDetails: () => void
}>

const ReviewDetails = forwardRef<HTMLDialogElement, Props>(render)

function render({ review, closeDetails }: Props, dialogRef: React.ForwardedRef<HTMLDialogElement>): React.ReactElement | null {
  if (review === null) return null

  // TODO -> the modal transition doesn't work

  const { name, email, review: description, created_at: createdAt } = review

  return (
    <dialog className="modal backdrop-brightness-75" ref={dialogRef}>
      <div className="modal-box">
        <h3 className="alert bg-primary text-xl font-bold text-white">
          {description}
        </h3>
        <p className="mt-3 font-semibold">
          <span className="font-bold text-primary">{name}</span>
        </p>
        <p className="font-semibold">
          {email ?? 'Sin correo'}
        </p>
        <p className="font-semibold text-gray-600">
          {formatDate(createdAt)}
        </p>
        <button className="btn-accent btn mt-4" onClick={closeDetails}>Salir</button>
      </div>
    </dialog>
  )
}

export default ReviewDetails
