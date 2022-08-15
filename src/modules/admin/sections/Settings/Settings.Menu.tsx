import React from 'react';

import { Box, HStack, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Text } from '@src/common/components';

type MenuProps = {
  title: string;
  href: string;
};
export function SettingMenuOption({ title, href }: MenuProps) {
  return (
    <LinkBox>
      <HStack>
        <Box w="20px" h="20px" bg="#757E95" borderRadius="6px" />
        <LinkOverlay href={href}>
          <Text type="admin.normal">{title}</Text>
        </LinkOverlay>
      </HStack>
    </LinkBox>
  );
}
