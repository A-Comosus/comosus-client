import React from 'react';

import { HStack, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  Logo,
  Link,
  SelectLanguage,
  ToggleThemeButton,
} from '@common/components';

export type NavBarProps = {
  disableNavOptions?: boolean;
};
export default function NavBar({ disableNavOptions }: NavBarProps) {
  const { t } = useTranslation('navbar');

  const navItems = [
    {
      href: '/',
      content: t('menu.community'),
    },
    {
      href: '/',
      content: t('menu.team'),
    },
    {
      href: '/',
      content: t('menu.github'),
    },
  ];

  const authItems = [
    {
      href: '/login',
      content: t('auth.login'),
      color: '#fff',
      bgColor: '#757E95',
    },
    {
      href: '/sign-up',
      content: t('auth.sign-up'),
      color: '#55698C',
      bgColor: 'rgba(173, 178, 198, 0.2)',
    },
  ];

  return (
    <HStack
      justify="space-between"
      alignItems="center"
      width="100%"
      borderRadius="999"
      backgroundColor="#fff"
      padding="0.25rem 2rem"
    >
      <HStack gap={4}>
        <Link href="/">
          <Logo height="5rem" />
        </Link>

        {!disableNavOptions &&
          navItems.map(({ href, content }, index) => (
            <Link type="nav" key={index} href={href}>
              {content}
            </Link>
          ))}
      </HStack>

      <HStack gap="0.5rem">
        {authItems.map(({ href, content, color, bgColor }, index) => (
          <Link type="nav" key={index} href={href}>
            <Button color={color} backgroundColor={bgColor}>
              {content}
            </Button>
          </Link>
        ))}
        <SelectLanguage />
        <ToggleThemeButton />
      </HStack>
    </HStack>
  );
}
