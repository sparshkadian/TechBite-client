import { userType } from '../types';
import { Link } from 'react-router-dom';
import Button from './Button';
import SocialUpdateModal from './modals/SocialUpdateModal';
import { useState } from 'react';

const UserSocials = ({ user }: { user: userType }) => {
  const [socialsEdit, setSocialsEdit] = useState(false);

  const handleImageDelete = (containerId: string) => {
    console.log(containerId);
  };

  return (
    <>
      <div className='w-4/5 flex flex-col gap-2'>
        {/* Github */}
        <div className='github flex items-center justify-between'>
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
          <img
            onClick={() => {
              handleImageDelete('github');
            }}
            src={user.github ? '../dustbin.png' : ''}
            alt='link'
            width={35}
            className='rounded-md cursor-pointer p-[2px] mt-3'
          />
        </div>

        {/* website */}
        <div className='website flex items-center justify-between'>
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
          <img
            onClick={() => {
              handleImageDelete('website');
            }}
            src={user.website ? '../dustbin.png' : ''}
            alt='link'
            width={35}
            className='rounded-md cursor-pointer p-[2px] mt-3'
          />
        </div>

        {/* instagram */}
        <div className='instagram flex items-center justify-between'>
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
          <img
            onClick={() => {
              handleImageDelete('instagram');
            }}
            src={user.instagram ? '../dustbin.png' : ''}
            alt='link'
            width={35}
            className='rounded-md cursor-pointer p-[2px] mt-3'
          />
        </div>

        {/* Twitter */}
        <div className='twitter flex items-center justify-between'>
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
          <img
            onClick={() => {
              handleImageDelete('twitter');
            }}
            src={user.twitter ? '../dustbin.png' : ''}
            alt='link'
            width={35}
            className='rounded-md cursor-pointer p-[2px] mt-3'
          />
        </div>
        <Button
          onClick={() => {
            setSocialsEdit(true);
          }}
          type='button'
          className='self-center mt-2 purple-blue-gradient px-4 py-2 rounded-sm text-white shadow-md text-[16px] w-[120px]'
        >
          Edit Socials
        </Button>
      </div>

      {socialsEdit && <SocialUpdateModal setSocialsEdit={setSocialsEdit} />}
    </>
  );
};

export default UserSocials;
