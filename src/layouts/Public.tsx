import Header from '@/components/shared/Header'
import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <>
      <Header />
      <div className="container p-2">
        <Outlet />
      </div>
    </>
  )
}

export default Public
