import React from 'react';
import { useLocalisation } from '@common/contexts';

import { Link, Text } from '@common/components';

export default function Title() {
  const { t } = useLocalisation();

  return (
    <>
      <Text type="h1">
        <>
          {t('title')}
          <Link href="https://nextjs.org">
            <Text type="a">
              <>{t('appName')}</>
            </Text>
          </Link>
        </>
      </Text>
    </>
  );
}
