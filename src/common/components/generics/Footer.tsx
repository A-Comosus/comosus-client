import React from 'react';
import { useServer } from '@src/services';

import { Center, HStack, Spinner, Text } from '@chakra-ui/react';
import { Icon } from '@src/common/components';
import Logo from './Logo';

export default function Footer() {
  const { error, isFetchingServerInfo } = useServer();

  return (
    <Center
      as="footer"
      position="relative"
      borderTop="2px solid #eaeaea"
      p="2rem"
    >
      <Logo variant="inline" />
      <HStack position="absolute" right="2rem" fontSize="1.6rem">
        <Text>Server:</Text>
        {isFetchingServerInfo ? (
          <Spinner />
        ) : error ? (
          <Icon variant="error" />
        ) : (
          <Icon variant="check" />
        )}
      </HStack>
    </Center>
  );
}
