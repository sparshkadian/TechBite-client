import toast from 'react-hot-toast';
import { signupFormDataType, loginFormDataType } from '../types';
import {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  OAuthStart,
  OAuthSuccess,
  OAuthFailure,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { googleAuthUserDetails } from '../types';

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
      if (data.status != 'success') {
        dispatch(signUpFailure());
        throw new Error(data.message);
      } else {
        dispatch(signUpSuccess(data.user));
        toast.success('Signup successfull');
        return true;
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
      if (data.status != 'success') {
        dispatch(loginFailure());
        throw new Error(data.message);
      } else {
        dispatch(loginSuccess(data.user));
        toast.success('Login successfull');
        return true;
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const googleAuth = async (userDetails: googleAuthUserDetails) => {
    try {
      dispatch(OAuthStart());
      const res = await fetch('http://localhost:4100/api/auth/google', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });
      const data = await res.json();
      if (data.status != 'success') {
        dispatch(OAuthFailure());
        throw new Error(data.message);
      } else {
        dispatch(OAuthSuccess(data.user));
        toast.success('Signed In');
        return true;
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return { useSignup, useLogin, googleAuth };
};
