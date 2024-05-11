import React, { useState } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const Signup = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='p-5'
      >
        <p className='mt-10 manrope-semibold text-4xl text-center tracking-tight'>
          Sign Up
        </p>
        <form className='mt-10 flex flex-col gap-[50px]'>
          {/* username */}
          <div className='input-container manrope-normal flex flex-col gap-2 relative'>
            <label htmlFor='username' className='absolute'>
              Full Name
            </label>
            <input
              type='text'
              id='username'
              className='border-b-2 pb-2 focus:outline-none'
            />
          </div>

          {/* Email*/}
          <div className='input-container manrope-normal flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              className='border-b-2 pb-2 focus:outline-none'
            />
          </div>

          {/* Password */}
          <div className='input-container manrope-normal flex flex-col gap-2'>
            <label htmlFor='username'>Password</label>
            <input
              type='password'
              id='password'
              className='border-b-2 pb-2 focus:outline-none'
            />
          </div>

          {/* confirmPassword */}
          <div className='input-container manrope-normal flex flex-col gap-2 relative'>
            <label htmlFor='username'>Confirm Password</label>
            <input
              type={viewPassword ? 'text' : 'password'}
              id='confirmPassword'
              className='border-b-2 pb-2 focus:outline-none'
            />
            <img
              onClick={() => {
                setViewPassword((prev) => !prev);
              }}
              src={
                viewPassword ? '../hide-password.png' : '../view-password.png'
              }
              alt='view-password'
              width={25}
              className='absolute cursor-pointer right-2 top-1/2 -translate-y-1/2'
            />
          </div>

          <p className='manrope-normal'>
            Already Have an account ?{' '}
            <span
              className='manrope-semibold cursor-pointer text-blue-500'
              onClick={() => {
                setLogin(true);
              }}
            >
              Log in
            </span>
          </p>

          <Button type='submit'>Signup</Button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default Signup;
