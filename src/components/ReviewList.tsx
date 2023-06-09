import { ReviewType } from '../types'
import Loading from './Loading'
import Review from './Review'

type Props = React.PropsWithChildren<{ reviews: ReviewType[] | null }>

export default function ReviewList({ reviews }: Props): React.ReactElement {
  return (
    <>
      {(reviews === null)
        ? <Loading />
        : (
          // TODO -> handle empty state
          <div className="mt-5 grid grid-cols-3 justify-items-center gap-5">
            {reviews.map(review => (
              <Review key={review.id} review={review} />
            ))}
          </div>
          )}
    </>
  )
}
