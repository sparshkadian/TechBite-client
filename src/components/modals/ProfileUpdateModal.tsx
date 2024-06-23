import React, { useState } from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useProfileActions } from '../../hooks/useProfileActions';
import Button from '../Button';
import toast from 'react-hot-toast';

const ProfileUpdateModal = ({
  setProfileEdit,
}: {
  setProfileEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { updateProfile } = useProfileActions();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: currentUser.name,
    Country: currentUser.Country,
    Occupation: currentUser.Occupation,
    Skills: currentUser.Skills.join(' ,'),
  });

  const { name, Country, Occupation, Skills } = formData;

  const handleOk = () => {
    setIsModalOpen(false);
    setProfileEdit(false);
  };

  const handleCancel = () => {
    setProfileEdit(false);
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(formData);
    toast.success('Profile Updated Successfully');
  };

  return (
    <>
      <Modal
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <form
          onSubmit={handleFormSubmit}
          className='manrope-semibold flex flex-col items-center gap-5'
        >
          {/* name */}
          <div className='flex items-center gap-2 w-full justify-center'>
            <p className='text-base'>Name: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='name'
              value={name}
              className='border-2 py-1 px-2 rounded-md text-base w-[60%]'
            />
          </div>

          {/* Country */}
          <div className='flex items-center gap-2 w-full justify-center'>
            <p className='text-base'>Country: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='Country'
              value={Country}
              className='border-2 py-1 px-2 rounded-md text-base mr-4 w-[60%]'
            />
          </div>

          {/* Occupation */}
          <div className='flex items-center gap-2 w-full justify-center'>
            <p className='text-base'>Occupation: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='Occupation'
              value={Occupation}
              className='border-2 py-1 px-2 rounded-md text-base mr-10 w-[60%]'
            />
          </div>

          {/* Skills */}
          <div className='flex items-center gap-2 w-full justify-center'>
            <p className='text-base'>Skills: </p>
            <input
              placeholder='Enter , seperated skills'
              onChange={handleInputChange}
              value={Skills}
              type='text'
              id='Skills'
              className='border-2 py-1 px-2 rounded-md text-base ml-3 w-[60%]'
              spellCheck={false}
            />
          </div>

          <div className='mt-2 w-full flex justify-center'>
            <Button
              type='submit'
              className='purple-blue-gradient px-4 py-2 rounded-sm text-white shadow-md text-[16px] w-[120px]'
            >
              Confirm
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ProfileUpdateModal;
