import React from 'react';

import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Text } from '@common/components';

import Repository from './Repository';

type ReposProps = {
  repos: Repository[];
};
export default function Repos({ repos }: ReposProps) {
  return (
    <VStack border="1px solid purple">
      <Text type="generic.h1">Repositories</Text>

      <Wrap justify="center" spacing="40px">
        {repos.map((repo, index) => (
          <WrapItem key={index}>
            <Repository repo={repo} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
}
