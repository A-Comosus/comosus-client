import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { ProfileEditor } from '@modules/admin/sections';

export default function Appearance() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <ProfileEditor />
    </AppContainer>
  );
}
