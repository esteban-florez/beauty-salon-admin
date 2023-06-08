import { useState, useEffect } from 'react'
import Loading from './Loading'
import Review from './Review'
import { ReviewInterface } from '../types'

const exampleReviews = [
  {
    id: 1,
    name: 'Esteban Florez',
    email: 'email@example.com',
    phone: '0412-1231231',
    review: '¡Epale menorkis todo bien!',
    created_at: new Date(),
  },
  {
    id: 2,
    name: 'Esteban Florez',
    email: 'email@example.com',
    phone: '0412-1231231',
    review: '¡Epale menorkis todo bien!',
    created_at: new Date(),
  },
  {
    id: 3,
    name: 'Esteban Florez',
    email: 'email@example.com',
    phone: '0412-1231231',
    review: '¡Epale menorkis todo bien!',
    created_at: new Date(),
  },
  {
    id: 4,
    name: 'Esteban Florez',
    email: 'email@example.com',
    phone: '0412-1231231',
    review: '¡Epale menorkis todo bien!',
    created_at: new Date(),
  },
  {
    id: 5,
    name: 'Esteban Florez',
    email: 'email@example.com',
    phone: '0412-1231231',
    review: '¡Epale menorkis todo bien!',
    created_at: new Date(),
  },
]

export default function ReviewList(): React.ReactElement {
  const [reviews, setReviews] = useState<ReviewInterface[]>([])

  useEffect(() => {
    setTimeout(() => {
      setReviews(exampleReviews)
    }, 1000)
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
