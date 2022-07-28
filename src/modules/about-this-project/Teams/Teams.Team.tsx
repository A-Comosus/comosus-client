import React from 'react';

import { WrapItem } from '@chakra-ui/react';

import { Text } from '@src/common/components';
import FlipCard from './Teams.FlipCard';
import MemberDetail from './Teams.MemberDetail';

type TeamProps = {
  team: Team;
  index: number;
};
export default function Team({ team, index }: TeamProps) {
  const colors = [
    '#29A1BE',
    '#6C44B1',
    '#21AF5A',
    '#CD4783',
    '#CE6C1F',
    '#CA3433',
  ];

  return (
    <>
      <WrapItem>
        <FlipCard title={team.name} bgColor={colors[index]}>
          <Text textAlign="center" fontSize={16} fontWeight={700}>
            {team.description ||
              'Well.... There supposed to be descriptions here... 😥'}
          </Text>
        </FlipCard>
      </WrapItem>
      {team.members.map((member, _index) => (
        <WrapItem key={_index}>
          <FlipCard
            title={member.name ?? member.login}
            bgColor={`${colors[index]}B3`}
            bgImage={member.avatar_url}
          >
            <MemberDetail member={member} color={colors[index]} />
          </FlipCard>
        </WrapItem>
      ))}
    </>
  );
}
