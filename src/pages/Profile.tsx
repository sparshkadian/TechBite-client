import UserBlogsList from '../components/UserBlogsList';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='relative px-10 pb-10 pt-5'>
      <Link
        to='/'
        className='absolute left-2 md:left-4 top-2 flex items-center manrope-semibold text-2xl sm:text-3xl'
      >
        <span>Tech</span>
        <img src='../logo.png' alt='logo' width={20} className='pt-[6px] ' />
        <span className='text-blue-600'>Bite</span>
      </Link>

      <div className='mt-10 md:mt-0 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between'>
        {/* Name and Image */}
        <div className='md:w-[25%] flex flex-col border-2 p-2 md:mt-10'>
          <div className='border-2 w-full flex flex-col gap-5 items-center'>
            <img
              src='../avatar.png'
              alt='avatar'
              className='w-[120px] h-[120px] object-cover'
            />
            <p className='manrope-semibold text-3xl tracking-tight'>Username</p>
          </div>

          {/* Socials */}
          <div></div>
        </div>

        {/* Bio */}
        <div className='w-full md:w-3/4 self-center md:self-start'>
          <div className='mt-5 bioContainer py-2 pb-5 mx-auto max-w-5xl flex flex-col items-center gap-3 justify-center rounded-xl shadow-2xl'>
            <p className='title covered-by-your-grace-regular text-5xl'>Bio</p>

            <div className='manrope-semibold text-lg w-full flex justify-around'>
              {/* Left Panel */}
              <div className='flex flex-col gap-5'>
                <p>Name: </p>
                <p>Country: </p>
                <p>Occupation: </p>
                <p>Mobile: </p>
              </div>

              {/* Right Panel */}
              <div className='flex flex-col gap-5'>
                <p>Birthday: </p>
                <p>Email: </p>
              </div>
            </div>
          </div>

          {/* Blogs */}
          {/* map blogs */}
          <div className='mt-10 mx-auto max-w-5xl'>
            <p className='covered-by-your-grace-regular text-center text-6xl'>
              Your Blogs
            </p>
            <UserBlogsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
