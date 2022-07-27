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
    <Center
      height="100vh"
      background="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
      // !important is used here as there's a default marginTop 0.5rem in Charkra HStack which can not be override without !important
      marginTop="0rem !important"
    >
      <HStack
        flexDirection={flexDirection}
        justify="space-between"
        width="clamp(50%, 1400px, 90%)"
        gap="120px"
      >
        {children}
      </HStack>
    </Center>
  );
}
