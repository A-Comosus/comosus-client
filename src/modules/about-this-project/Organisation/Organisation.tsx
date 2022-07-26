import { Avatar, HStack, VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';
import React from 'react';
import { useTranslation } from 'react-i18next';

type OrganisationProps = {
  org: Organisation;
};
export default function Organisation({
  org: { avatar_url },
}: OrganisationProps) {
  const { t } = useTranslation('project');

  return (
    <VStack align="stretch" gap="30px">
      <Text type="generic.h1" fontWeight={700}>
        {t('org.heading')}
      </Text>
      <VStack align="flex-start" borderRadius="16px" p="40px " bg="#ffffff">
        <HStack gap="40px">
          <VStack flex={1.5} align="flex-start">
            <Text type="generic.h2" whiteSpace="pre-line">
              {t('org.description')}
            </Text>
          </VStack>

          <VStack flex={1} borderRadius="16px" p="28px 40px" bg="#475972">
            <Text type="generic.h2" color="#ffffff">
              {t('org.hint')}
            </Text>
          </VStack>
        </HStack>

        <HStack gap="20px">
          <Avatar src={avatar_url} />
          <Text fontFamily="Nanum Brush Script" fontSize="30px">
            {t('org.slogan')}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
