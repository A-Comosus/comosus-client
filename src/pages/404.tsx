import React from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@chakra-ui/react';
import { PageContainer, Error404 } from '@src/common/components';

export default function CustomErrorPage() {
  const { t } = useTranslation('auth');
  const head = { title: t('error-page.title') };

  return (
    <PageContainer head={head}>
      <VStack flex={1} padding="1rem">
        <Error404 />
      </VStack>
    </PageContainer>
  );
}
