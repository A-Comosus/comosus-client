import React from 'react';

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
  const navItems = [
    {
      href: '/',
      content: 'Comunity',
    },
    {
      href: '/',
      content: 'Our Team',
    },
    {
      href: '/',
      content: 'Our Github',
    },
  ];

  const authItems = [
    {
      href: '/login',
      content: 'Login',
      color: '#fff',
      bgColor: '#757E95',
    },
    {
      href: '/sign-up',
      content: 'Sign up',
      color: '#55698C',
      bgColor: 'rgba(173, 178, 198, 0.2)',
    },
  ];

  return (
    <HStack justify="space-between" p="1rem" width="80%" borderRadius="999">
      <HStack gap={4}>
        <Logo height="5rem" />

        {!disableNavOptions &&
          navItems.map(({ href, content }, index) => (
            <Link type="nav" key={index} href={href}>
              {content}
            </Link>
          ))}
      </HStack>

      <HStack gap="1rem">
        {authItems.map(({ href, content, color, bgColor }, index) => (
          <Link type="nav" key={index} href={href}>
            <Button color={color} backgroundColor={bgColor}>
              {content}
            </Button>
          </Link>
        ))}
        <SelectLanguage />
        <ToggleThemeButton />
      </HStack>
    </HStack>
  );
}
