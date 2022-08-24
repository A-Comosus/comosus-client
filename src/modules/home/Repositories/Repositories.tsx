import React from 'react';

import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Text } from '@common/components';

import Repository from './Repository';
import { useTranslation } from 'react-i18next';

type RepositoriesProps = {
  repos: Repository[];
};
export function Repositories({ repos }: RepositoriesProps) {
  const { t } = useTranslation('project');
  const prefWidth = useBreakpointValue(['30rem', '37.2rem']);

  return (
    <VStack align="stretch" gap="3rem">
      <Text type="generic.h1" fontWeight={700}>
        {t('repos.heading')}
      </Text>

      <Box
        display="grid"
        gridTemplateColumns={`repeat(auto-fit, minmax(${prefWidth}, 1fr))`}
        gap="3rem"
      >
        {repos.map((repo) => (
          <Repository key={repo.name} repo={repo} />
        ))}
      </Box>
    </VStack>
  );
}
