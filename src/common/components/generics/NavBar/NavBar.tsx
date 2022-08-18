import React from 'react';
import { useRouter } from 'next/router';

import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@src/utils/hooks';
import { GlobalRoute, AuthRoute, AppRoute } from '@src/constants/PageRoutes';

import { Logo, Link, Button, Icon, SelectLanguage } from '@common/components';

export type NavBarProps = {
  disableNavOptions?: boolean;
};
export function NavBar({ disableNavOptions }: NavBarProps) {
  const { t } = useTranslation('common');
  const { push } = useRouter();
  const [isOpen, toggleOpen] = useToggle();

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

      <Drawer isOpen={isOpen} placement="right" onClose={toggleOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#272429">
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              as="ul"
              alignItems="flex-start"
              spacing="2rem"
              py="2rem"
              listStyleType="none"
            >
              {!disableNavOptions &&
                navItems.map(({ href, content }) => (
                  <Link key={href} href={href}>
                    {content}
                  </Link>
                ))}

              <Button
                onClick={() => push(AuthRoute.SignUp)}
                variant="gradient"
                size="lg"
              >
                {t('nav.sign-up')}
              </Button>

              <SelectLanguage />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
