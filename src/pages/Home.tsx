import ProfileCard from '@/components/others/ProfileCard'
import useAxiosInterceptor from '@/hooks/useAxiosInterceptor'
import { Contact } from '@/interfaces/Contact-Interface'
import { useEffect, useState } from 'react'

const Home = () => {
  const [contacts, setContacts] = useState<Contact[] | null>()
  const axios = useAxiosInterceptor()
  useEffect(() => {
    axios
      .get('https://api.json-generator.com/templates/mXTCCXh3HU7T/data')
      .then((res) => res.data)
      .then((res) => setContacts(res))
    return () => {
      setContacts(null)
    }
  }, [])

  return (
    <div className="my-10 grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {contacts?.map((item) => <ProfileCard {...item} key={item.id} />)}
    </div>
  )
}

export default Home
