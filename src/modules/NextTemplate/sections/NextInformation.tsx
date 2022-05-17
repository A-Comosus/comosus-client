import React from 'react';
import styled from 'styled-components';

import { Card } from '../components';

const Grid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;
type NextInformationProps = {
  cards: Card[];
};

export default function NextInformation({ cards }: NextInformationProps) {
  return (
    <Grid>
      {cards &&
        cards.map(({ href, title, description }, index) => (
          <Card
            key={index}
            href={href}
            title={title}
            description={description}
          />
        ))}
    </Grid>
  );
}
