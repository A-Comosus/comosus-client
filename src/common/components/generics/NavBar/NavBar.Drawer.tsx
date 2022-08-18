import React from 'react';
import { useRouter } from 'next/router';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import { Link, Button, SelectLanguage } from '@common/components';

type NavDrawerProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  navItems: NavItem[];
  disableNavOptions?: boolean;
};
export function NavDrawer({
  isOpen,
  toggleOpen,
  navItems,
  disableNavOptions,
}: NavDrawerProps) {
  const { push } = useRouter();

  return (
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
              navItems.map(({ type, href, content }) =>
                type === 'link' ? (
                  <Link key={href} href={href}>
                    {content}
                  </Link>
                ) : (
                  <Button
                    key={href}
                    onClick={() => push(href)}
                    variant="gradient"
                    size="lg"
                  >
                    {content}
                  </Button>
                ),
              )}

            <SelectLanguage />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
