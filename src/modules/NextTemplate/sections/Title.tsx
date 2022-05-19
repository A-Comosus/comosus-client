import React from 'react';
import { useTranslation } from 'next-i18next';

import { Link, Text } from '@common/components';

export default function Title() {
  const { t } = useTranslation('nextTemplate');

  return (
    <Text type="h1">
      {t('title')}
      <Link href="https://nextjs.org">
        <Text type="a">{t('appName')}</Text>
      </Link>
    </Text>
  );
}
