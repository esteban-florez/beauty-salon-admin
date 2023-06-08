import Header from './layout/Header'
import Main from './layout/Main'
import ReviewList from './components/ReviewList'

export default function App(): React.ReactElement {
  return (
    <>
      <Header />
      <Main>
        <ReviewList />
      </Main>
    </>
  )
}
