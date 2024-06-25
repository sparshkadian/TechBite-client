import { SetStateAction } from 'react';
import Button from './Button';

const BlogBanner = ({
  banner,
  setBanner,
  fileRef,
}: {
  banner: string;
  setBanner: React.Dispatch<SetStateAction<string | undefined>>;
  fileRef: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div className='flex gap-10'>
      <div className='h-[200px]'>
        <img src={banner} alt='banner' className='h-full w-[200px]' />
      </div>

      <div className='flex gap-5 flex-col justify-center sm:flex-row sm:items-center'>
        <Button
          onClick={() => {
            if (fileRef.current) {
              fileRef.current.click();
            }
          }}
          type='button'
          className='border-2 px-4 py-2 rounded-md shadow-md manrope-semibold hover:bg-gray-100'
        >
          Change
        </Button>

        <Button
          onClick={() => {
            setBanner(undefined);
          }}
          type='button'
          className='px-4 py-2 rounded-md shadow-md manrope-semibold bg-red-500 text-white hover:bg-red-400'
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default BlogBanner;
