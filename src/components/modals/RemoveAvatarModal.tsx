import { useState } from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useProfileActions } from '../../hooks/useProfileActions';
import toast from 'react-hot-toast';

const RemoveAvatarModal = ({
  setRemoveAvatar,
}: {
  setRemoveAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { updateProfile } = useProfileActions();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    const userData = { ...currentUser, avatar: '' };
    setIsModalOpen(false);
    setRemoveAvatar(false);
    if (currentUser.avatar) {
      updateProfile(userData);
      toast('Profile Picture Removed', {
        style: {
          backgroundColor: 'black',
          color: 'white',
        },
      });
    } else {
      toast('No Profile Picture Present', {
        style: {
          backgroundColor: 'black',
          color: 'white',
        },
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setRemoveAvatar(false);
  };

  return (
    <>
      <Modal
        cancelButtonProps={{ hidden: true }}
        okText='Yes'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className='my-5 flex justify-center manrope-semibold text-lg'>
          Are You sure u want to remove Profile Picture?
        </p>
      </Modal>
    </>
  );
};

export default RemoveAvatarModal;
