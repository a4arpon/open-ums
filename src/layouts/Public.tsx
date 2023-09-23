import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <div className="container p-2">
      <Outlet />
    </div>
  )
}

export default Public
