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
      bg="#F8F5F1"
      color="#3B3C46"
      _hover={{
        boxShadow: 'inset 0 0 0 2px white',
        bg: 'transparent',
        color: '#F8F5F1',
      }}
    >
      <LinkOverlay href={url}>
        <Text textAlign="center" fontSize="1.6rem" fontWeight={700}>
          {title}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
}
