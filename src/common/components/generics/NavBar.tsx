import React from 'react';

import { HStack, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Logo, Link, SelectLanguage } from '@common/components';
import { GlobalRoute, AuthRoute, AppRoute } from '@src/constants/PageRoutes';
export type NavBarProps = {
  disableNavOptions?: boolean;
};
export default function NavBar({ disableNavOptions }: NavBarProps) {
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
      borderRadius="999"
      w="100%"
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
        <Link type="nav" href={AuthRoute.Login}>
          <Button>{t('nav.login')}</Button>
        </Link>
        <Link type="nav" href={AuthRoute.SignUp}>
          <Button color="#fff" backgroundColor="#FB446C">
            {t('nav.sign-up')}
          </Button>
        </Link>
        <SelectLanguage />
      </HStack>
    </HStack>
  );
}
