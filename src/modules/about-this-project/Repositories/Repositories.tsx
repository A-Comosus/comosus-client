import React from 'react';

import { Box, VStack } from '@chakra-ui/react';
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

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(37.2rem, 1fr))"
        gap="4rem"
      >
        {repos.map((repo) => (
          <Repository key={repo.name} repo={repo} />
        ))}
      </Box>
    </VStack>
  );
}
