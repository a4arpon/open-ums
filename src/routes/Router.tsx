import Public from '@/layouts/Public'
import Home from '@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default Routes
