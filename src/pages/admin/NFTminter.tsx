import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { VStack } from '@chakra-ui/react';

export default function Appearance() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <VStack flex={2} gap="1.6rem" borderRight="1px solid #E7E8EE" pt="5rem">
        <div>Hello world</div>
      </VStack>
    </AppContainer>
  );
}