import toast from 'react-hot-toast';
import { signupFormDataType, loginFormDataType } from '../types';
import {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export const useSignupOrLogin = () => {
  const dispatch = useDispatch();

  const useSignup = async (formData: signupFormDataType) => {
    try {
      dispatch(signUpStart());
      const res = await fetch('http://localhost:4100/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      dispatch(signUpSuccess(data.user));
      toast.success('Signup successfull');
      if (data.status != 'success') {
        dispatch(signUpFailure());
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const useLogin = async (formData: loginFormDataType) => {
    try {
      dispatch(loginStart());
      const res = await fetch('http://localhost:4100/api/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      dispatch(loginSuccess(data.user));
      toast.success('Login successfull');
      if (data.status != 'success') {
        dispatch(loginFailure());
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return { useSignup, useLogin };
};
