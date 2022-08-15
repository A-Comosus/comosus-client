import React from 'react';
import { useToggle } from '@src/utils/hooks';

import { AspectRatio, Button, Text, VStack } from '@chakra-ui/react';
import Dropdown from './ProfileItem.Dropdown';

type PinterestProps = {
  title: string;
  url: string;
};
export default function Pinterest({ title, url }: PinterestProps) {
  const pinId = url.replace(/\//g, '').split('pin').pop();

  const [isPinOpen, togglePinOpen] = useToggle();

  return (
    <VStack align="strech">
      <Dropdown toggle={togglePinOpen} isDropped={isPinOpen}>
        <Text textAlign="center" fontSize="1.6rem" fontWeight={700}>
          {title}
        </Text>
      </Dropdown>
      {isPinOpen && (
        <VStack
          marginTop="0px !important"
          borderRadius="0 0 10px 10px"
          p="20px"
          bg="white"
        >
          <AspectRatio width="50%" ratio={0.4}>
            <iframe
              src={`https://assets.pinterest.com/ext/embed.html?id=${pinId}`}
              scrolling="no"
            ></iframe>
          </AspectRatio>
          <Button alignSelf="stretch">View On Pinterest</Button>
        </VStack>
      )}
    </VStack>
  );
}
