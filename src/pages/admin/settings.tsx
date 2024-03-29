import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  AdminSectionContainer,
  AppContainer,
} from '@src/modules/admin/components';
import { Stack, VStack } from '@chakra-ui/react';
import { SettingMenuOption, DangerZone } from '@src/modules/admin/sections';

export default function Settings() {
  const { t } = useTranslation('admin');

  const head = {
    title: t('admin.title'),
  };

  const options = [
    {
      title: t('settings.danger-zone.title'),
      href: '#danger-zone',
      section: <DangerZone />,
    },
  ];

  return (
    <AppContainer head={head}>
      <Stack direction="row" spacing={['0', '5rem']}>
        <VStack display={['none', 'flex']}>
          {options.map(({ title, href }, index) => (
            <SettingMenuOption key={index} title={title} href={href} />
          ))}
        </VStack>

        <VStack alignSelf="stretch" flex={1} align="stretch" spacing="55px">
          {options.map(({ title, section }) => (
            <AdminSectionContainer key={title} heading={title}>
              {section}
            </AdminSectionContainer>
          ))}
        </VStack>
      </Stack>
    </AppContainer>
  );
}
