import React from 'react';

import { IconButton } from '@chakra-ui/react';
import { Icon } from '@src/common/components';

export default function EditableLinkButton() {
  return (
    <IconButton
      isDisabled
      minW="20px"
      maxH="20px"
      icon={<Icon variant="heart" />}
      aria-label="placeholder"
    />
  );
}
