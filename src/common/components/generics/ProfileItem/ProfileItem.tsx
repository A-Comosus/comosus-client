import React from 'react';

import { Text, VStack } from '@chakra-ui/react';

type ProfilePreviewLinkProps = {
  link: Link;
};
export default function ProfilePreviewLink({ link }: ProfilePreviewLinkProps) {
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
