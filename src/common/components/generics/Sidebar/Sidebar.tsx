import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoute, GlobalRoute } from '@src/constants/PageRoutes';
import { VStack } from '@chakra-ui/react';
import { Icon, Logo, Avatar } from '@common/components';
import SidebarMenuItem from './Sidebar.MenuItem';
import SidebarLogout from './Sidebar.Logout';

import styles from './Sidebar.module.scss';
import { useUser } from '@src/common/contexts';
import { useRouter } from 'next/router';

export function Sidebar() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const { user } = useUser();

  const navItems = [
    {
      href: AppRoute.Admin,
      content: t('sidebar.link'),
      icon: <Icon variant="link" />,
    },
    {
      href: AppRoute.Appearance,
      content: t('sidebar.appearance'),
      icon: <Icon variant="color-swatch" />,
    },
    {
      href: AppRoute.NFT,
      content: t('sidebar.nft'),
      icon: <Icon variant="eth" />,
    },
    {
      href: AppRoute.Settings,
      content: t('sidebar.settings'),
      icon: <Icon variant="settings" />,
    },
  ];

  if (!user) push(GlobalRoute.Error);

  return (
    <nav className={styles.sidebar}>
      <VStack flex={1} gap={10}>
        <Avatar user={user} />

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
