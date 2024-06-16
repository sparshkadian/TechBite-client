import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import UserSocials from '../components/UserSocials';
import ProfileUpdateModal from '../components/modals/ProfileUpdateModal';

const Profile = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [showUserDetails, setShowUserDetails] = useState(true);
  const [profileEdit, setProfileEdit] = useState(false);

  return (
    <>
      <div className='px-5 pb-10 mt-5'>
        <div className=''>
          {/* Name and Image */}
          <div className='max-w-5xl mx-auto avatar-socialsContainer flex flex-col gap-5 p-2'>
            <div className='bg-white w-full flex flex-col gap-5 py-4 items-center'>
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
                <Link
                  to='/myBlogs'
                  onClick={() => setShowUserDetails(false)}
                  className='
                  flex items-center gap-1 py-2 px-3 rounded-md cursor-pointer hover:bg-[#dddddd8a]'
                >
                  <img src='../my-blogs.png' alt='blogs' width={20} />
                  <span> My Blogs</span>
                </Link>
              </div>

              {showUserDetails ? (
                <div className='border-t mt-1 pt-3 w-4/5 flex flex-col gap-2 items-center md:items-start manrope-normal text-lg'>
                  <p>
                    Email:{' '}
                    <span className='text-[#555555ca]'>
                      {currentUser.email}
                    </span>
                  </p>
                  <p>
                    Country: {currentUser.Country}
                    <span className='text-[#555555ca]'></span>
                  </p>
                  <p>
                    Occupation: {currentUser.Occupation}
                    <span className='text-[#555555ca]'></span>
                  </p>
                  <p>
                    Skills: {currentUser.Skills}
                    <span className='text-[#555555ca]'></span>
                  </p>
                </div>
              ) : (
                <UserSocials user={currentUser} />
              )}
              {showUserDetails && (
                <button
                  onClick={() => {
                    setProfileEdit(true);
                  }}
                  className='editProfile px-4 py-2 bg-purple-300 rounded-sm text-white cursor-pointer'
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {profileEdit && <ProfileUpdateModal setProfileEdit={setProfileEdit} />}
    </>
  );
};

export default Profile;
