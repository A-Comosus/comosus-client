import { Avatar, Stack, VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';
import React from 'react';
import { useTranslation } from 'react-i18next';

type OrganisationProps = {
  org: Organisation;
};
export function Organisation({ org: { avatar_url } }: OrganisationProps) {
  const { t } = useTranslation('project');

  return (
    <VStack align="stretch" spacing="3rem">
      <Text type="generic.h1" fontWeight={700}>
        {t('org.heading')}
      </Text>
      <VStack
        align="flex-start"
        spacing="3rem"
        borderRadius="1rem"
        p={['2rem', '4rem']}
        bg="#272429"
      >
        <Stack direction={['column', 'row']} gap="4rem">
          <VStack flex={1.5} align="flex-start">
            <Text type="generic.h2" whiteSpace="pre-line">
              {t('org.description')}
            </Text>
          </VStack>

          <VStack
            flex={1}
            borderRadius="1rem"
            p={['1.4rem 2rem', '2.8rem 4rem']}
            bg="#475972"
          >
            <Text type="generic.h2" color="#F8F5F1">
              {t('org.hint')}
            </Text>
          </VStack>
        </Stack>

        <Stack direction={['column', 'row']} alignItems="center" gap="20px">
          <Avatar src={avatar_url} size="xl" />
          <Text fontFamily="Nanum Brush Script" fontSize="30px">
            {t('org.slogan')}
          </Text>
        </Stack>
      </VStack>
    </VStack>
  );
}
