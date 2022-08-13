import React from 'react';

import { HStack, Skeleton, SkeletonText, VStack } from '@chakra-ui/react';
import { AdminSectionItemCard } from '@src/modules/admin/components';

export default function SkeletonCard() {
  return (
    <AdminSectionItemCard>
      <HStack alignSelf="stretch" alignItems="flex-start" spacing="2rem">
        <Skeleton borderRadius="1.6rem" boxSize="150px" />

        <VStack
          flex={1}
          justifyContent="space-between"
          alignItems="stretch"
          spacing="1rem"
        >
          <VStack alignItems="flex-start">
            <Skeleton w="20rem" h="1.4rem" />
            <Skeleton w="4rem" h="1.2rem" />
            <SkeletonText
              alignSelf="stretch"
              mt="4"
              noOfLines={4}
              spacing="4"
            />
          </VStack>

          <HStack spacing="2rem">
            <Skeleton flex={1} h="4rem" borderRadius="1rem" />
            <Skeleton flex={1} h="4rem" borderRadius="1rem" />
          </HStack>
        </VStack>
      </HStack>
    </AdminSectionItemCard>
  );
}
