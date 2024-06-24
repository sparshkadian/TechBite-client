import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useProfileActions } from '../hooks/useProfileActions';

const NavbarDrawer = ({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { useLogout } = useProfileActions();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      setOpen(true);
    }
  });

  const onClose = () => {
    setDrawerOpen(false);
    setOpen(false);
  };

  return (
    <>
      <Drawer onClose={onClose} open={open} width={250}>
        <div className='text-[17.5px] flex flex-col gap-10 manrope-normal items-center'>
          {currentUser && (
            <Link to='/profile'>
              <img
                src={
                  currentUser.avatar ||
                  'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
                }
                alt='avatar'
                className='cursor-pointer rounded-full cusor-pointer'
                width={100}
                height={100}
              />
            </Link>
          )}

          <div>
            <Link to='/myBlogs' className='gradient-text'>
              My Blogs
            </Link>
          </div>

          <div>
            <Link to='/about' className='hover:gradient-text'>
              About
            </Link>
          </div>

          <div>
            <Link to='/contact' className='hover:gradient-text'>
              Contact
            </Link>
          </div>

          {currentUser && (
            <button
              onClick={useLogout}
              className='bg-red-500 py-3 rounded-md shadow-xl w-full flex items-center justify-center gap-2 hover:bg-red-300'
            >
              <span className='text-[15px] text-white'>Log Out</span>
              <img src='../log-out.png' alt='log out' width={15} />
            </button>
          )}

          {!currentUser && (
            <Link
              to='/auth/signup'
              className='text-[16px] signup text-white w-[100px] text-center py-3 rounded-xl hover:text-white'
            >
              Signup
            </Link>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
