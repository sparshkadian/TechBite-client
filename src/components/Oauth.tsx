import toast from 'react-hot-toast';

const Oauth = () => {
  return (
    <div
      onClick={() => {
        toast('Under Development');
      }}
      className='flex items-center justify-center cursor-pointer border border-[#ccc]  gap-2 mt-8 py-2 rounded-md shadow-md w-[220px] hover:-translate-y-2 transition-all duration-300 ease-in-out'
    >
      <img src='../google.png' alt='google' width={20} />
      <p className='manrope-semibold'>Continue with Google</p>
    </div>
  );
};

export default Oauth;
