import { useState, useEffect } from 'react';

const MoveToTop = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {scrollY > 200 && (
        <img
          onClick={handleMoveToTop}
          src='../moveToTop.png'
          alt='up-arrow'
          width={40}
          className='moveToTop fixed bottom-3 right-4 z-[10] cursor-pointer'
        />
      )}
    </>
  );
};

export default MoveToTop;
