import React from 'react';
import styled from 'styled-components';

import { Text } from '@src/common/components';

const StyledDescription = styled.div`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export default function Description() {
  return (
    <StyledDescription>
      <Text type="p">
        Get started by editing <Text type="code">pages/index.tsx</Text>
      </Text>
    </StyledDescription>
  );
}
