import React, { useState } from 'react';
import Button from './Button';

const Login = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className='p-5'>
      <p className='mt-10 manrope-semibold text-4xl text-center tracking-tight'>
        Login
      </p>
      <form className='mt-10 flex flex-col gap-[50px]'>
        {/* Email*/}
        <div className='input-container manrope-normal flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='border-b-2 pb-2 focus:outline-none'
          />
        </div>

        {/* confirmPassword */}
        <div className='input-container manrope-normal flex flex-col gap-2 relative'>
          <label htmlFor='username'>Confirm Password</label>
          <input
            type={viewPassword ? 'text' : 'password'}
            id='password'
            className='border-b-2 pb-2 focus:outline-none'
          />
          <img
            onClick={() => {
              setViewPassword((prev) => !prev);
            }}
            src={viewPassword ? '../hide-password.png' : '../view-password.png'}
            alt='view-password'
            width={25}
            className='absolute cursor-pointer right-2 top-1/2 -translate-y-1/2'
          />
        </div>

        <div>
          <p className='manrope-normal'>
            Don't Have an account ?{' '}
            <span
              className='manrope-semibold cursor-pointer text-blue-500'
              onClick={() => {
                setLogin(false);
              }}
            >
              Sign up
            </span>
          </p>
          <p className='manrope-semibold mt-2 cursor-pointer text-blue-500'>
            Forgot Password?
          </p>
        </div>
        <Button type='submit'>Login</Button>
      </form>
    </div>
  );
};

export default Login;