import { blogs } from '../../constants';
import LatestBlogItem from './LatestBlogItem';

const LatestBlogsList = () => {
  return (
    <>
      <div className='px-2 flex flex-col items-center gap-2 sm:gap-5'>
        <p className='sm:py-[8px] gradient-text text-2xl sm:text-6xl manrope-semibold'>
          Latest From the Blog
        </p>
        <p className='text-center text-normal sm:text-2xl manrope-normal text-[#777]'>
          Dive into our latest articles and stay up-to-date with the rapidly
          evolving world of technology.
        </p>
      </div>
      <div className='p-10 flex flex-wrap gap-10 justify-center'>
        {blogs.map((blog) => (
          <LatestBlogItem blog={blog} />
        ))}
      </div>
    </>
  );
};

export default LatestBlogsList;
