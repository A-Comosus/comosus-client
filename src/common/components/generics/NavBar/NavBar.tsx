import React from 'react';

import NextLink from 'next/link';
import { HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Logo, Link, Button, SelectLanguage } from '@common/components';
import { GlobalRoute, AuthRoute, AppRoute } from '@src/constants/PageRoutes';
export type NavBarProps = {
  disableNavOptions?: boolean;
};
export function NavBar({ disableNavOptions }: NavBarProps) {
  const { t } = useTranslation('common');

  const navItems = [
    {
      href: GlobalRoute.Root,
      content: t('nav.community'),
    },
    {
      href: GlobalRoute.Project,
      content: t('nav.project'),
    },
    {
      href: AppRoute.Contact,
      content: t('nav.contact'),
    },
  ];

  return (
    <HStack
      justify="space-between"
      alignItems="center"
      spacing="0"
      padding="1.2rem"
      w="100%"
    >
      <NextLink href="/">
        <Logo height="8rem" />
      </NextLink>

      <HStack spacing="5rem">
        {!disableNavOptions &&
          navItems.map(({ href, content }) => (
            <Link key={href} href={href}>
              {content}
            </Link>
          ))}
        <Link href={AuthRoute.Login}>{t('nav.login')}</Link>
        <NextLink href={AuthRoute.SignUp}>
          <Button variant="gradient" size="lg">
            {t('nav.sign-up')}
          </Button>
        </NextLink>
        <SelectLanguage />
      </HStack>
    </HStack>
  );
}
