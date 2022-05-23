import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { HStack, Button } from '@chakra-ui/react';
import { Link, SelectLanguage, ToggleThemeButton } from '@common/components';

export default function NavBar() {
  const { query, asPath } = useRouter();
  const { t } = useTranslation();

  const navItems = [
    {
      href: '/',
      content: t('nav.home'),
    },
    {
      href: '/space-x',
      content: t('nav.space-x'),
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
