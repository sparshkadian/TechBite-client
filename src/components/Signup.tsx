import React, { useState } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Oauth from './Oauth';
import { useSignupOrLogin } from '../hooks/useSignupOrLogin';

const Signup = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<string | boolean>>;
}) => {
  const { useSignup } = useSignupOrLogin();
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await useSignup(formData);
    setFormData({ name: '', email: '', password: '' });
    if (result) {
      setTimeout(() => {
        navigate('/');
      }, 0);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='p-5'
      >
        <p className='mt-5 manrope-semibold text-4xl text-center tracking-tight'>
          Sign Up
        </p>

        <div className='flex flex-col'>
          <form
            onSubmit={handleFormSubmit}
            className='mt-10 flex flex-col gap-[50px]'
          >
            {/* username */}
            <div className='input-container manrope-normal flex flex-col gap-2 relative'>
              <label htmlFor='username' className='absolute'>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleInputChange}
                className='border-b-2 pb-2 focus:outline-none'
              />
            </div>

            {/* Email*/}
            <div className='input-container manrope-normal flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleInputChange}
                className='border-b-2 pb-2 focus:outline-none'
              />
            </div>

            {/* confirmPassword */}
            <div className='input-container manrope-normal flex flex-col gap-2 relative'>
              <label htmlFor='username'>Password</label>
              <input
                type={viewPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={handleInputChange}
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
                  navigate('/auth/login');
                  window.localStorage.setItem('login', JSON.stringify(true));
                  setLogin(true);
                }}
              >
                Log in
              </span>
            </p>

            <Button
              type='submit'
              className=' reusable-button manrope-normal self-center'
            >
              Signup
            </Button>
          </form>

          {/* OR */}
          <div className='border border-[#ddd] mt-10 relative'>
            <p className='text-sm text-[#999] manrope-normal absolute left-[50%] -translate-x-1/2 -top-[10px] px-3 bg-white'>
              OR
            </p>
          </div>

          <div className='self-center'>
            <Oauth />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Signup;
