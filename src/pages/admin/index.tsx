import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { LinkEditor } from '@modules/admin/sections';

export default function Admin() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <LinkEditor />
    </AppContainer>
  );
}
