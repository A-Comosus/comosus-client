import React from 'react';

import { Box, VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';
import Team from './Teams.Team';
import { useTranslation } from 'react-i18next';

type TeamsProps = {
  teams: Team[];
};
export function Teams({ teams }: TeamsProps) {
  const { t } = useTranslation('project');

  return (
    <VStack align="stretch" gap="3rem">
      <Text type="generic.h1" fontWeight={700}>
        {t('teams.heading')}
      </Text>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(27rem, 1fr))"
      >
        {teams.map((team, index) => (
          <Team key={index} team={team} index={index} />
        ))}
      </Box>
    </VStack>
  );
}
