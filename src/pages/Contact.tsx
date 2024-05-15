import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div>
      <div className='absolute top-2 left-2 sm:top-4 sm:left-4'>
        <Link
          to='/'
          className='flex items-center manrope-semibold text-xl sm:text-3xl'
        >
          <span>Tech</span>
          <img src='../logo.png' alt='logo' width={20} className='pt-[6px] ' />
          <span className='text-blue-600'>Bite</span>
        </Link>
      </div>

      <div className='max-w-4xl mx-auto px-5 mt-20 sm:mt-[100px]'>
        <p className='text-center manrope-semibold text-2xl sm:text-4xl'>
          Drop Me a Line, Let Me Know What You Think
        </p>

        <form className='flex flex-col gap-7 sm:gap-10 mt-10 sm:mt-20'>
          <div className='flex flex-col gap-7 sm:gap-0 sm:flex-row items-center justify-between'>
            <div className='relative flex flex-col gap-5 sm:w-[45%] w-full'>
              <label
                htmlFor='firstName'
                className='text-sm text-[#777] manrope-normal'
              >
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                className='border-b-2 border-b-black focus:outline-none text-lg manrope-normal'
              />
            </div>

            <div className='flex flex-col gap-4 sm:w-[45%] w-full'>
              <label
                htmlFor='lastName'
                className='text-sm text-[#777] manrope-normal'
              >
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                className='border-b-2 border-b-black focus:outline-none text-lg manrope-normal'
              />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <label
              htmlFor='Email'
              className='text-sm text-[#777] manrope-normal'
            >
              Email*
            </label>
            <input
              type='email'
              id='email'
              className='border-b-2 border-b-black focus:outline-none text-lg manrope-normal w-full'
            />
          </div>

          <div className='flex flex-col gap-10'>
            <label
              htmlFor='Message'
              className='text-sm text-[#777] manrope-normal'
            >
              Message...
            </label>
            <input
              type='text'
              id='message'
              className='border-b-2 border-b-black focus:outline-none text-lg manrope-normal w-full'
            />
          </div>

          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
