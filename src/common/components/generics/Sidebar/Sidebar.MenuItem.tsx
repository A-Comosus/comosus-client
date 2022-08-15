import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { maskElement } from './Sidebar';
import { HStack, Text, Link, Box } from '@chakra-ui/react';

interface MenuInfo {
  href: string;
  content: string;
  icon: React.ReactNode;
}
export default function SidebarMenuItem({ href, content, icon }: MenuInfo) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        _focus={{ outline: '2px double #1b181e' }}
        {...(isActive ? maskElement : {})}
        borderRadius="2rem 0 0 2rem"
      >
        <Box _hover={maskElement} p="1rem 2rem">
          <HStack pl="2rem">
            {icon}
            <Text>{content}</Text>
          </HStack>
        </Box>
      </Link>
    </NextLink>
  );
}
