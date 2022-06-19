import React from 'react';

import { IconButton } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';

export default function EditableLinkButton() {
  return (
    <IconButton
      isDisabled
      minW="20px"
      maxH="20px"
      icon={<AiOutlineHeart />}
      aria-label="placeholder"
    />
  );
}
