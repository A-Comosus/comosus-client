import React from 'react';
import { HStack } from '@chakra-ui/react';

type SectionHContainerProps = {
  children: React.ReactNode;
  flexDirection: any;
};

export default function SectionHContainer({
  children,
  flexDirection,
}: SectionHContainerProps) {
  return (
    <HStack
      height="100vh"
      width="100vw"
      justifyContent="center"
      background="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
      // !important is used here as there's a default marginTop 0.5rem in Charkra HStack which can not be override without !important
      marginTop="0rem !important"
    >
      <HStack
        flexDirection={flexDirection}
        width="90%"
        paddingTop="10rem"
        paddingBottom="10rem"
        gap="5rem"
      >
        {children}
      </HStack>
    </HStack>
  );
}
