import {
  logoutUser,
  profileUpdateStart,
  profileUpdateSuccess,
  profileUpdateFailure,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export const useProfileActions = () => {
  const dispatch = useDispatch();
  const useLogout = () => {
    dispatch(logoutUser());
    toast('Logout Successfull');
  };

  const updateProfile = async (userId: string, dataToSend: any) => {
    try {
      dispatch(profileUpdateStart());
      const res = await fetch(
        `http://localhost:4100/api/user/updateMe/${userId}`,
        {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        }
      );
      const data = await res.json();
      if (data.status != 'success') {
        throw new Error(data.message);
      }
      dispatch(profileUpdateSuccess(data.user));
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
      dispatch(profileUpdateFailure());
    }
  };

  return { useLogout, updateProfile };
};
