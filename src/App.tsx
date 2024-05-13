import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import SignupOrLogin from './pages/SignupOrLogin';

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth/:signOrLogin' element={<SignupOrLogin />} />
      </Routes>
    </>
  );
};

export default App;
