import ProfileCard from '@/components/others/ProfileCard'
import Loader from '@/components/shared/Loader'
import { useGetContactsQuery } from '@/redux/features/api/baseApi'

const Home = () => {
  const { data: contacts, isLoading } = useGetContactsQuery()

  if (!isLoading) {
    return (
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {contacts &&
          contacts?.map((item) => <ProfileCard {...item} key={item.id} />)}
      </div>
    )
  } else {
    return <Loader />
  }
}

export default Home
