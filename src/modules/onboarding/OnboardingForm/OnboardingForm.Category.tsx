import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFindAllCategoryQuery } from '@generated/graphql.queries';

import { Text } from '@src/common/components';
import { Box, Skeleton, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { useApiClient } from '@src/common/contexts';

type CategoryProps = {
  value: string;
  onChange: (value: string) => void;
};
export default function Category({ value, onChange }: CategoryProps) {
  const { t } = useTranslation('onboarding');

  const { gqlClient } = useApiClient();
  const { data: categories } = useFindAllCategoryQuery(
    gqlClient,
    {},
    {
      select: (data) => data.categories,
    },
  );

  return (
    <VStack align="stretch" gap="2rem">
      <Text type="label">{t('category.label')}</Text>

      <Wrap>
        {categories ? (
          categories.map(({ type, id }, index) => (
            <WrapItem key={index}>
              <Box
                p="1rem 2rem"
                borderRadius="2rem"
                bg={id === value ? '#FB446C' : '#ADB2C620'}
                color="#F8F5F1"
                onClick={() => onChange(id)}
                _hover={{
                  boxShadow: '0 0 0 .2rem #FB446C inset',
                  cursor: 'pointer',
                }}
              >
                <Text fontSize={['1.2rem', '1.6rem']}>
                  {t(`category.option.${type}`)}
                </Text>
              </Box>
            </WrapItem>
          ))
        ) : (
          <Skeleton />
        )}
      </Wrap>
    </VStack>
  );
}
