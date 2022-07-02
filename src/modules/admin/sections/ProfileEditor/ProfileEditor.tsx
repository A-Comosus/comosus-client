import React, { useEffect, useState } from 'react';
import { Text, Button } from '@common/components';
import { useTranslation } from 'react-i18next';
import { Avatar, HStack, VStack, Input, Textarea } from '@chakra-ui/react';
import { useUser } from '@src/common/contexts';

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
      px={35}
      py={25}
      backgroundColor="#FFFFFF"
      borderRadius="15px"
      width="670px"
      justify="center"
      align="center"
      spacing={25}
    >
      <HStack justifyContent="space-between" width="100%" spacing="63px">
        <Avatar
          marginLeft="35px"
          height="100px"
          width="100px"
          src="https://picsum.photos/200"
        />
        <HStack spacing="40px">
          <Button width="181px" borderRadius="10px">
            {t('appearance.profile.pick-an-image')}
          </Button>
          <Button width="181px" borderRadius="10px">
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
