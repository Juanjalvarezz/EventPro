import { useAuth } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom'

const ConditionalRedirect = ({ to, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={to} {...rest} /> : <Outlet />
}

export default ConditionalRedirect
