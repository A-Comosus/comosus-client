import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@src/stores';

import { HStack, useToast } from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';
import { Text } from '@src/common/components';

import styles from './Sidebar.module.scss';

export default function SidebarLogout() {
  const { logout } = useAuth();
  const { t } = useTranslation();
  const toast = useToast();

  const handleClick = () => {
    logout();
    toast({
      status: 'success',
      title: t('auth:logout.message'),
      variant: 'subtle',
    });
  };

  return (
    <li className={styles.sidebar__menu__item}>
      <button onClick={handleClick}>
        <HStack p={'10px 20px'}>
          <MdLogout />
          <Text>{t('sidebar.logout')}</Text>
        </HStack>
      </button>
    </li>
  );
}
