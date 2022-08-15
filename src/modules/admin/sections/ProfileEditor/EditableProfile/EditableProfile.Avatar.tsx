import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Button } from '@src/common/components';
import { useUser } from '@common/contexts';
import { useUpdateAvatarApi } from '@src/services';
import {
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { isNil } from 'lodash';

export default function ProfileEditorAvatar() {
  const { t } = useTranslation('admin');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useUser();
  const { updateAvatar } = useUpdateAvatarApi();

  const LAMBDA_UPLOAD_FILE_URL =
    'https://53nraoptli.execute-api.ap-southeast-2.amazonaws.com/dev/file-upload';

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUploadedMsg, setAvatartUploadedMsg] = useState('');

  const formData = new FormData();
  formData.append('avatar', avatarFile as File);
  formData.append('user_id', user.id);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const {
        data: { link },
      } = await axios.post(LAMBDA_UPLOAD_FILE_URL, formData);
      updateAvatar({ url: link });
      setAvatartUploadedMsg('Avatar Uploaded Successfully');
    } catch (err) {
      console.error(err);
    }
  };

  const handleAvatarRemoveClick = async () => {
    const params = { user_id: user.id };
    try {
      await axios.delete(LAMBDA_UPLOAD_FILE_URL, { data: params });
      updateAvatar({ url: '' });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <HStack>
        <Avatar user={user} />
        <HStack flex={1} gap="1rem">
          <Button onClick={onOpen}>
            {t('appearance.profile.pick-an-image')}
          </Button>
          <Button onClick={handleAvatarRemoveClick}>
            {t('appearance.profile.remove')}
          </Button>
        </HStack>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <input
                id="avatar"
                type="file"
                accept="image/*"
                name="avatar"
                onChange={(event) => {
                  if (!isNil(event.target.files)) {
                    setAvatarFile(event.target.files[0]);
                  }
                }}
              />
              <Button type="submit">{t('appearance.profile.upload')}</Button>
              <p>{avatarUploadedMsg}</p>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
