import UserBlogsList from '../components/UserBlogsList';
import { Link } from 'react-router-dom';
import { userBlogs } from '../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import UserSocials from '../components/UserSocials';

const Profile = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [showUserDetails, setShowUserDetails] = useState(true);

  return (
    <>
      <div className='relative px-5 pb-10 pt-5'>
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
          <div className='avatar-socialsContainer md:w-[25%] flex flex-col gap-5 border-2 p-2 md:mt-10 md:self-center'>
            <div className='bg-white border-2 w-full flex flex-col gap-5 py-4 items-center'>
              <img
                src='../avatar.png'
                alt='avatar'
                className='w-[120px] h-[120px] object-cover'
              />
              <div className='flex flex-col items-center text-center'>
                {/* registered name */}
                <p className='manrope-semibold text-3xl tracking-tight'>
                  {currentUser.name}
                </p>
              </div>

              <div className='flex items-center gap-8'>
                <div
                  onClick={() => setShowUserDetails(true)}
                  className={`${
                    showUserDetails ? 'bg-[#dddddd8a] shadow-lg' : ''
                  } flex items-center gap-1 py-2 px-3 rounded-md cursor-pointer hover:bg-[#dddddd8a]`}
                >
                  <img src='../user.png' alt='user-info' width={20} />
                  <span>User Info</span>
                </div>
                <div
                  onClick={() => setShowUserDetails(false)}
                  className={`${
                    !showUserDetails ? 'bg-[#dddddd8a] shadow-lg' : ''
                  } flex items-center gap-1 py-2 px-3 rounded-md cursor-pointer hover:bg-[#dddddd8a]`}
                >
                  <img src='../link.png' alt='socails' width={17} />
                  <span>Socials</span>
                </div>
              </div>

              {showUserDetails ? (
                <div className='border-t mt-1 pt-3 w-4/5 flex flex-col gap-2 items-center md:items-start manrope-normal'>
                  <p>
                    Username:{' '}
                    <span className='text-[#555555ca]'>
                      {currentUser.userName}
                    </span>
                  </p>
                  <p>
                    Email:{' '}
                    <span className='text-[#555555ca]'>
                      {currentUser.email}
                    </span>
                  </p>
                  <p>
                    Country: <span className='text-[#555555ca]'></span>
                  </p>
                  <p>
                    Occupation: <span className='text-[#555555ca]'></span>
                  </p>
                  <p>
                    Skills: <span className='text-[#555555ca]'></span>
                  </p>
                </div>
              ) : (
                <UserSocials user={currentUser} />
              )}
            </div>
          </div>

          {/* Bio */}
          <div className='w-full md:w-3/4 self-center md:self-start'>
            <div className='mt-10 mx-auto max-w-5xl'>
              <p className='covered-by-your-grace-regular text-center text-6xl'>
                Your Blogs
              </p>
              <UserBlogsList blogs={userBlogs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
