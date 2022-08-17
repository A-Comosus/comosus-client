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
    <Center height="95vh">
      <HStack
        flex={1}
        flexDirection={flexDirection}
        justify="space-between"
        gap="12rem"
      >
        {children}
      </HStack>
    </Center>
  );
}
