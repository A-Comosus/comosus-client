import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { HStack, VStack } from '@chakra-ui/react';
import { ProfileEditor } from '@modules/admin/sections';

export default function Appearance() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <HStack flex={1} align="stretch">
        <VStack flex={2} gap="1.6rem" borderRight="1px solid #E7E8EE" pt="5rem">
          <ProfileEditor />
        </VStack>
      </HStack>
    </AppContainer>
  );
}
