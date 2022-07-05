import React, { useEffect, useState } from 'react';
import { useUser } from '@src/common/contexts';
import { useTranslation } from 'react-i18next';

import ProfileEditorAvatar from './ProfileEditor.Avatar';
import { Text, Textarea } from '@common/components';
import {
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
      <Text type="h3" alignSelf="flex-start">
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
        <ProfileEditorAvatar />
        <VStack>
          <Text type="p" alignSelf="flex-start">
            {t('appearance.profile.profile-title')}
          </Text>
          <Input
            variant="unstyled"
            borderBottom="1px solid #ADB2C6"
            borderRadius="0"
            placeholder={t('appearance.profile.profile-title')}
            value={profileTitle}
            onChange={(e) => setProfileTitile(e.target.value)}
            onBlur={() =>
              // eslint-disable-next-line no-console
              console.debug('Submitting profileTitle: ', profileTitle)
            }
          />
        </VStack>

        <Textarea
          label={t('appearance.profile.bio')}
          placeholder={t('appearance.profile.bio-placeholder')}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          // eslint-disable-next-line no-console
          onBlur={() => console.debug('Submitting bio: ', bio)}
        />
      </VStack>
    </VStack>
  );
}
