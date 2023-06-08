import { useState, useEffect } from 'react'
import Loading from './Loading'
import Review from './Review'
import { supabase } from '../utils/supabase'
import { ReviewInterface } from '../types'

export default function ReviewList(): React.ReactElement {
  const [reviews, setReviews] = useState<ReviewInterface[]>([])

  useEffect(() => {
    async function fetchReviews(): Promise<void> {
      const { data, error } = await supabase.from('reviews').select()

      if (error !== null) {
        console.log(error)
      }

      if (data !== null) {
        setReviews(data)
      }
    }

    void fetchReviews()
  }, [])

  return (
    <>
      {(reviews.length === 0) && <Loading />}
      <div className="mt-5 grid grid-cols-3 justify-items-center gap-5">
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </>
  )
}
