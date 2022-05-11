import { Link, Text } from '@src/common/components';
import React from 'react';
import styled from 'styled-components';

import { Card } from '../components';

const StyledGrid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;
type GridProps = {
  cards: Card[];
};

export default function Grid({ cards }: GridProps) {
  return (
    <StyledGrid>
      {cards &&
        cards.map(({ href, title, description }, index) => (
          <Card
            key={index}
            href={href}
            title={title}
            description={description}
          />
        ))}
    </StyledGrid>
  );
}
