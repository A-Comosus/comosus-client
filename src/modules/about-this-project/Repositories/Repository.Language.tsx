import React from 'react';

import { Box, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Text } from '@src/common/components';

type LanguageProps = {
  languages: RepositoryLanguage[];
};
export default function Language({ languages }: LanguageProps) {
  return (
    <VStack justify="flex-start" align="stretch">
      <HStack
        overflow="hidden"
        align="stretch"
        gap="2px"
        borderRadius={999}
        h="10px"
      >
        {languages &&
          languages.map(({ weight, defaultColor }, index) => (
            <Box key={index} m="0 !important" flex={weight} bg={defaultColor} />
          ))}
      </HStack>
      <Wrap>
        {languages &&
          languages.map(({ language, weight, defaultColor }, index) => (
            <WrapItem key={index}>
              <HStack>
                <svg
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  fill={defaultColor}
                >
                  <circle cx="50%" cy="50%" r="50%" />
                </svg>
                <Text>{`${language} ${weight.toLocaleString(undefined, {
                  style: 'percent',
                  minimumFractionDigits: 1,
                })}`}</Text>
              </HStack>
            </WrapItem>
          ))}
      </Wrap>
    </VStack>
  );
}
