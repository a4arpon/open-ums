import { Contact } from '@/interfaces/Contact-Interface'
import Button from '../shared/Button'
import Card from '../shared/Card'

const ProfileCard: React.FC<Contact> = ({
  id,
  name,
  email,
  phone,
  photo,
  profession,
}) => {
  return (
    <Card aos="zoom-in-up">
      <div className="h-72 overflow-hidden rounded-md">
        <img
          src={photo}
          alt={`Photo of ${name}`}
          className="h-full w-full object-cover object-top duration-300 hover:scale-105"
        />
      </div>
      <h2 className="mt-5 text-xl font-semibold">{name}</h2>
      <div>
        <p>Profession: {profession || 'N/A'}</p>
        <p>Phone: {phone || 'N/A'}</p>
        <p>Email: {email || 'N/A'}</p>
      </div>
      <div className="flex justify-end">
        <Button variant="dark" link={`/contacts/${id}`}>
          Details
        </Button>
      </div>
    </Card>
  )
}

export default ProfileCard
