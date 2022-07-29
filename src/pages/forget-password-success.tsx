import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '@src/common/components';
import { ForgetPasswordSuccess } from '@src/modules/auth';

export default function NotifyForgetPasswordSuccess() {
  const { t } = useTranslation('auth');
  const head = { title: t('forget-password-success.title') };

  return (
    <PageContainer head={head}>
      <ForgetPasswordSuccess />
    </PageContainer>
  );
}
