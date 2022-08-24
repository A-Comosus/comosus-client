import React from 'react';
import { useToggle } from '@src/utils/hooks';

import { AspectRatio, Text, VStack } from '@chakra-ui/react';
import Dropdown from './ProfileItem.Dropdown';

type PinterestProps = {
  title: string;
  url: string;
};
export default function Pinterest({ title, url }: PinterestProps) {
  const pinId = url.replace(/\//g, '').split('pin').pop();

  const [isPinOpen, togglePinOpen] = useToggle();
  return (
    <VStack align="strech" spacing="0">
      <Dropdown toggle={togglePinOpen} isDropped={isPinOpen}>
        <Text textAlign="center" fontSize="1.6rem" fontWeight={700}>
          {title}
        </Text>
      </Dropdown>
      {isPinOpen && (
        <VStack borderRadius="0 0 1rem 1rem" p="1rem" bg="#F8F5F1">
          <AspectRatio w="100%" maxW="36rem" ratio={3 / 6}>
            <iframe
              src={`https://assets.pinterest.com/ext/embed.html?id=${pinId}`}
              scrolling="no"
            />
          </AspectRatio>
        </VStack>
      )}
    </VStack>
  );
}
