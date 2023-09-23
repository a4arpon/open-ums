import Button from '../shared/Button'
import Card from '../shared/Card'

const ProfileCard = () => {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Rechel Kent</h2>
      <div>
        <p>Profession: Plumber</p>
        <p>Phone: 8801995942029</p>
        <p>Email: a4arpon@gmail.com</p>
      </div>
      <div className="flex justify-end">
        <Button variant="dark" link={`/contacts/${232323}`}>
          Details
        </Button>
      </div>
    </Card>
  )
}

export default ProfileCard
