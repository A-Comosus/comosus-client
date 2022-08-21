import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@src/stores';

import { maskElement } from './Sidebar';
import { Box, HStack, useBreakpointValue, useToast } from '@chakra-ui/react';
import { Icon, Text } from '@src/common/components';

export default function SidebarLogout() {
  const { logout } = useAuth();
  const { t } = useTranslation();
  // @Note: I don't like this, but this works for now
  const _hover = useBreakpointValue([{}, maskElement]);
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
      onClick={handleClick}
      as="button"
      position="relative"
      pl={['', '2rem']}
      fontSize="1.6rem"
      _hover={_hover}
    >
      <HStack p={['', '1rem 2rem']}>
        <Icon variant="logout" />
        <Text>{t('sidebar.logout')}</Text>
      </HStack>
    </Box>
  );
}
