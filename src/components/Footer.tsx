import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='manrope-semibold footer mx-10 sm:mx-[120px] mt-10 mb-5 rounded-md shadow-lg'>
      {/*Site Links */}
      <div className='p-4 grid grid-cols-2'>
        <div className='flex items-center'>
          <p className='flex items-center manrope-semibold sm:text-3xl'>
            <span>Tech</span>
            <img
              src='../logo.png'
              alt='logo'
              width={20}
              className='pt-[6px] '
            />
            <span className='text-blue-600'>Bite</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>

      {/* CopyRight, Socials */}
      <div className='p-4 rounded-b-md footer-socials flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center'>
        <p className='text-white'>&copy;2024 TechBite. All rights reserved.</p>
        <div className='flex items-center gap-4 mr-5'>
          <Link to='https://github.com/sparshkadian' target='_blank'>
            <img src='../github.png' alt='github' width={25} />
          </Link>
          <Link to='https://www.instagram.com/sparsh_kadian01' target='_blank'>
            <img src='../instagram.png' alt='instagram' width={25} />
          </Link>
          <Link to='https://twitter.com/sparsh_kadian' target='_blank'>
            <img src='../twitter.png' alt='twitter' width={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
