import React from 'react';

import { Center } from '@chakra-ui/react';
import Logo from './Logo';

export default function Footer() {
  return (
    <Center as="footer" borderTop="2px solid #eaeaea" py="2rem">
      <Logo variant="inline" />
    </Center>
  );
}
