import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavbarDrawer from './NavbarDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AnimatePresence, motion } from 'framer-motion';
import { useProfileActions } from '../hooks/useProfileActions';

const Navbar = ({ show }: { show: boolean }) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [openProfileOption, setOpenProfileOptions] = useState<boolean>(false);
  const { useLogout } = useProfileActions();

  return (
    <nav className='relative h-[80px] px-5 sm:px-10 shadow-md flex justify-between items-center'>
      <Link to='/' className='flex items-center manrope-semibold text-3xl'>
        <span>Tech</span>
        <img src='../logo.png' alt='logo' width={20} className='pt-[6px] ' />
        <span className='text-blue-600'>Bite</span>
      </Link>

      <div className='flex items-center'>
        {/* Create Post */}
        {currentUser && (
          <Link
            to='/new'
            className='mr-7 sm:mr-7 text-[17.5px] border-2 border-blue-500 rounded-md w-[130px] h-[50px] text-center px-2 py-2 hover:bg-blue-500 hover:text-[#fff] hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out'
          >
            Create Post
          </Link>
        )}

        {/* About */}
        <div className='text-[17.5px] hidden sm:flex gap-7 manrope-normal items-center'>
          <div className={`${show ? 'block' : 'hidden'}`}>
            <Link to='/about' className='peer'>
              About
            </Link>
            <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
          </div>

          {/* Contact */}
          <div className={`${show ? 'block' : 'hidden'}`}>
            <Link to='/contact' className='peer'>
              Contact
            </Link>
            <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
          </div>

          {/* Signup */}
          {!currentUser && (
            <Link
              to='/auth/signup'
              className='text-[16px] signup text-white px-6 py-3 rounded-xl'
            >
              Signup
            </Link>
          )}

          {/* Avatar */}
          {currentUser && (
            <div
              className='relative'
              onClick={() => {
                setOpenProfileOptions((prevValue) => !prevValue);
              }}
            >
              <img
                src='../avatar.png'
                alt='avatar'
                className='cursor-pointer rounded-full cusor-pointer'
                width={45}
                height={45}
              />

              {openProfileOption && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '180px' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='z-[10] absolute bg-white border-2 h-[180px] p-2 w-[200px] right-3 top-[50px] rounded-md shadow-md flex flex-col items-center gap-3'
                  >
                    {/* Profile */}
                    <Link to='/profile' className='profileOption'>
                      <img src='../user.png' alt='user' width={20} />
                      <span>Profile</span>
                    </Link>

                    {/* Settings */}
                    <Link to='#' className='profileOption'>
                      <img src='../settings.png' alt='user' width={20} />
                      <span>Settings</span>
                    </Link>

                    {/* Log Out button */}
                    <button
                      onClick={useLogout}
                      className='mt-2 bg-red-500 py-2 rounded-md shadow-xl w-full flex items-center justify-center gap-2 hover:bg-red-300'
                    >
                      <span className='text-sm text-white'>Log Out</span>
                      <img src='../log-out.png' alt='log out' width={15} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Menu Bars */}
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
