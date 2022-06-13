import React from 'react';
import { useApiClient } from '@common/contexts';
import { useGetServerInfoQuery } from '@generated/graphql.queries';

import { AppContainer } from '@modules/admin/components';
import { HStack } from '@chakra-ui/react';
import { Text } from '@common/components';

export default function Admin() {
  const head = { title: 'A-Comosus Admin' };

  const { gqlClient } = useApiClient();
  const { data: serverData } = useGetServerInfoQuery(gqlClient);

  return (
    <AppContainer head={head}>
      <HStack>
        <Text type="h2">Admin Panel</Text>
        <Text>{JSON.stringify(serverData, null, 2)}</Text>
      </HStack>
    </AppContainer>
  );
}
