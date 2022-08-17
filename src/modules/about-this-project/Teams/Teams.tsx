import React from 'react';

import { Box, VStack, Wrap } from '@chakra-ui/react';
import { Text } from '@src/common/components';
import Team from './Teams.Team';
import { useTranslation } from 'react-i18next';

type TeamsProps = {
  teams: Team[];
};
export default function Teams({ teams }: TeamsProps) {
  const { t } = useTranslation('project');

  return (
    <VStack align="stretch" gap="30px">
      <Text type="generic.h1" fontWeight={700}>
        {t('teams.heading')}
      </Text>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(27rem, 1fr))"
        borderRadius="1rem"
        p="4.5rem"
        bg="#272429"
      >
        {teams.map((team, index) => (
          <Team key={index} team={team} index={index} />
        ))}
      </Box>
    </VStack>
  );
}
