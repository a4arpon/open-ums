import { ReactChildren } from '@/interfaces/Shared-Interface'
import Store from '@/redux/Store'
import { Provider as ReduxProvider } from 'react-redux'
const Provider: React.FC<ReactChildren> = ({ children }) => {
  return <ReduxProvider store={Store}>{children}</ReduxProvider>
}

export default Provider
