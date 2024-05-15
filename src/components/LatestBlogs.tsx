import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { Link } from 'react-router-dom';
import { blogs } from '../constants';
import { useState } from 'react';
import { blog } from '../types';

const LatestBlogs = () => {
  const [blogSelected, setBlogSelected] = useState<number[]>([]);
  const [likes, setLikes] = useState<{
    blogId: number | null;
    likeCount: number | null;
  } | null>({
    blogId: null,
    likeCount: null,
  });

  const handleBlogLike = (blog: blog) => {
    if (blogSelected?.includes(blog.id)) {
      setBlogSelected(
        blogSelected.filter((blogId: number) => {
          return blogId !== blog.id;
        })
      );
      setLikes({
        blogId: blog.id,
        likeCount: blog.likes - 1,
      });
      return;
    }

    setLikes({
      blogId: blog.id,
      likeCount: blog.likes + 1,
    });
    setBlogSelected([...blogSelected, blog.id]);
  };

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
          <CardContainer key={blog.id}>
            <CardBody className='relative group/card shadow-2xl dark:hover:shadow-2xl bg-white border border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 '>
              {/* Title */}
              <CardItem
                translateZ='50'
                className='manrope-semibold text-xl font-bold text-black '
              >
                {blog.title}
              </CardItem>

              {/* Banner */}
              <CardItem translateZ='100' className='w-full mt-4'>
                <img
                  src={blog.banner}
                  height='1000'
                  width='1000'
                  className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>

              {/* Content */}
              <CardItem
                as='p'
                translateZ='60'
                className='h-[100px] overflow-hidden manrope-normal text-black text-sm max-w-sm mt-3'
              >
                {blog.content}
              </CardItem>
              <div className='manrope-normal border-t-2 pt-2 flex justify-between items-center mt-4'>
                <div
                  onClick={() => {
                    handleBlogLike(blog);
                  }}
                  className='flex items-center gap-3'
                >
                  {/* Likes */}
                  <CardItem
                    translateZ={20}
                    className='cursor-pointer flex items-center gap-1 text-black text-sm'
                  >
                    <img
                      src={
                        blogSelected?.includes(blog.id)
                          ? '../heart-full.png'
                          : '../heart-empty.png'
                      }
                      alt='heart'
                      width={17}
                    />
                    {blogSelected?.includes(blog.id)
                      ? likes?.likeCount
                      : blog.likes}
                  </CardItem>

                  {/* comments */}
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='flex items-center gap-1 text-black text-sm'
                  >
                    <img src='../comments.png' alt='comments' width={20} />0
                    {blog.comments}
                  </CardItem>
                </div>

                {/* Link To blog */}
                <CardItem
                  translateZ={20}
                  as={Link}
                  href='https://twitter.com/mannupaaji'
                  target='__blank'
                  className='hover:text-blue-600'
                >
                  View
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default LatestBlogs;
