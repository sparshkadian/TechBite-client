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
  });

  const { name, Country, Occupation } = formData;

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
    updateProfile(currentUser._id, formData);
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
        width={700}
      >
        <form
          onSubmit={handleFormSubmit}
          className='manrope-semibold flex flex-wrap justify-between gap-5 pr-7'
        >
          {/* name */}
          <div className='flex items-center gap-2'>
            <p>Name: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='name'
              value={name}
              className='border-2 py-1 px-2 rounded-md'
            />
          </div>

          {/* Country */}
          <div className='flex items-center gap-2'>
            <p>Country: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='Country'
              value={Country}
              className='border-2 py-1 px-2 rounded-md'
            />
          </div>

          {/* Occupation */}
          <div className='flex items-center gap-2'>
            <p>Occupation: </p>
            <input
              type='text'
              onChange={handleInputChange}
              id='Occupation'
              value={Occupation}
              className='border-2 py-1 px-2 rounded-md'
            />
          </div>

          {/* Skills */}
          {/* <div className='flex items-center gap-2'>
            <p>Skills: </p>
            <input
              type='text'
              id='name'
              //   value={name}
              className='border-2 py-1 px-2 rounded-md'
            />
          </div> */}
          <div className='mt-2 w-full flex justify-center'>
            <Button
              type='submit'
              className='purple-blue-gradient px-4 py-2 rounded-sm text-white shadow-md text-[16px] w-[120px]'
            >
              Edit Profile
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ProfileUpdateModal;
