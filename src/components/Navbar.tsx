import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  // @ts-ignore
  const [signedIn, setSignedIn] = useState(false);

  return (
    <nav className='border-2 h-[80px] px-5 shadow-md flex justify-between items-center'>
      <Link to='/' className='flex items-center manrope-semibold text-3xl'>
        <span>Tech</span>
        <img src='../logo.png' alt='logo' width={20} className='pt-[6px]' />
        <span className='text-blue-600'>Bite</span>
      </Link>

      <div className='text-[17.5px] hidden sm:flex gap-10 manrope-normal items-center'>
        {signedIn && (
          <Link
            to='#'
            className='text-[16px] border-2 border-blue-500 rounded-md px-2 py-3 hover:bg-blue-500 hover:text-[#fff] hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out'
          >
            Create Post
          </Link>
        )}

        <div>
          <Link to='#' className='peer'>
            About
          </Link>
          <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
        </div>

        <div>
          <Link to='#' className='peer'>
            Contact
          </Link>
          <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
        </div>

        {!signedIn && (
          <Link
            to='/auth/signup'
            className='text-[16px] signup text-white px-4 py-3 rounded-xl'
          >
            Signup
          </Link>
        )}

        {signedIn && (
          <img
            src='../avatar.png'
            alt='avatar'
            className='cursor-pointer rounded-full cusor-pointer'
            width={45}
            height={45}
          />
        )}
      </div>

      <img
        src='../menu.png'
        alt='menubars'
        width={20}
        className='sm:hidden cursor-pointer'
      />
    </nav>
  );
};

export default Navbar;
