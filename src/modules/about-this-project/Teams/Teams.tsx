import React from 'react';

import { VStack, Wrap } from '@chakra-ui/react';
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

      <Wrap
        justify="center"
        spacing="0"
        borderRadius="15px"
        p="45px"
        bg="#ffffff"
        boxShadow="2px 2px 2px #00000010"
      >
        {teams.map((team, index) => (
          <Team key={index} team={team} index={index} />
        ))}
      </Wrap>
    </VStack>
  );
}
