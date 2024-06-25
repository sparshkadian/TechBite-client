import { Link } from 'react-router-dom';

const Footer = () => {
  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='manrope-semibold max-w-7xl mx-auto my-10 flex gap-5 px-2 tracking-tight'>
      {/* Logo */}
      <div className='border-2 hidden md:flex glass-wrapper w-[30%] px-4 py-3 shadow-xl rounded-xl'>
        <div className='footerLogo-container rounded-xl flex justify-center w-full'>
          <Link
            onClick={handleMoveToTop}
            to='#'
            className='flex items-center manrope-semibold text-3xl'
          >
            <span>Tech</span>
            <img
              src='../logo.png'
              alt='logo'
              width={20}
              className='pt-[6px] '
            />
            <span className='text-blue-600'>Bite</span>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className='glass-wrapper border-2 w-full px-4 py-3 shadow-xl rounded-xl flex flex-col gap-5'>
        <div className='footerLinks-container flex-1 flex gap-[55px] rounded-xl'>
          {/* Menu */}
          <div className='flex flex-col gap-5'>
            <p className='text-lg'>Menu</p>
            <Link to='/myBlogs'>My Blogs</Link>
            <Link to='/profile'>Profile</Link>
          </div>

          {/* Website */}
          <div className='flex flex-col gap-5'>
            <p className='text-lg'>Website</p>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>

          {/* Contact Me */}
          <div className='flex flex-col gap-5 items-start'>
            <p className='text-lg'>Contact Me</p>
            <div className='flex gap-5'>
              <Link to='https://github.com/sparshkadian' target='_blank'>
                <img src='../github.png' alt='github' width={25} />
              </Link>
              <Link
                to='https://www.instagram.com/sparsh_kadian01'
                target='_blank'
              >
                <img src='../instagram.png' alt='instagram' width={25} />
              </Link>
              <Link to='https://twitter.com/sparsh_kadian' target='_blank'>
                <img src='../twitter.png' alt='twitter' width={25} />
              </Link>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div>
          <p className='text-sm'>&copy;TechBite2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
