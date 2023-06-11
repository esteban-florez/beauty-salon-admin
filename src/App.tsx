import { useEffect, useRef, useState } from 'react'
import { ReviewType } from './types'
import { supabase } from './utils/supabase'
import useAuth from './hooks/useAuth'
import Header from './layout/Header'
import Main from './layout/Main'
import ReviewList from './components/ReviewList'
import LogIn from './components/LogIn'
import ReviewDetails from './components/ReviewDetails'

export default function App(): React.ReactElement {
  const [reviews, setReviews] = useState<ReviewType[] | null>(null)
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const session = useAuth()
  const selectedReview = reviews?.find(review => review.id === selectedReviewId) ?? null

  function closeDetails(): void {
    setSelectedReviewId(null)
  }

  function viewDetails(reviewId: number): void {
    setSelectedReviewId(reviewId)
  }

  useEffect(() => {
    if (selectedReviewId !== null) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [selectedReviewId])

  useEffect(() => {
    if (session === null) return
    let ignore = false
    if (ignore) return

    async function fetchReviews(): Promise<void> {
      const { data, error } = await supabase.from('reviews').select()

      console.log(data)

      if (error !== null) {
        console.log(error)
        // TODO -> handle error
      }

      if (data !== null) {
        setReviews(data)
      }
    }

    void fetchReviews()

    return () => {
      ignore = true
    }
  }, [session])

  return (
    <>
      <Header session={session} />
      <Main session={session}>
        {session !== null
          ? (
            <ReviewList
              reviews={reviews}
              viewDetails={viewDetails}
            />
            )
          : <LogIn />}
      </Main>
      <ReviewDetails ref={dialogRef} review={selectedReview} closeDetails={closeDetails} />
    </>
  )
}
