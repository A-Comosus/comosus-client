import React, { useEffect, useState } from 'react';
import { useUser } from '@src/common/contexts';
import { useTranslation } from 'react-i18next';

import { Text, Button } from '@common/components';
import { Avatar, HStack, VStack, Input, Textarea } from '@chakra-ui/react';

export default function ProfileEditor() {
  const { t } = useTranslation('admin');
  const {
    user: { username },
  } = useUser();
  const [profileTitle, setProfileTitile] = useState('');
  const [bio, setBio] = useState('');
  useEffect(() => {
    setProfileTitile(username);
  }, [username]);

  return (
    <VStack
      px="2.2rem"
      py="1.6rem"
      backgroundColor="#FFFFFF"
      borderRadius="15px"
      minWidth="670px"
      spacing="1.6rem"
    >
      <HStack width="100%">
        <Avatar size="xl" mx="2rem" src="https://picsum.photos/200" />
        <HStack flex={1} spacing="1rem">
          <Button flex={1} borderRadius="10px">
            {t('appearance.profile.pick-an-image')}
          </Button>
          <Button flex={1} borderRadius="10px">
            {t('appearance.profile.remove')}
          </Button>
        </HStack>
      </HStack>

      <VStack width="100%" align="start">
        <Text fontSize="12px" fontWeight="400">
          {t('appearance.profile.profile-title')}
        </Text>
        <Input
          variant="unstyled"
          borderBottom="1px solid #ADB2C6"
          borderRadius="0"
          defaultValue={profileTitle}
          placeholder={t('appearance.profile.profile-title')}
          onBlur={(e) => setProfileTitile(e.target.value)}
        />
      </VStack>

      <VStack width="100%" align="start">
        <Text fontSize="12px" fontWeight="400">
          {t('appearance.profile.bio')}
        </Text>
        <Textarea
          variant="unstyled"
          border="1px solid #ADB2C6"
          minHeight="111"
          borderRadius="5"
          defaultValue={bio}
          placeholder={t('appearance.profile.bio-placeholder')}
          onBlur={(e) => setBio(e.target.value)}
        />
      </VStack>
    </VStack>
  );
}
