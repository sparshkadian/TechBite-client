import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useSelector((state: any) => state.user);

  return currentUser ? children : <Navigate to='/auth/signup' />;
};

export default Protected;
