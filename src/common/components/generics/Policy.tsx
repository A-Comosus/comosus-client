import { FormControl, Checkbox, HStack, Text } from '@chakra-ui/react';
import { FormErrorMessage } from '@src/common/components';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function Policy({ name, control }) {
  const { t } = useTranslation('auth');
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <FormControl id={name} isInvalid={invalid}>
          <HStack alignItems="flex-start">
            <Checkbox mt="4px" {...field} />
            <Text>{t('signup.policy.description')}</Text>
          </HStack>
          {error && <FormErrorMessage error={error.message} />}
        </FormControl>
      )}
    />
  );
}
