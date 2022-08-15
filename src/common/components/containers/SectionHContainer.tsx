import React from 'react';
import { Center, HStack } from '@chakra-ui/react';

type SectionHContainerProps = {
  children: React.ReactNode;
  flexDirection: any;
};

export default function SectionHContainer({
  children,
  flexDirection,
}: SectionHContainerProps) {
  return (
    <Center height="100vh">
      <HStack
        flexDirection={flexDirection}
        justify="space-between"
        width="clamp(50%, 140rem, 90%)"
        gap="12rem"
      >
        {children}
      </HStack>
    </Center>
  );
}
