import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { HStack } from '@chakra-ui/react';
import { LinkEditor } from '@modules/admin/sections';

export default function Admin() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <HStack flex={1} align="stretch">
        <LinkEditor />
      </HStack>
    </AppContainer>
  );
}
