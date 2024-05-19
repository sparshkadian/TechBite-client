import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import NavbarDrawer from './NavbarDrawer';

const Navbar = () => {
  // @ts-ignore
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { userSignedIn } = useContext(UserContext);

  return (
    <nav className='relative h-[80px] px-5 sm:px-10 shadow-md flex justify-between items-center'>
      <Link to='/' className='flex items-center manrope-semibold text-3xl'>
        <span>Tech</span>
        <img src='../logo.png' alt='logo' width={20} className='pt-[6px] ' />
        <span className='text-blue-600'>Bite</span>
      </Link>

      <div className='flex items-center'>
        {userSignedIn && (
          <Link
            to='/new'
            className='mr-7 sm:mr-7 text-[17.5px] border-2 border-blue-500 rounded-md w-[130px] h-[50px] text-center px-2 py-2 hover:bg-blue-500 hover:text-[#fff] hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out'
          >
            Create Post
          </Link>
        )}

        <div className='text-[17.5px] hidden sm:flex gap-7 manrope-normal items-center'>
          <div>
            <Link to='/about' className='peer'>
              About
            </Link>
            <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
          </div>

          <div>
            <Link to='/contact' className='peer'>
              Contact
            </Link>
            <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
          </div>

          {!userSignedIn && (
            <Link
              to='/auth/signup'
              className='text-[16px] signup text-white px-6 py-3 rounded-xl'
            >
              Signup
            </Link>
          )}

          {userSignedIn && (
            <Link to='/profile'>
              <img
                src='../avatar.png'
                alt='avatar'
                className='cursor-pointer rounded-full cusor-pointer'
                width={45}
                height={45}
              />
            </Link>
          )}
        </div>
      </div>

      <img
        onClick={() => {
          setDrawerOpen(true);
        }}
        src='../menu.png'
        alt='menubars'
        width={20}
        className='sm:hidden cursor-pointer absolute right-3'
      />

      <NavbarDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </nav>
  );
};

export default Navbar;
