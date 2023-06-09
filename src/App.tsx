import Header from './layout/Header'
import Main from './layout/Main'
import ReviewList from './components/ReviewList'
import useAuth from './hooks/useAuth'
import LogIn from './components/LogIn'
import { useEffect, useState } from 'react'
import { ReviewType } from './types'
import { supabase } from './utils/supabase'

export default function App(): React.ReactElement {
  const session = useAuth()
  const [reviews, setReviews] = useState<ReviewType[] | null>(null)

  useEffect(() => {
    async function fetchReviews(): Promise<void> {
      const { data, error } = await supabase.from('reviews').select()

      if (error !== null) {
        console.log(error)
        // TODO -> handle error
      }

      if (data !== null) {
        setReviews(data)
      }
    }

    void fetchReviews()
  }, [])

  return (
    <>
      <Header session={session} />
      <Main session={session}>
        {session !== null
          ? <ReviewList reviews={reviews} />
          : <LogIn />}
      </Main>
    </>
  )
}
