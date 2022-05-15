import React from 'react';

import { Link, Text } from '@src/common/components';
import { useLocalisation } from '@src/common/context';

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
