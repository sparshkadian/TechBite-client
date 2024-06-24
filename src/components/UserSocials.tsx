import { userType } from '../types';
import { Link } from 'react-router-dom';
import Button from './Button';
import SocialUpdateModal from './modals/SocialUpdateModal';
import { useState } from 'react';

const UserSocials = ({ user }: { user: userType }) => {
  const [socialsEdit, setSocialsEdit] = useState(false);

  return (
    <>
      <div className='mt-5 w-full pl-5 sm:w-4/5 lg-w-[60%] flex flex-col sm:grid sm:grid-cols-2 gap-y-5 sm:gap-y-10 lg:gap-x-5'>
        {/* Github */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-2'>
            <img src='../github.png' alt='github' width={30} />
            <div>
              <p>Github</p>
              <p className='text-sm text-[#666]'>
                {user.github.length === 0 ? (
                  'Not Connected'
                ) : (
                  <Link
                    to={user.github}
                    target='_blank'
                    className='text-blue-600'
                  >
                    {user.github}
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* website */}
        <div className='website flex items-center justify-start sm:ml-6'>
          <div className='flex items-center gap-2'>
            <img src='../website.png' alt='github' width={30} />
            <div>
              <p>Website</p>
              <p className='text-sm text-[#666]'>
                {' '}
                {user.website.length === 0 ? (
                  'Not Connected'
                ) : (
                  <Link
                    to={user.website}
                    target='_blank'
                    className='text-blue-600'
                  >
                    {user.website}
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* instagram */}
        <div className='instagram flex items-center justify-start'>
          <div className='flex items-center gap-2'>
            <img src='../instagram.png' alt='github' width={30} />
            <div>
              <p>Instagram</p>
              <p className='text-sm text-[#666]'>
                {' '}
                {user.instagram.length === 0 ? (
                  'Not Connected'
                ) : (
                  <Link
                    to={user.instagram}
                    target='_blank'
                    className='text-blue-600'
                  >
                    {user.instagram}
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Twitter */}
        <div className='twitter flex items-center justify-start sm:ml-6'>
          <div className='flex items-center gap-2'>
            <img src='../twitter.png' alt='github' width={30} />
            <div>
              <p>Twitter</p>
              <p className='text-sm text-[#666]'>
                {' '}
                {user.twitter.length === 0 ? (
                  'Not Connected'
                ) : (
                  <Link
                    to={user.twitter}
                    target='_blank'
                    className='text-blue-600'
                  >
                    {user.twitter}
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-2 col-span-2 flex justify-center'>
          <Button
            onClick={() => {
              setSocialsEdit(true);
            }}
            type='button'
            className='purple-blue-gradient px-4 py-2 rounded-sm text-white shadow-md text-[16px] w-[120px]'
          >
            Edit Socials
          </Button>
        </div>
      </div>

      {socialsEdit && <SocialUpdateModal setSocialsEdit={setSocialsEdit} />}
    </>
  );
};

export default UserSocials;
