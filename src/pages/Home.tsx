import ProfileCard from '@/components/others/ProfileCard'
import Button from '@/components/shared/Button'
import Loader from '@/components/shared/Loader'
import SlicedData from '@/lib/pagination'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  // Destructure data from the redux hook
  const { contacts, isLoading, reSlice, pagination } = SlicedData()
  // Check if data is still loading
  if (!isLoading) {
    return (
      <>
        <Helmet>
          <title>OPEN CONTACT DB</title>
          <meta
            name="description"
            content="The biggest dummy contact database."
          />
        </Helmet>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {contacts &&
            contacts?.map((item) => <ProfileCard {...item} key={item.id} />)}
        </div>
        <div className="my-10 flex items-center justify-center">
          <Button onClick={() => reSlice(pagination)} variant="dark">
            Load More
          </Button>
        </div>
      </>
    )
  } else {
    // Render a loading spinner when data is still loading
    return <Loader />
  }
}

export default Home
