import React from 'react';

import { Text } from '@src/common/components';
import { VStack, StackProps } from '@chakra-ui/react';

type AdminSectionContainerProps = {
  heading: string;
  children: React.ReactNode;
};
export function AdminSectionContainer({
  heading,
  children,
}: AdminSectionContainerProps) {
  return (
    <VStack alignItems="stretch" spacing="1.6rem">
      <Text as="h2" fontWeight="semibold" fontSize="2rem">
        {heading}
      </Text>

      <VStack alignItems="stretch" spacing="1.6rem">
        {children}
      </VStack>
    </VStack>
  );
}

type AdminSectionItemCardProps = {
  children: React.ReactNode;
} & StackProps;
export function AdminSectionItemCard({
  children,
  ...props
}: AdminSectionItemCardProps) {
  return (
    <VStack
      alignItems="flex-start"
      spacing="1rem"
      borderRadius="1.5rem"
      padding="2.5rem"
      background="#272429"
      {...props}
    >
      {children}
    </VStack>
  );
}
