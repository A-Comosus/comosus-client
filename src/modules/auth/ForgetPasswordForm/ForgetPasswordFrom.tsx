import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { VStack, FormControl } from '@chakra-ui/react';
import { Text, Button, FormErrorMessage, Input } from '@common/components';

type ForgetPasswordFormProps = {
  onSubmit: (values: ForgetPasswordFormTypes) => void;
  isLoading: boolean;
  isInvalid: boolean;
};
export default function ForgetPasswordForm({
  onSubmit,
  isLoading,
  isInvalid,
}: ForgetPasswordFormProps) {
  const { t } = useTranslation('auth');

  const formValues = {
    inputs: [
      {
        type: 'email',
        name: 'email',
        placeholder: t('forget-password.email.placeholder'),
      },
    ],
    defaultValues: {
      email: '',
    },
    schema: yup.object({
      email: yup
        .string()
        .email(t('forget-password.email.error.invalid-email'))
        .required(t('forget-password.email.error.required')),
    }),
  };

  const { handleSubmit, control } = useForm<ForgetPasswordFormTypes>({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
    reValidateMode: 'onBlur',
  });

  return (
    <VStack flex={1} justify="center" align="stretch" gap="40px" minW="480px">
      <VStack align="flex-start">
        <Text type="generic.h1" mb={1}>
          {t('forget-password.page.title')}
        </Text>
        <Text type="generic.h2" mb={10}>
          {t('forget-password.page.subtitle')}
        </Text>
      </VStack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <VStack align="stretch" gap="30px">
            {formValues.inputs.map(({ type, name, placeholder }, index) => (
              <Input
                key={index}
                type={type}
                name={name}
                control={control}
                label={t('forget-password.email.label')}
                placeholder={placeholder}
              />
            ))}
            <FormErrorMessage
              testId="forget-password.error"
              error={t('forget-password.error')}
            />
            <Button type="submit" isLoading={isLoading} size="lg">
              {t('forget-password.button')}
            </Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}
