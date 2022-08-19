import React from 'react';

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
      <FlipCard title={team.name} bgColor={colors[index]}>
        <Text textAlign="center" fontSize={16} fontWeight={700}>
          {team.description ||
            'Well.... There supposed to be descriptions here... 😥'}
        </Text>
      </FlipCard>
      {team.members.map((member) => (
        <FlipCard
          key={member.login}
          title={member.name ?? member.login}
          bgColor={`${colors[index]}B3`}
          bgImage={member.avatar_url}
        >
          <MemberDetail member={member} color={colors[index]} />
        </FlipCard>
      ))}
    </>
  );
}
