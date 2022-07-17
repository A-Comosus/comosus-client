import React from 'react';
import { AspectRatio, Box, Button, Text, VStack } from '@chakra-ui/react';
import { useToggle } from '@src/utils/hooks';

type PinterestProps = {
  title: string;
  url: string;
};
export default function Pinterest({ title, url }: PinterestProps) {
  const pinId = url.replace(/\//g, '').split('pin').pop();

  const [isPinOpen, togglePinOpen] = useToggle();

  return (
    <VStack align="strech">
      <Box
        onClick={() => togglePinOpen()}
        cursor="pointer"
        borderRadius="10px"
        p="10px"
        bg="white"
      >
        <Text textAlign="center" fontSize={15} fontWeight={700}>
          {title}
        </Text>
      </Box>
      {isPinOpen && (
        <VStack p="20px" bg="white">
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
