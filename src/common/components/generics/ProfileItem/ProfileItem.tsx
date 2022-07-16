import React from 'react';

import { Text, VStack } from '@chakra-ui/react';

type ProfileItemProps = {
  link: PublicLink;
};
export default function ProfileItem({ link }: ProfileItemProps) {
  const { url, title } = link;

  return (
    <VStack borderRadius="10px" p="10px" bg="white">
      <a href={url}>
        <Text textAlign="center" fontSize={15} fontWeight={700}>
          {title}
        </Text>
      </a>
    </VStack>
  );
}
