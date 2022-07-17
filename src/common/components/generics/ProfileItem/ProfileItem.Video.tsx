import React from 'react';
import { useToggle } from '@src/utils/hooks';

import { AspectRatio, Box, CloseButton, Text, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

type VideoProps = {
  title: string;
  url: string;
};
export default function Video({ title, url }: VideoProps) {
  const [isVideoOpen, toggleVideoOpen] = useToggle();

  return (
    <VStack flex={1} align="stretch">
      {isVideoOpen ? (
        <>
          <AspectRatio border="2px solid white" ratio={1.77}>
            <ReactPlayer url={url} controls={true} width="100%" height="100%" />
          </AspectRatio>
          <CloseButton
            alignSelf="center"
            color="white"
            onClick={() => toggleVideoOpen()}
          />
        </>
      ) : (
        <Box
          onClick={() => toggleVideoOpen()}
          cursor="pointer"
          borderRadius="10px"
          p="10px"
          bg="white"
        >
          <Text textAlign="center" fontSize={15} fontWeight={700}>
            {title}
          </Text>
        </Box>
      )}
    </VStack>
  );
}
