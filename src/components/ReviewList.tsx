import { ReviewType } from '../types'
import Loading from './Loading'
import Review from './Review'

type Props = React.PropsWithChildren<{
  reviews: ReviewType[] | null
  viewDetails: (reviewId: number) => void
}>

export default function ReviewList({ reviews, viewDetails }: Props): React.ReactElement {
  return (
    <>
      {(reviews === null)
        ? <Loading />
        : (
          // TODO -> handle empty state
          <div className="mt-5 grid grid-cols-3 justify-items-center gap-5">
            {reviews.map(review => (
              <Review key={review.id} review={review} viewDetails={viewDetails} />
            ))}
          </div>
          )}
    </>
  )
}
