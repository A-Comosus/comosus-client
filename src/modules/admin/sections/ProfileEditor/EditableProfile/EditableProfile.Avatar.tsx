import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@src/common/components';
import { Avatar, HStack } from '@chakra-ui/react';

export default function ProfileEditorAvatar() {
  const { t } = useTranslation('admin');
  return (
    <HStack>
      <Avatar size="xl" mx="2rem" src="https://picsum.photos/200" />
      <HStack flex={1} gap="1rem">
        <Button>{t('appearance.profile.pick-an-image')}</Button>
        <Button>{t('appearance.profile.remove')}</Button>
      </HStack>
    </HStack>
  );
}
