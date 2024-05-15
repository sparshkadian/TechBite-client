import React, { useState, useEffect, useContext } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavbarDrawer = ({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // @ts-ignore
  const [open, setOpen] = useState(false);
  const { userSignedIn } = useContext(UserContext);

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
          <div>
            <Link to='/about' className='peer hover:text-black'>
              About
            </Link>
            <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
          </div>

          <div>
            <Link to='/contact' className='peer hover:text-black'>
              Contact
            </Link>
            <p className='peer-hover:border-b peer-hover:border-blue-500'></p>
          </div>

          {!userSignedIn && (
            <Link
              to='/auth/signup'
              className='text-[16px] signup text-white w-[100px] text-center py-3 rounded-xl hover:text-white'
            >
              Signup
            </Link>
          )}

          {userSignedIn && (
            <img
              src='../avatar.png'
              alt='avatar'
              className='cursor-pointer rounded-full cusor-pointer'
              width={100}
              height={100}
            />
          )}
        </div>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
