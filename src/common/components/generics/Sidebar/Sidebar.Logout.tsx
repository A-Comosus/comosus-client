import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@src/stores';

import { maskElement } from './Sidebar';
import { Box, HStack, useToast } from '@chakra-ui/react';
import { Icon, Text } from '@src/common/components';

export default function SidebarLogout() {
  const { logout } = useAuth();
  const { t } = useTranslation();
  const toast = useToast();

  const handleClick = () => {
    logout();
    toast({
      status: 'success',
      title: t('auth:logout.message'),
      variant: 'subtle',
    });
  };

  return (
    <Box
      as="button"
      position="relative"
      pl="2rem"
      onClick={handleClick}
      _hover={maskElement}
    >
      <HStack p="1rem 2rem">
        <Icon variant="logout" />
        <Text>{t('sidebar.logout')}</Text>
      </HStack>
    </Box>
  );
}
