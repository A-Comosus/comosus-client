import React from 'react';
import { useRouter } from 'next/router';

import { Center, HStack, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@src/utils/hooks';
import { GlobalRoute, AuthRoute, AppRoute } from '@src/constants/PageRoutes';

import { Logo, Link, Button, Icon, SelectLanguage } from '@common/components';
import { NavDrawer } from './NavBar.Drawer';

export type NavBarProps = {
  disableNavOptions?: boolean;
};
export function NavBar({ disableNavOptions }: NavBarProps) {
  const { t } = useTranslation('common');
  const { push } = useRouter();
  const [isOpen, toggleOpen] = useToggle();

  const navItems: NavItem[] = [
    {
      type: 'link',
      href: GlobalRoute.Project,
      content: t('nav.project'),
    },
    {
      type: 'link',
      href: AppRoute.Contact,
      content: t('nav.contact'),
    },
    {
      type: 'link',
      href: AuthRoute.Login,
      content: t('nav.login'),
    },
    {
      type: 'button',
      href: AuthRoute.SignUp,
      content: t('nav.sign-up'),
    },
  ];

  return (
    <>
      <Center as="header" zIndex={999} position="sticky" top={0} bg="#1B181E">
        <HStack
          as="nav"
          justify="space-between"
          spacing="0"
          padding="1.2rem"
          w="clamp(62.5%, 120rem, 90%)"
          maxW="120rem"
        >
          <Logo />

          <HStack
            display={{
              base: 'none',
              sm: 'flex',
            }}
            as="ul"
            spacing="5rem"
            listStyleType="none"
          >
            {!disableNavOptions &&
              navItems.map(({ type, href, content }) =>
                type === 'link' ? (
                  <Link key={href} href={href}>
                    {content}
                  </Link>
                ) : (
                  <Button
                    onClick={() => push(href)}
                    variant="gradient"
                    size="lg"
                  >
                    {content}
                  </Button>
                ),
              )}
            <SelectLanguage />
          </HStack>

          <IconButton
            display={{
              base: 'relative',
              sm: 'none',
            }}
            onClick={toggleOpen}
            icon={<Icon variant="menu" />}
            bg="none"
            aria-label="nav-menu"
            color="#F8F5F1"
            fontSize="1.6rem"
          />
        </HStack>
      </Center>
      <NavDrawer
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        navItems={navItems}
        disableNavOptions={disableNavOptions}
      />
    </>
  );
}
