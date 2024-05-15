import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }: { children: React.ReactNode }) => {
  const { userSignedIn } = useContext(UserContext);

  return userSignedIn ? children : <Navigate to='/auth/signup' />;
};

export default Protected;
