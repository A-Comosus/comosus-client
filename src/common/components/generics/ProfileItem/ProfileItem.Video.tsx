import React from 'react';
import { useToggle } from '@src/utils/hooks';

import { AspectRatio, CloseButton, Text, VStack } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import Dropdown from './ProfileItem.Dropdown';

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
          <AspectRatio border="2px solid white" ratio={1.77} bg="black">
            <ReactPlayer url={url} controls={true} width="100%" height="100%" />
          </AspectRatio>
          <CloseButton
            alignSelf="center"
            color="white"
            onClick={() => toggleVideoOpen()}
          />
        </>
      ) : (
        <Dropdown toggle={toggleVideoOpen} isDropped={isVideoOpen}>
          <Text textAlign="center" fontSize="1.6rem" fontWeight={700}>
            {title}
          </Text>
        </Dropdown>
      )}
    </VStack>
  );
}
