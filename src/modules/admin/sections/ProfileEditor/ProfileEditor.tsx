import React, { useEffect, useState } from 'react';
import { useUser } from '@src/common/contexts';
import { useTranslation } from 'react-i18next';

import { Text, Button, Textarea } from '@common/components';
import {
  Avatar,
  HStack,
  VStack,
  Input,
  Box,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

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

  if (!profileTitle) {
    return (
      <Box minWidth="670px" padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} gap="4" />
      </Box>
    );
  }

  return (
    <VStack>
      <Text fontSize="20px" fontWeight="600" alignSelf="flex-start">
        {t('appearance.profile.title')}
      </Text>
      <VStack
        align="stretch"
        gap="1.6rem"
        borderRadius="15px"
        px="2.2rem"
        py="1.6rem"
        minWidth="670px"
        backgroundColor="#FFFFFF"
      >
        <HStack>
          <Avatar size="xl" mx="2rem" src="https://picsum.photos/200" />
          <HStack flex={1} gap="1rem">
            <Button flex={1} borderRadius="10px">
              {t('appearance.profile.pick-an-image')}
            </Button>
            <Button flex={1} borderRadius="10px">
              {t('appearance.profile.remove')}
            </Button>
          </HStack>
        </HStack>

        <VStack>
          <Text fontSize="12px" fontWeight="400" alignSelf="flex-start">
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

        <VStack>
          <Text fontSize="12px" fontWeight="400" alignSelf="flex-start">
            {t('appearance.profile.bio')}
          </Text>
          <Textarea
            defaultValue={bio}
            placeholder={t('appearance.profile.bio-placeholder')}
            onBlur={(e) => setBio(e.target.value)}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
