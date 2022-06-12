import React from 'react';
import { useApiClient } from '@common/contexts';
import { useGetServerInfoQuery } from '@generated/graphql.queries';

import { VStack } from '@chakra-ui/react';
import { Text } from '@common/components';

export default function Admin() {
  const { gqlClient } = useApiClient();
  const { data: serverData } = useGetServerInfoQuery(gqlClient);

  return (
    <VStack minH="100vh" justify="center">
      <Text type="h2">Admin Panel</Text>
      <Text>{JSON.stringify(serverData, null, 2)}</Text>
    </VStack>
  );
}
