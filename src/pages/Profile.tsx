import UserBlogsList from '../components/UserBlogsList';
import { Link } from 'react-router-dom';
import { dummyUser, userBlogs } from '../constants';
import { dummySocials } from '../constants';
import { useState } from 'react';

const Profile = () => {
  const [socials, setSocials] = useState({
    website: dummySocials[0].link,
    github: dummySocials[1].link,
    instagram: dummySocials[2].link,
    twitter: dummySocials[3].link,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [socialUpdate, setSocialUpdate] = useState({
    socialType: '',
    socialId: -1,
  });

  const { website, github, instagram, twitter } = socials;

  // const checkSocial = (socailType: string) => {
  //   if (socailType === 'website') {
  //     return website;
  //   } else if (socailType === 'github') {
  //     return github;
  //   } else if (socailType === 'instagram') {
  //     return instagram;
  //   } else {
  //     return twitter;
  //   }
  // };

  const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { socialType } = socialUpdate;
    setSocials((prevValue) => ({
      ...prevValue,
      [socialType]: e.target.value,
    }));
  };

  return (
    <>
      {/* Input modal for socails */}
      {showModal && (
        <div className='socialsUpdate-modal text-white flex items-center justify-center w-[350px] h-[180px] shadow-2xl rounded-md fixed top-1/2 left-1/2 z-[10] -translate-x-1/2 -translate-y-1/2'>
          <div className='w-full flex flex-col items-center gap-4'>
            <p className='mt-2 manrope-semibold text-lg'>
              Update {socialUpdate.socialType} Link
            </p>
            <input
              onChange={handleSocialsChange}
              type='text'
              className='w-[90%] text-black rounded-md text-lg manrope-normal focus:outline-none p-2'
            />
            <button
              onClick={() => {
                // request to update profile API
                setShowModal(false);
              }}
              className='socialsUpdate-modalButton shadow-xl w-1/3 self-center rounded-md py-2 text-white manrope-semibold'
            >
              Done
            </button>
          </div>
        </div>
      )}

      <div className='relative px-5 pb-10 pt-5'>
        <Link
          to='/'
          className='absolute left-2 md:left-4 top-2 flex items-center manrope-semibold text-2xl sm:text-3xl'
        >
          <span>Tech</span>
          <img src='../logo.png' alt='logo' width={20} className='pt-[6px] ' />
          <span className='text-blue-600'>Bite</span>
        </Link>

        <div
          style={{
            opacity: showModal ? '0.3' : '1',
          }}
          className='mt-10 md:mt-0 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between'
        >
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
                  {dummyUser.name}
                </p>

                {/* username */}
                <p className='manrope-normal text-2xl tracking-tight text-[#888]'>
                  @{dummyUser.username}
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <div className='py-2 bg-white border-2 w-full flex flex-col gap-5 items-center'>
                {dummySocials.map((social) => (
                  <div
                    key={social.id}
                    className='w-[90%] flex justify-between items-center'
                  >
                    <img src={social.image} alt='website' width={20} />
                    <p>
                      {social.link ? (
                        <Link
                          to={social.link}
                          target='_blank'
                          className='text-blue-500'
                        >
                          {/* {checkSocial(social.type)} */}
                          {social.type === 'website'
                            ? website
                            : social.type === 'github'
                            ? github
                            : social.type === 'instagram'
                            ? instagram
                            : social.type === 'twitter'
                            ? twitter
                            : ''}
                        </Link>
                      ) : (
                        <img
                          onClick={() => {
                            if (!showModal) {
                              setSocialUpdate({
                                socialType: social.type,
                                socialId: social.id,
                              });
                              setShowModal(true);
                            }
                          }}
                          src='../edit.png'
                          alt='edit'
                          width={20}
                          style={{ cursor: showModal ? 'none' : '' }}
                          className='cursor-pointer'
                        />
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className='w-full md:w-3/4 self-center md:self-start'>
            <div className='mt-5 bioContainer py-2 pb-5 mx-auto max-w-5xl flex flex-col items-center gap-3 justify-center rounded-xl shadow-2xl'>
              <p className='title covered-by-your-grace-regular text-5xl'>
                Bio
              </p>

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
              <UserBlogsList blogs={userBlogs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
