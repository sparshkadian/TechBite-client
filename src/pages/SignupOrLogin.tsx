import Signup from '../components/Signup';
import Login from '../components/Login';
import { useState } from 'react';

const SignupOrLogin = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className='h-screen grid grid-cols-1 sm:grid-cols-2'>
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
