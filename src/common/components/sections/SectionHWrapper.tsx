import React from 'react';
import { HStack } from '@chakra-ui/react';

type SectionHWrapperProps = {
  children: React.ReactNode;
  flexDirection: any;
};

export default function SectionHWrapper({
  children,
  flexDirection,
}: SectionHWrapperProps) {
  return (
    <HStack
      flexDirection={flexDirection}
      width="90%"
      maxWidth="1400px"
      paddingTop="10rem"
      paddingBottom="10rem"
      gap="5rem"
    >
      {children}
    </HStack>
  );
}
