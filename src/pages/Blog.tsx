import { useParams, useLocation } from 'react-router-dom';
import { dummyUser } from '../constants';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Blog = () => {
  const { blogTitle } = useParams();
  const { state, pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar show={false} />
      {/* Title */}
      <div className='px-4 pb-7 mt-[60px] max-w-4xl mx-auto flex flex-col gap-8'>
        <h1 className='manrope-bold text-3xl sm:text-5xl'>{blogTitle}</h1>

        {/* User Profile -> The blog belongs to */}
        <div className='py-1 px-2 rounded-full flex items-center gap-3'>
          <img
            src='../avatar.png'
            alt='user-avatar'
            width={60}
            className='rounded-full blog-userAvatar p-1'
          />
          <div>
            <p className='manrope-semibold'>@{dummyUser.username}</p>
            <p className='text-sm ml-2 text-[#666]'>Date of publish</p>
          </div>
        </div>

        <div className='manrope-normal border-t border-b p-2 flex gap-7 items-center'>
          <div className='flex gap-2 items-center'>
            <img src='../heart-full.png' alt='likes' width={20} />
            <p>{state.likes}</p>
          </div>

          {/* Click to open Comments */}
          <div className='flex gap-1 items-center cursor-pointer'>
            <img src='../comments.png' alt='comments' width={20} />
            <p>{state.comments}</p>
          </div>
        </div>

        {/* Blog bgCover */}
        <div className=''>
          <img
            src={state?.banner}
            alt='blog-banner'
            className='w-full h-full object-cover'
          />
        </div>

        {/* blog Content */}
        <p
          style={{ textAlign: 'justify' }}
          className='manrope-semibold max-w-2xl self-center text-xl sm:text-2xl leading-[40px] sm:leading-[50px]'
        >
          {state.content}
        </p>
      </div>
    </>
  );
};

export default Blog;
