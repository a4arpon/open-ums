import Header from '@/components/shared/Header'
import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <>
      <Header />
      <div className="container my-10 p-2">
        <Outlet />
      </div>
    </>
  )
}

export default Public
