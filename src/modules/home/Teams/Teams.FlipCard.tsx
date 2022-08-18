import React from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '@src/utils/hooks';

import { AspectRatio, Box, Center } from '@chakra-ui/react';
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
    <AspectRatio ratio={1}>
      <Box
        overflow="hidden"
        position="relative"
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
          onTap={() => toggleHovered()}
          position="absolute"
          w="100%"
          h="100%"
        >
          <Box w="100%" h="100%" bg={bgColor} textTransform="uppercase">
            <Center w="100%" h="100%">
              <Text fontSize="2.4rem" fontWeight={700} letterSpacing="0.3rem">
                {title}
              </Text>
            </Center>
          </Box>

          <Center w="100%" h="100%" bg={bgColor} p="2rem">
            {children}
          </Center>
        </Box>
      </Box>
    </AspectRatio>
  );
}
