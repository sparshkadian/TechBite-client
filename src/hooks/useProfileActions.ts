import {
  logoutUser,
  profileUpdateStart,
  profileUpdateSuccess,
  profileUpdateFailure,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { app } from '../firebase.config';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useProfileActions = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();
  const [avatarURL, setAvatarURL] = useState<string>('');
  const useLogout = () => {
    dispatch(logoutUser());
    toast('Logout Successfull');
  };

  const updateProfile = async (dataToSend: any) => {
    try {
      dispatch(profileUpdateStart());
      const res = await fetch(
        `http://localhost:4100/api/user/updateMe/${currentUser._id}`,
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

  const updateAvatarFirebase = (
    fileName: string,
    file: File
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const storageRef = ref(storage, `${currentUser.email}/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log('File available at', setAvatarURL(downloadURL));
              const userData = { ...currentUser, avatar: avatarURL };
              updateProfile(userData)
                .then(() => {
                  resolve();
                })
                .catch(reject);
            })
            .catch(reject);
        }
      );
    });
  };
  return { useLogout, updateProfile, updateAvatarFirebase };
};
