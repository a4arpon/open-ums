import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Loader from '@/components/shared/Loader'
import { useGetContactsQuery } from '@/redux/features/api/baseApi'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { data: contacts, isLoading } = useGetContactsQuery()
  const { id } = useParams()
  const contact = contacts?.find((item) => item.id === id)

  if (!isLoading && contact) {
    return (
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
              className="h-80 w-64 rounded-md"
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
    )
  } else {
    return <Loader />
  }
}

export default Contact
