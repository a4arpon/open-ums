import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Loader from '@/components/shared/Loader'
import { useGetContactsQuery } from '@/redux/features/api/baseApi'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

const Contact = () => {
  // extract data form redux query
  const { data: contacts, isLoading } = useGetContactsQuery()
  // Get the "id" parameter from the route
  const { id } = useParams()
  // Find the contact with the matching "id" from the fetched data
  const contact = contacts?.find((item) => item.id === id)

  if (!isLoading && contact) {
    return (
      <>
        <Helmet>
          <title>{contact.name || 'Contact Page'} - OPEN CONTACT DB</title>
          <meta
            name="description"
            content={`The biggest dummy contact database. Contact ${
              contact.name || 'Page'
            }`}
          />
        </Helmet>
        <div className="flex flex-col gap-3">
          <Button link="/" rounded="full" variant="ghost">
            <span>&#x25c0;</span>
            <span>Back</span>
          </Button>
          <Card>
            <div className="flex flex-col-reverse items-center justify-between gap-3 lg:flex-row">
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl">{contact?.name}</h1>
                <div>
                  <h3 className="text-lg font-medium uppercase">Personal</h3>
                  <p>Father's Name: {contact?.["father's-name"]}</p>
                  <p>Mother's Name: {contact?.["mothers's-name"]}</p>
                  <p>Birth: {new Date(contact?.birth).toDateString()}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium uppercase">Contact</h3>
                  <p>Email: {contact?.email}</p>
                  <p>Phone: {contact?.phone}</p>
                  <p>Address: {contact?.address}</p>
                </div>
              </div>
              <img
                src={contact?.photo}
                alt={`Photo of ${contact?.name}`}
                className="h-80 w-64 rounded-md object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase">Profession</h3>
              <p>Profession: {contact?.profession}</p>
              <p>Salary: {contact?.salary}</p>
              <p>Tax: {contact?.tex}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase">
                About {contact?.name}
              </h3>
              {contact?.about}
            </div>
          </Card>
        </div>
      </>
    )
  } else {
    // Render a loading spinner when data is still loading
    return <Loader />
  }
}

export default Contact
