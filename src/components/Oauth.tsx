import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { useSignupOrLogin } from '../hooks/useSignupOrLogin';
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
  const navigate = useNavigate();
  const { googleAuth } = useSignupOrLogin();

  const handleGoogleAuth = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);
    const userDetails = {
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL,
    };

    //@ts-ignore
    const result = await googleAuth(userDetails);
    if (result) {
      setTimeout(() => {
        navigate('/');
      }, 0);
    }
  };

  return (
    <div
      onClick={handleGoogleAuth}
      className='flex items-center justify-center cursor-pointer border-2   gap-2 mt-8 py-3 w-[220px]'
    >
      <img src='../google.png' alt='google' width={20} />
      <p className='manrope-semibold'>Continue with Google</p>
    </div>
  );
};

export default Oauth;
