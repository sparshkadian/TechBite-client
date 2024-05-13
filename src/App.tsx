import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import SignupOrLogin from './pages/SignupOrLogin';

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/auth/:signOrLogin' element={<SignupOrLogin />} />
      </Routes>
    </>
  );
};

export default App;
