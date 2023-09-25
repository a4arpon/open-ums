import Store from '@/redux/Store'
import Routes from '@/routes/Router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
const Provider = () => {
  return (
    <HelmetProvider>
      <ReduxProvider store={Store}>
        <RouterProvider router={Routes} />
      </ReduxProvider>
    </HelmetProvider>
  )
}

export default Provider
