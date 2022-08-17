import React from 'react';

import { AspectRatio, LinkBox, LinkOverlay, VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';
import Language from './Repository.Language';
import { motion } from 'framer-motion';

type RepositoryProps = {
  repo: Repository;
};
export default function Repository({
  repo: { name, description, html_url, languages },
}: RepositoryProps) {
  return (
    <AspectRatio ratio={372 / 164}>
      <LinkBox as={motion.div} whileHover={{ y: '-5px', x: '-2px' }}>
        <VStack
          w="100%"
          h="100%"
          justifyContent="space-between"
          align="stretch"
          spacing="2rem"
          borderRadius="1rem"
          p="2rem 3.2rem"
          boxShadow="4px 4px 2px rgba(0, 0, 0, 0.05)"
          bg="#272429"
        >
          <VStack align="stretch">
            <LinkOverlay href={html_url}>
              <Text color="#3396F1" fontWeight={700}>
                {name}
              </Text>
            </LinkOverlay>
            <Text>{description}</Text>
          </VStack>

          <Language languages={languages} />
        </VStack>
      </LinkBox>
    </AspectRatio>
  );
}
