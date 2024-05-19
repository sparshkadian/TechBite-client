import { userBlogs } from '../constants';
import { userBlog } from '../types';
import { Link } from 'react-router-dom';

const UserBlogsList = () => {
  const username = 'crazyWolf69';

  return (
    <div className='mt-5 py-10 overflow-y-scroll h-[300px] grid grid-cols-1 sm:grid-cols-2 gap-5'>
      {userBlogs.map((blog: userBlog) => (
        <div className='manrope-semibold p-2 flex flex-col rounded-md gap-2 shadow-md'>
          <p className='text-xl'>{blog.title}</p>
          <p className='manrope-normal h-[150px] overflow-hidden'>
            {blog.content}
          </p>
          <div className='border-t-2 manrope-normal flex items-center justify-between'>
            <div className='mt-4 flex items-center gap-5'>
              <div className='flex items-center gap-[6px]'>
                <img src='../heart-full.png' alt='heart' width={16} />
                <p>{blog.likes}</p>
              </div>
              <div className='flex items-center gap-1'>
                <img src='../comments.png' alt='comments' width={20} />
                <p>{blog.comments}</p>
              </div>
            </div>
            <Link
              to={`/${username}/${blog.title}`}
              className='mr-5 text-blue-600 manrope-semibold'
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBlogsList;
