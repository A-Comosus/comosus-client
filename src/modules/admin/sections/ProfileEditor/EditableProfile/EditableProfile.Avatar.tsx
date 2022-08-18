import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Button, Text } from '@src/common/components';
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

const baseUrl = process.env.NEXT_PUBLIC_LAMBDA_UPLOAD_FILE_ENDPOINT;

export default function ProfileEditorAvatar() {
  const { t } = useTranslation('admin');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useUser();
  const { updateAvatar } = useUpdateAvatarApi();

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
      } = await axios.post(baseUrl as string, formData);
      updateAvatar({ url: link });
      setAvatartUploadedMsg(
        `Avatar Uploaded Successfully, please refresh the page if you can't see it`,
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleAvatarRemoveClick = async () => {
    const params = { user_id: user.id };
    try {
      await axios.delete(baseUrl as string, { data: params });
      updateAvatar({ url: '' });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <HStack spacing="3rem">
        <Avatar user={user} size="2xl" />
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
        <ModalContent display="flex" flexDirection="column">
          <ModalHeader color="#3E4C65">
            {t('appearance.profile.pick-an-image')}
          </ModalHeader>
          <ModalCloseButton color="#3E4C65" />
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
                style={{
                  fontSize: '1.6rem',
                  color: '#3E4C65',
                  marginBottom: '1rem',
                  width: '100%',
                }}
              />
              <Button type="submit" variant="accent" width="100%">
                {t('appearance.profile.upload')}
              </Button>
              <Text type="p" color="#3E4C65">
                {avatarUploadedMsg}
              </Text>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setAvatartUploadedMsg('');
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
