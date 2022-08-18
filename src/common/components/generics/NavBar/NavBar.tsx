import React from 'react';
import { useRouter } from 'next/router';

import { Center, HStack } from '@chakra-ui/react';
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
    <Center as="header" zIndex={999} position="sticky" top={0} bg="#1B181E">
      <HStack
        as="nav"
        justify="space-between"
        spacing="0"
        padding="1.2rem"
        w="clamp(62.5%, 120rem, 90%)"
      >
        <Logo />

        <HStack as="ul" spacing="5rem" listStyleType="none">
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
    </Center>
  );
}
