import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  TbLink,
  TbColorSwatch,
  TbSettings,
  TbCurrencyEthereum,
} from 'react-icons/tb';

import { AppRoute } from '@src/constants/PageRoutes';
import { Avatar, VStack } from '@chakra-ui/react';
import { Logo } from '@common/components';
import SidebarMenuItem from './Sidebar.MenuItem';
import SidebarLogout from './Sidebar.Logout';

import styles from './Sidebar.module.scss';

function Sidebar() {
  const { t } = useTranslation();
  const navItems = [
    {
      href: AppRoute.Admin,
      content: t('sidebar.link'),
      icon: <TbLink />,
    },
    {
      href: AppRoute.Appearance,
      content: t('sidebar.appearance'),
      icon: <TbColorSwatch />,
    },
    {
      href: AppRoute.NFT,
      content: t('sidebar.NFT'),
      icon: <TbCurrencyEthereum />,
    },
    {
      href: AppRoute.Settings,
      content: t('sidebar.settings'),
      icon: <TbSettings />,
    },
  ];

  return (
    <nav className={styles.sidebar}>
      <VStack flex={1} gap={10}>
        <Avatar size="xl" src="https://picsum.photos/200" />

        <ul className={styles.sidebar__menu}>
          {navItems.map(({ href, content, icon }, index) => (
            <SidebarMenuItem
              key={index}
              href={href}
              content={content}
              icon={icon}
            />
          ))}
          <SidebarLogout />
        </ul>
      </VStack>

      <Logo w="160px" />
    </nav>
  );
}

export default Sidebar;
