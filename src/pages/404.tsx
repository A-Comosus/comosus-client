import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, Error404 } from '@src/common/components';

export default function CustomErrorPage() {
  const { t } = useTranslation('auth');
  const head = { title: t('error-page.title') };

  return (
    <PageContainer head={head}>
      <Error404 />
    </PageContainer>
  );
}
