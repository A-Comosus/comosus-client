import React from 'react';

import { Link, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Logo, Button, SelectLanguage } from '@common/components';
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
      <Link href="/">
        <Logo height="8rem" />
      </Link>

      <HStack spacing="5rem">
        {!disableNavOptions &&
          navItems.map(({ href, content }) => (
            <Link
              key={href}
              href={href}
              color="#F8F5F1"
              fontSize="1.6rem"
              fontWeight={600}
              whiteSpace="nowrap"
            >
              {content}
            </Link>
          ))}
        <Link
          href={AuthRoute.Login}
          color="#F8F5F1"
          fontSize="1.6rem"
          fontWeight={600}
          whiteSpace="nowrap"
        >
          {t('nav.login')}
        </Link>
        <Link type="nav" href={AuthRoute.SignUp}>
          <Button variant="gradient" size="lg">
            {t('nav.sign-up')}
          </Button>
        </Link>
        <SelectLanguage />
      </HStack>
    </HStack>
  );
}
