import React from 'react';

import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Text } from '@common/components';

import Repository from './Repository';
import { useTranslation } from 'react-i18next';

type ReposProps = {
  repos: Repository[];
};
export default function Repos({ repos }: ReposProps) {
  const { t } = useTranslation('project');

  return (
    <VStack align="stretch" gap="3rem">
      <Text type="generic.h1" fontWeight={700}>
        {t('repos.heading')}
      </Text>

      <Wrap justify="center" spacing="4rem">
        {repos.map((repo, index) => (
          <WrapItem key={index}>
            <Repository repo={repo} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
}
