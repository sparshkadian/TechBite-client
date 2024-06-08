import { userType } from '../types';
import { Link } from 'react-router-dom';

const UserSocials = ({ user }: { user: userType }) => {
  return (
    <div className='w-4/5 flex flex-col gap-4'>
      {/* Github */}
      <div className='flex items-center justify-between'>
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
          src={user.github ? '../dustbin.png' : '../link.png'}
          alt='link'
          width={35}
          className={`${
            user.github ? 'p-[0.5px] mt-3' : 'p-2'
          } rounded-md hover:bg-gray-200 cursor-pointer`}
        />
      </div>

      {/* website */}
      <div className='flex items-center justify-between'>
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
          src={user.website ? '../dustbin.png' : '../link.png'}
          alt='link'
          width={35}
          className={`${
            user.twitter ? 'p-[0.5px] mt-3' : 'p-2'
          } rounded-md hover:bg-gray-200 cursor-pointer`}
        />
      </div>

      {/* instagram */}
      <div className='flex items-center justify-between'>
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
          src={user.instagram ? '../dustbin.png' : '../link.png'}
          alt='link'
          width={35}
          className={`${
            user.instagram ? 'p-[0.5px] mt-3' : 'p-2'
          } rounded-md hover:bg-gray-200 cursor-pointer`}
        />
      </div>

      {/* Twitter */}
      <div className='flex items-center justify-between'>
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
          src={user.twitter ? '../dustbin.png' : '../link.png'}
          alt='link'
          width={35}
          className={`${
            user.twitter ? 'p-[0.5px] mt-3' : 'p-2'
          } rounded-md hover:bg-gray-200 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default UserSocials;
