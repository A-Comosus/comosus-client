import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Text } from '@common/components';

const StyledDescription = styled.div`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  /* here is an example of how to use colors defined in the themes */
  background-color: ${({ theme }) => theme.primary};
`;

export default function Description() {
  const { t } = useTranslation('nextTemplate');

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
