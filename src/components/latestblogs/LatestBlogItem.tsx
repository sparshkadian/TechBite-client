import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { latestBlogsType } from '../../types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const LatestBlogItem = ({ blog }: { blog: latestBlogsType }) => {
  const { currentUser } = useSelector((state: any) => state.user);
  const [blogSelected, setBlogSelected] = useState<number | null>(null);
  const [likes, setLikes] = useState<number | null>(blog.likes);

  useEffect(() => {
    // function modifyBlogTitles(blog: blog) {
    //   blog.title = blog.title.split(' ').join('-');
    // }
    // modifyBlogTitles(blog);
  }, []);

  const handleBlogLike = (blogId: number, blogLikes: number) => {
    // Dislike
    if (blogSelected === blogId) {
      setBlogSelected(null);
      setLikes(blogLikes);
      return;
    }

    // Like
    else {
      setBlogSelected(blogId);
      setLikes(blogLikes + 1);
    }
  };

  return (
    <>
      <CardContainer key={blog._id}>
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
            <div className='flex items-center gap-3'>
              {/* Likes */}
              <CardItem
                translateZ={20}
                className='cursor-pointer flex items-center gap-1 text-black text-sm'
              >
                <img
                  onClick={() => {
                    handleBlogLike(blog._id, blog.likes);
                  }}
                  src={
                    blogSelected === blog._id
                      ? '../heart-full.png'
                      : '../heart-empty.png'
                  }
                  alt='heart'
                  width={17}
                />
                {likes}
              </CardItem>

              {/* comments */}
              <CardItem
                translateZ={20}
                as='button'
                className='flex items-center gap-1 text-black text-sm'
              >
                <img src='../comments.png' alt='comments' width={20} />0
                {/* {blog.comments} */}
              </CardItem>
            </div>

            {/* Link To blog */}
            <Link
              to={`${currentUser?.userName}/${blog.title}`}
              state={{
                banner: blog.banner,
                content: blog.content,
                likes: blog.likes,
                comments: blog.comments,
              }}
            >
              <CardItem
                translateZ={20}
                as={Link}
                target='__blank'
                className='text-blue-500'
              >
                View
              </CardItem>
            </Link>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default LatestBlogItem;
