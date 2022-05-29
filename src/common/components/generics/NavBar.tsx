import React from 'react';
import { useTranslation } from 'react-i18next';

import { HStack, Button } from '@chakra-ui/react';
import { Link, SelectLanguage, ToggleThemeButton } from '@common/components';

export default function NavBar() {
  const { t } = useTranslation();

  const navItems = [
    {
      href: '/',
      content: t('nav.home'),
    },
    {
      href: '/login',
      content: t('auth:login.title'),
    },
    {
      href: '/signup',
      content: 'signup',
    },
    {
      href: '/',
      content: t('button.disabled'),
      isDisabled: true,
    },
  ];

  return (
    <HStack justify="space-between" borderBottom="1px solid #eaeaea" p="1rem">
      <HStack>
        {navItems.map(({ href, content, isDisabled }, index) => (
          <Link key={index} href={href}>
            <Button isDisabled={isDisabled}>{content}</Button>
          </Link>
        ))}
      </HStack>

      <HStack gap="2rem">
        <SelectLanguage />
        <ToggleThemeButton />
      </HStack>
    </HStack>
  );
}
