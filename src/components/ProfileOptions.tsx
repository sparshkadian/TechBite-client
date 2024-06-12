import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useProfileActions } from '../hooks/useProfileActions';

const ProfileOptions = () => {
  const { useLogout } = useProfileActions();
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '180px' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className='z-[10] absolute bg-white border-2 h-[180px] p-2 w-[200px] right-3 top-[50px] rounded-md shadow-md flex flex-col items-center gap-3'
    >
      {/* Profile */}
      <Link to='/profile' className='profileOption'>
        <img src='../user.png' alt='user' width={20} />
        <span>Profile</span>
      </Link>

      {/* Settings */}
      <Link to='#' className='profileOption'>
        <img src='../settings.png' alt='user' width={20} />
        <span>Settings</span>
      </Link>

      {/* Log Out button */}
      <button
        onClick={useLogout}
        className='mt-2 bg-red-500 py-2 rounded-md shadow-xl w-full flex items-center justify-center gap-2 hover:bg-red-300'
      >
        <span className='text-sm text-white'>Log Out</span>
        <img src='../log-out.png' alt='log out' width={15} />
      </button>
    </motion.div>
  );
};

export default ProfileOptions;
