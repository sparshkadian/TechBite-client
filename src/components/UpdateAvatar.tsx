import { useEffect } from 'react';
import { useState } from 'react';
import RemoveAvatarModal from './modals/RemoveAvatarModal';

const UpdateAvatar = ({
  setUpdateAvatar,
}: {
  setUpdateAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [removeAvatar, setRemoveAvatar] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id !== 'updateAvatar') {
        setUpdateAvatar(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        id='updateAvatar'
        className='absolute text-white w-[150px] flex flex-col items-center gap-2 py-2 manrope-semibold top-10 z-10 left-0 rounded-md bg-black'
      >
        <p id='updateAvatar' className='hover:text-gray-500'>
          Upload a Photo
        </p>
        <p
          id='updateAvatar'
          onClick={() => {
            setRemoveAvatar(true);
          }}
          className='hover:text-gray-500'
        >
          Remove Photo
        </p>
      </div>

      {removeAvatar && <RemoveAvatarModal setRemoveAvatar={setRemoveAvatar} />}
    </>
  );
};

export default UpdateAvatar;
