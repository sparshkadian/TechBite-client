import toast from 'react-hot-toast';

const Oauth = () => {
  return (
    <div
      onClick={() => {
        toast('Under Development');
      }}
      className='flex items-center justify-center cursor-pointer border-2   gap-2 mt-8 py-3 w-[220px]'
    >
      <img src='../google.png' alt='google' width={20} />
      <p className='manrope-semibold'>Continue with Google</p>
    </div>
  );
};

export default Oauth;
