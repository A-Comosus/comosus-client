import React from 'react';
import styled from 'styled-components';

import { Text } from '@src/common/components';
import { useLocalisation } from '@src/common/context';

const StyledDescription = styled.div`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export default function Description() {
  const { t } = useLocalisation();

  return (
    <StyledDescription>
      <Text type="p">
        <>
          {t('getStarted')}
          <Text type="code">src/pages/index.tsx</Text>
        </>
      </Text>
    </StyledDescription>
  );
}
