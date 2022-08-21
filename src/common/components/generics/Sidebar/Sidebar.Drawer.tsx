import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import { Link, Avatar } from '@common/components';
import SidebarLogout from './Sidebar.Logout';
import { User } from '@generated/graphql.queries';

type SidebarDrawerProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  sidebarItems: SidebarItem[];
  user: User;
};
export function SidebarDrawer({
  isOpen,
  toggleOpen,
  sidebarItems,
  user,
}: SidebarDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={toggleOpen}>
      <DrawerOverlay />
      <DrawerContent bg="#272429">
        <DrawerCloseButton />

        <DrawerBody>
          <VStack alignSelf="stretch" spacing="2rem" p="2rem">
            <Avatar user={user} size="xl" />

            <VStack align="stretch" spacing="4rem" pl="2rem">
              {sidebarItems.map(({ href, content, icon }, index) => (
                <Link key={index} href={href} icon={icon}>
                  {content}
                </Link>
              ))}
              <SidebarLogout />
            </VStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
