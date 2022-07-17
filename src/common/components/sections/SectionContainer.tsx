import React from 'react';
import { HStack } from '@chakra-ui/react';

type SectionContainerProps = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <HStack
      height="100vh"
      width="100vw"
      justifyContent="center"
      background="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
      // !important is used here as there's a default marginTop 0.5rem in Charkra HStack
      marginTop="0rem !important"
      scrollSnapAlign="start"
    >
      {children}
    </HStack>
  );
}
