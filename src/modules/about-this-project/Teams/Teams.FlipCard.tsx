import React from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '@src/utils/hooks';

import { Box, Center } from '@chakra-ui/react';
import { Text } from '@src/common/components';

type FlipCardProps = {
  children: React.ReactNode;
  title: string;
  bgColor: string;
  bgImage?: string;
};
export default function FlipCard({
  children,
  title,
  bgColor,
  bgImage,
}: FlipCardProps) {
  const [isHovered, toggleHovered] = useToggle();

  const variants = {
    hidden: {
      y: 0,
      transition: { duration: 0.2 },
    },
    shown: {
      y: '-100%',
      transition: { duration: 0.2 },
    },
  };

  return (
    <Box
      overflow="hidden"
      position="relative"
      w="350px"
      h="350px"
      bg={bgColor}
      bgImage={bgImage}
      bgSize="cover"
      bgRepeat="no-repeat"
      color="white"
      textAlign="center"
    >
      <Box
        as={motion.div}
        variants={variants}
        animate={isHovered ? 'shown' : 'hidden'}
        onHoverStart={() => toggleHovered()}
        onHoverEnd={() => toggleHovered()}
        position="absolute"
        w="100%"
        h="100%"
      >
        <Box w="100%" h="100%" bg={bgColor} textTransform="uppercase">
          <Center w="100%" h="100%">
            <Text fontSize={30} fontWeight={700} letterSpacing="3px">
              {title}
            </Text>
          </Center>
        </Box>

        <Center w="100%" h="100%" bg={bgColor} p="20px">
          {children}
        </Center>
      </Box>
    </Box>
  );
}
