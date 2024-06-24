import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import {
  createBlogStart,
  createBlogSuccess,
  createBlogFailure,
} from '../redux/blogs/userBlogsSlice';
import { app } from '../firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import toast from 'react-hot-toast';
import { userBlogType } from '../types';

export const blogActions = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const createBlog = async (blog: userBlogType) => {
    try {
      dispatch(createBlogStart());
      const res = await fetch(
        `http://localhost:4100/api/blog/${currentUser._id}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(blog),
        }
      );
      const data = await res.json();
      if (data.status != 'success') {
        throw new Error(data.message);
      }
      dispatch(createBlogSuccess(data.blog));
      toast.success('Blog Published');
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
      dispatch(createBlogFailure());
    }
  };

  const uploadBlogBanner = (
    fileName: string,
    file: File,
    setbanner: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setbanner(downloadURL);
        });
      }
    );
  };
  return { createBlog, uploadBlogBanner };
};
