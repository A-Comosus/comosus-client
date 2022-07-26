import React from 'react';
import { useApiClient } from '@common/contexts';
import { useTranslation } from 'react-i18next';
import { useGetServerInfoQuery } from '@generated/graphql.queries';

import { AppContainer } from '@modules/admin/components';
import { HStack, VStack } from '@chakra-ui/react';
import { LinkEditor } from '@modules/admin/sections';
import { Text } from '@common/components';

export default function Admin() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };
  const { gqlClient } = useApiClient();
  const { data: serverData } = useGetServerInfoQuery(gqlClient);

  return (
    <AppContainer head={head}>
      <HStack align="stretch">
        <LinkEditor />
        <VStack>
          <Text type="h2">{t('admin.title')}</Text>
          <Text>{JSON.stringify(serverData, null, 2)}</Text>
        </VStack>
      </HStack>
    </AppContainer>
  );
}
