import React from 'react';
import { useRouter } from 'next/router';

import { HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Logo, Link, Button, SelectLanguage } from '@common/components';
import { GlobalRoute, AuthRoute, AppRoute } from '@src/constants/PageRoutes';
export type NavBarProps = {
  disableNavOptions?: boolean;
};
export function NavBar({ disableNavOptions }: NavBarProps) {
  const { t } = useTranslation('common');
  const { push } = useRouter();

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
      <Logo />

      <HStack spacing="5rem">
        {!disableNavOptions &&
          navItems.map(({ href, content }) => (
            <Link key={href} href={href}>
              {content}
            </Link>
          ))}
        <Link href={AuthRoute.Login}>{t('nav.login')}</Link>
        <Button
          onClick={() => push(AuthRoute.SignUp)}
          variant="gradient"
          size="lg"
        >
          {t('nav.sign-up')}
        </Button>
        <SelectLanguage />
      </HStack>
    </HStack>
  );
}
