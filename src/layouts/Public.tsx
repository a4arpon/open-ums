import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  )
}

export default Public
