import Signup from '../components/Signup';
import Login from '../components/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupOrLogin = () => {
  const [login, setLogin] = useState(
    JSON.parse(window.localStorage.getItem('login')!) || false
  );

  return (
    <div className='relative h-screen grid grid-cols-1 sm:grid-cols-2'>
      <div className='absolute top-2 left-2 sm:top-4 sm:left-4 z-10'>
        <Link
          to='/'
          className='flex items-center manrope-semibold text-xl sm:text-3xl'
        >
          <span>Tech</span>
          <img src='../logo.png' alt='logo' width={20} className='pt-[6px] ' />
          <span className='text-blue-600'>Bite</span>
        </Link>
      </div>
      {/* Image */}
      <div className='relative hidden sm:block'>
        <div className='w-full h-full bg-gradient-to-b from-[#4c008284] to-[#892be273]'></div>
        <img
          src='../signup-image.jpg'
          alt='laptop'
          className='absolute top-0 z-[-1] w-full h-full object-cover bg-center'
        />
      </div>

      {/* Signup or Login UI */}
      {login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} />}
    </div>
  );
};

export default SignupOrLogin;
