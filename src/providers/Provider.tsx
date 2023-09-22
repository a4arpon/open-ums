import Store from '@/redux/Store'
import Routes from '@/routes/Router'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
const Provider = () => {
  return (
    <ReduxProvider store={Store}>
      <RouterProvider router={Routes} />
    </ReduxProvider>
  )
}

export default Provider
