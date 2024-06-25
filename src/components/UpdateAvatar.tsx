import { useState, useEffect, useRef } from 'react';
import RemoveAvatarModal from './modals/RemoveAvatarModal';
import { useProfileActions } from '../hooks/useProfileActions';
import toast from 'react-hot-toast';

const UpdateAvatar = ({
  setUpdateAvatar,
}: {
  setUpdateAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { updateAvatarFirebase } = useProfileActions();
  const fileRef = useRef<HTMLInputElement>(null);
  const [removeAvatar, setRemoveAvatar] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) {
      const uploadFile = async () => {
        toast('Uploading Profile Picture');
        await updateAvatarFirebase('', file); //setFileName
        setFile(null);
        toast('Upload complete');
      };
      uploadFile();
    }
  }, [file, updateAvatarFirebase]);

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
        <form action=''>
          <input
            onChange={handleFileChange}
            type='file'
            ref={fileRef}
            style={{ display: 'none' }}
            accept='image/*'
          />
        </form>
        <p
          onClick={() => {
            if (fileRef.current) {
              fileRef.current.click();
            }
          }}
          id='updateAvatar'
          className='hover:text-gray-500'
        >
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
