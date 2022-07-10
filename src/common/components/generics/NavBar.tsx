import React from 'react';
import { useTranslation } from 'react-i18next';

import { HStack, Button } from '@chakra-ui/react';
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
      href: '/sign-up',
      content: t('auth:sign-up.title'),
    },
    {
      href: '/',
      content: t('button.disabled'),
      isDisabled: true,
    },
  ];

  return (
    <HStack justify="space-between" p="1rem">
      <HStack gap={4}>
        <Logo height="5rem" />

        {!disableNavOptions &&
          navItems.map(({ href, content, isDisabled }, index) => (
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
