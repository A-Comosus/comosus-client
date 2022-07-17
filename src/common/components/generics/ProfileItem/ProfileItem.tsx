import React from 'react';

import { Text, VStack } from '@chakra-ui/react';
import Video from './ProfileItem.Video';
import Pinterest from './ProfileItem.Pinterest';

type ProfileItemProps = {
  link: PublicLink;
};
export default function ProfileItem({ link }: ProfileItemProps) {
  const { type, url, title } = link;

  const variant = {
    generic: (
      <VStack borderRadius="10px" p="10px" bg="white">
        <a href={url}>
          <Text textAlign="center" fontSize={15} fontWeight={700}>
            {title}
          </Text>
        </a>
      </VStack>
    ),
    video: <Video title={title} url={url} />,
    pinterest: <Pinterest title={title} url={url} />,
  };

  return variant[type as 'generic' | 'video' | 'pinterest'];
}
