import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text, Link } from '@common/components';

export default function Title() {
  const { t } = useTranslation('nextTemplate');

  return (
    <Text type="h1">
      {t('title')}
      <Link href="https://nextjs.org">{t('appName')}</Link>
    </Text>
  );
}
