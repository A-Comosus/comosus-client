import React from 'react';

import { HStack, VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';

type SettingsSectionProps = {
  children: React.ReactNode;
  title: string;
};
export function SettingsSection({ children, title }: SettingsSectionProps) {
  return (
    <VStack align="stretch" spacing="15px">
      <Text id="danger-zone" type="admin.h2">
        {title}
      </Text>
      <HStack borderRadius="16px" p="25px 35px" bg="#FFFFFF">
        {children}
      </HStack>
    </VStack>
  );
}
