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
    <VStack align="stretch" gap="20px">
      <Text type="label">{t('category.label')}</Text>

      <Wrap>
        {categories ? (
          categories.map(({ type, id }, index) => (
            <WrapItem key={index}>
              <Box
                p="10px 20px"
                borderRadius="20px"
                bg={id === value ? '#FB446C' : '#ADB2C620'}
                color={id === value ? '#FFFFFF' : '#000000'}
                onClick={() => onChange(id)}
                _hover={{
                  outline: '2px solid #FB446C',
                  cursor: 'pointer',
                }}
              >
                <label>{t(`category.option.${type}`)}</label>
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
