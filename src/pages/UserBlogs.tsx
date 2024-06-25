import { userBlogType } from '../types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
// import { blogActions } from '../hooks/blogActions';
// import { useEffect } from 'react';

const UserBlogs = () => {
  // const { fetchBlogsDB } = blogActions();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const userBlogs = useSelector((state: RootState) => state.userBlogs.blogs);

  // Should only run once initially
  // useEffect(() => {
  //   fetchBlogsDB();
  // }, []);

  return (
    <div className='mt-10 px-10'>
      <p className='covered-by-your-grace-regular text-center text-6xl'>
        Your Blogs
      </p>
      <div className='mt-5 py-10 grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {userBlogs.length > 0 &&
          userBlogs.map((blog: userBlogType) => (
            <div
              key={blog._id}
              className='manrope-semibold p-2 flex flex-col rounded-md gap-2 shadow-xl border'
            >
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
                    {/* <p>{blog.comments}</p> */}
                  </div>
                </div>
                <Link
                  to={`/${currentUser.userName}/${blog.title}`}
                  state={{
                    banner: blog.banner,
                    content: blog.content,
                    likes: blog.likes,
                    comments: blog.comments,
                  }}
                  className='mr-5 text-blue-600 manrope-semibold'
                >
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserBlogs;
