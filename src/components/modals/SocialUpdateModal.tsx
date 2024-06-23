import React, { useState } from 'react';
import { Modal } from 'antd';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useProfileActions } from '../../hooks/useProfileActions';
import Button from '../Button';
import toast from 'react-hot-toast';

const SocialUpdateModal = ({
  setSocialsEdit,
}: {
  setSocialsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { updateProfile } = useProfileActions();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [formData, setFormData] = useState({
    github: currentUser.github,
    website: currentUser.website,
    instagram: currentUser.instagram,
    twitter: currentUser.twitter,
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { github, website, instagram, twitter } = formData;

  const handleOk = () => {
    setIsModalOpen(false);
    setSocialsEdit(false);
  };

  const handleCancel = () => {
    setSocialsEdit(false);
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const removeSocial = (e: any) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id]: '',
    }));
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(formData);
    toast.success('Socials Updated Successfully');
  };

  return (
    <>
      <Modal
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form
          onSubmit={handleFormSubmit}
          className='manrope-semibold flex flex-col gap-5 items-center'
        >
          {/* Github */}
          <div className='flex items-center gap-2'>
            <p>Github: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='github'
              value={github}
              className='border-2 py-1 px-2 rounded-md w-[250px]'
            />
            <img
              onClick={removeSocial}
              src='../remove-social.png'
              alt='remove'
              width={13}
              className='ml-5 cursor-pointer'
              id='github'
            />
          </div>

          {/* Website */}
          <div className='flex items-center gap-2'>
            <p>website: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='website'
              value={website}
              className='border-2 py-1 px-2 rounded-md w-[250px] mr-1'
            />
            <img
              onClick={removeSocial}
              src='../remove-social.png'
              alt='remove'
              width={13}
              className='ml-3 cursor-pointer'
              id='website'
            />
          </div>

          {/* Instagram */}
          <div className='flex items-center gap-2'>
            <p>Instagram: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='instagram'
              value={instagram}
              className='border-2 py-1 px-2 rounded-md w-[250px] mr-4'
            />
            <img
              onClick={removeSocial}
              src='../remove-social.png'
              alt='remove'
              width={13}
              className='mr-4 cursor-pointer'
              id='instagram'
            />
          </div>

          {/* Twitter */}
          <div className='flex items-center gap-2'>
            <p>twitter: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='twitter'
              value={twitter}
              className='border-2 py-1 px-2 rounded-md w-[250px] ml-2'
            />
            <img
              onClick={removeSocial}
              src='../remove-social.png'
              alt='remove'
              width={13}
              className='ml-3 cursor-pointer'
              id='twitter'
            />
          </div>

          <div className='mt-2 w-full flex justify-center'>
            <Button
              type='submit'
              className='purple-blue-gradient px-4 py-2 rounded-sm text-white shadow-md text-[16px] w-[140px]'
            >
              Confirm
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SocialUpdateModal;
