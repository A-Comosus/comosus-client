import React from 'react';

import {
  LinkBox,
  Flex,
  LinkOverlay,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  const filter = useColorModeValue('invert(0%)', 'invert(100%)');

  return (
    <LinkBox>
      <Flex
        justify="center"
        align="center"
        gap="1rem"
        py="2rem"
        borderTop="1px solid"
        borderColor="#eaeaea"
      >
        <LinkOverlay href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          {'Power By '}
        </LinkOverlay>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          w="72px"
          h="16px"
          filter={filter}
        />
      </Flex>
    </LinkBox>
  );
}
