import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoute, GlobalRoute } from '@src/constants/PageRoutes';
import { VStack } from '@chakra-ui/react';
import { Icon, Logo, Avatar } from '@common/components';
import SidebarMenuItem from './Sidebar.MenuItem';
import SidebarLogout from './Sidebar.Logout';

import { useUser } from '@src/common/contexts';
import { useRouter } from 'next/router';

export const maskElement = {
  bg: '#1b181e',
  borderRadius: '2rem 0 0 2rem',
  _before: {
    position: 'absolute',
    content: '""',
    w: '3rem',
    h: '4rem',
    right: 0,
    bottom: '100%',
    borderRadius: '0 0 2rem',
    boxShadow: '0rem 2rem  #1b181e',
  },
  _after: {
    position: 'absolute',
    content: '""',
    w: '3rem',
    h: '4rem',
    right: 0,
    top: '100%',
    borderRadius: '0 2rem 0 0',
    boxShadow: '0 -2rem #1b181e',
  },
};

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
    <VStack
      justifyContent="space-between"
      spacing="4rem"
      m="1rem"
      borderRadius="1rem"
      maxW="21rem"
      p="4rem 0 6rem"
      bg="linear-gradient(179deg, #465d78, #4a4050)"
      color="#F8F5F1"
      fontSize="1.6rem"
    >
      <VStack alignSelf="stretch" spacing="2rem">
        <Avatar user={user} size="xl" />

        <VStack
          alignSelf="stretch"
          alignItems="stretch"
          spacing="4rem"
          pl="2rem"
        >
          {navItems.map(({ href, content, icon }, index) => (
            <SidebarMenuItem
              key={index}
              href={href}
              content={content}
              icon={icon}
            />
          ))}
          <SidebarLogout />
        </VStack>
      </VStack>

      <Logo />
    </VStack>
  );
}
