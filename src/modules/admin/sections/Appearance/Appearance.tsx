import React from 'react';
import { VStack } from '@chakra-ui/react';
import AppearanceProfile from './Appearance.Profile';

export default function Appearance() {
  return (
    <VStack flex={2} borderRight="1px solid #E7E8EE" pt="80px" spacing={25}>
      <AppearanceProfile />
    </VStack>
  );
}
