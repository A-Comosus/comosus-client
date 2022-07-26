import React from 'react';

import { LinkBox, LinkOverlay, VStack } from '@chakra-ui/react';
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
    <LinkBox as={motion.div} whileHover={{ y: '-5px', x: '-2px' }}>
      <VStack
        align="stretch"
        gap="16px"
        borderRadius="15px"
        p="20px 32px"
        boxShadow="4px 4px 2px rgba(0, 0, 0, 0.05)"
        w="372px"
        bg="#ffffff"
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
  );
}
