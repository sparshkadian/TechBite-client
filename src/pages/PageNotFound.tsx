import Lottie from 'lottie-react';
import pageNotFound from '../animations/pageNotFound.json';

const PageNotFound = () => {
  return (
    <div className='w-screen h-screen '>
      <Lottie
        animationData={pageNotFound}
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default PageNotFound;
