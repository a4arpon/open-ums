import Button from '@/components/shared/Button'

const Home = () => {
  return (
    <div className="m-10 flex flex-wrap gap-2">
      <Button fontWidth="bold" fontSize="xl">
        Click Me
      </Button>
      <Button variant="secondary" fontWidth="bold" fontSize="xl">
        Click Me
      </Button>
      <Button variant="warn">Click Me</Button>
      <Button variant="dark">Click Me</Button>
      <Button variant="ghost">Click Me</Button>
    </div>
  )
}

export default Home
