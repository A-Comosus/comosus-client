import { FormControl, Checkbox, HStack, Text } from '@chakra-ui/react';
import { FormErrorMessage } from '@src/common/components';
import { Control, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type PolicyProps = {
  name: keyof SignUpFormTypes;
  control: Control<SignUpFormTypes, any>;
};

export default function Policy({ name, control }: PolicyProps) {
  const { t } = useTranslation('auth');
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <FormControl id={name} isInvalid={invalid}>
          <HStack alignItems="flex-start">
            <Checkbox mt="4px" {...field} />
            <Text>{t('sign-up.policy.description')}</Text>
          </HStack>
          {error && <FormErrorMessage error={error.message} />}
        </FormControl>
      )}
    />
  );
}
