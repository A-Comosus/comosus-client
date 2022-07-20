import React from 'react';

import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

type GenericProps = {
  title: string;
  url: string;
};
export default function Generic({ title, url }: GenericProps) {
  return (
    <LinkBox
      borderRadius="10px"
      p="10px"
      bg="white"
      _hover={{
        boxShadow: 'inset 0 0 0 2px white',
        bg: 'transparent',
        color: 'white',
      }}
    >
      <LinkOverlay href={url}>
        <Text textAlign="center" fontSize={15} fontWeight={700}>
          {title}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
}
