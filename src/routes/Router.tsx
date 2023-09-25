import Public from '@/layouts/Public'
import Contact from '@/pages/Contact'
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
      {
        path: '/contacts',
        element: <Home />,
      },
      {
        path: '/contacts/:id',
        element: <Contact />,
      },
    ],
  },
])

export default Routes
