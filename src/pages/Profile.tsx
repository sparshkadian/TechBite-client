import UserBlogsList from '../components/UserBlogsList';
import { Link } from 'react-router-dom';
import { dummyUser } from '../constants';

const Profile = () => {
  return (
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
            <div className='flex flex-col items-center'>
              {/* registered name */}
              <p className='manrope-semibold text-3xl tracking-tight'>
                {dummyUser.name}
              </p>

              {/* username */}
              <p className='manrope-normal text-2xl tracking-tight text-[#888]'>
                @{dummyUser.name}
              </p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className='py-2 bg-white border-2 w-full flex flex-col gap-5 items-center'>
              {/* Website*/}
              <div className='w-[90%] flex justify-between items-center'>
                <img src='../website.png' alt='website' width={20} />
                <p>
                  {dummyUser.website ? (
                    dummyUser.website
                  ) : (
                    <img src='../edit.png' alt='edit' width={20} />
                  )}
                </p>
              </div>

              {/* github */}
              <div className='w-[90%] flex justify-between items-center border-t-2'>
                <img src='../github.png' alt='insta' width={20} />
                <p>
                  {dummyUser.github ? (
                    dummyUser.github
                  ) : (
                    <img
                      src='../edit.png'
                      alt='edit'
                      width={20}
                      className='mt-2'
                    />
                  )}
                </p>
              </div>

              {/* Instagram */}
              <div className='w-[90%] flex justify-between items-center border-t-2'>
                <img src='../instagram.png' alt='insta' width={20} />
                <p>
                  {dummyUser.instagram ? (
                    dummyUser.instagram
                  ) : (
                    <img
                      src='../edit.png'
                      alt='edit'
                      width={20}
                      className='mt-2'
                    />
                  )}
                </p>
              </div>

              {/* twitter */}
              <div className='w-[90%] flex justify-between items-center border-t-2'>
                <img
                  src='../twitter.png'
                  alt='insta'
                  width={20}
                  className='mt-2'
                />
                <p>
                  {dummyUser.twitter ? (
                    dummyUser.twitter
                  ) : (
                    <img src='../edit.png' alt='edit' width={20} />
                  )}
                </p>
              </div>
            </div>
          </div>
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
