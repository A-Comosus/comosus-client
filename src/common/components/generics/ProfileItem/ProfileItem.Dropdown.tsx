import React from 'react';
import { motion } from 'framer-motion';

import { Box } from '@chakra-ui/react';
import { Icon } from '@src/common/components';

type DropdownProps = {
  toggle: () => void;
  isDropped: boolean;
  children: React.ReactNode;
};
export default function Dropdown({
  toggle,
  isDropped,
  children,
}: DropdownProps) {
  return (
    <Box
      as="button"
      position="relative"
      onClick={() => toggle()}
      boxSizing="border-box"
      borderRadius={isDropped ? '10px 10px 0 0' : '10px'}
      p="10px 40px"
      bg="#F8F5F1"
      color="#3B3C46"
      _hover={{
        boxShadow: 'inset 0 0 0 2px white',
        bg: 'transparent',
        color: '#F8F5F1',
      }}
    >
      {children}
      <Box
        position="absolute"
        top="50%"
        right="2%"
        transform="translate(0, -50%)"
      >
        <Box as={motion.div} animate={{ rotate: isDropped ? 180 : 0 }}>
          <Icon variant="arrow-down" />
        </Box>
      </Box>
    </Box>
  );
}
