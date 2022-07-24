import { VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';
import React from 'react';
import Language from './Repository.Language';

type RepositoryProps = {
  repo: Repository;
};
export default function Repository({ repo }: RepositoryProps) {
  return (
    <VStack
      align="stretch"
      gap="36px"
      borderRadius="15px"
      p="12px"
      w="372px"
      boxShadow="2px 2px 2px rgba(0, 0, 0, 0.05)"
      bg="#ffffff"
    >
      <Text type="generic.h2">{repo.name}</Text>
      <Text>{repo.description}</Text>

      <Language languages={repo.languages} />
    </VStack>
  );
}
