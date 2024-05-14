const HeroMain = () => {
  return (
    <div className='sm:h-[70vh] lg:h-screen sm:grid sm:grid-cols-2'>
      {/* Left Panel */}
      <div className='text-center sm:text-left flex flex-col px-5 mt-20 sm:mt-0 sm:justify-center gap-4'>
        <p className='tagline manrope-semibold text-4xl md:text-5xl lg:text-7xl tracking-tight xl:h-[155px]'>
          Discover the Latest Tech Insights
        </p>
        <p className='ml-1 manrope-normal text-[#777] text-xl lg:text-2xl'>
          Unlock the Power of Tech: Dive Deep into Cutting-Edge Insights and
          Trends for Tomorrow's Innovations!
        </p>
      </div>

      {/* Right Panel */}
      <div className='sm:relative sm:mr-4 p-4 sm:p-0'>
        <div className='mt-5 sm:mt-0 sm:absolute sm:top-[50%] sm:-translate-y-1/2'>
          <img
            src='../hero-main-bg.jpg'
            alt='laptop'
            className='w-full object-cover h-full rounded-[40px]'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
