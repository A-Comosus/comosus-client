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
    <VStack align="stretch" gap="30px">
      <Text type="generic.h1" fontWeight={700}>
        {t('repos.heading')}
      </Text>

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
