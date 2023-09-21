import { ReactChildren } from '../../interfaces/Shared-Interface'

const Card: React.FC<ReactChildren> = ({ children }) => {
  return <div className="bg-black text-white">{children}</div>
}

export default Card
