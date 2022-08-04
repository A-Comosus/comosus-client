import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { VStack, FormControl } from '@chakra-ui/react';
import { Button, FormErrorMessage, Input, Text } from '@common/components';

type ResetPasswordFormProps = {
  onSubmit: (values: ResetPasswordFormTypes) => void;
  isLoading: boolean;
  isInvalid: boolean;
};
export default function ResetPasswordForm({
  onSubmit,
  isLoading,
  isInvalid,
}: ResetPasswordFormProps) {
  const { t } = useTranslation('auth');

  const formValues = {
    inputs: [
      {
        type: 'password',
        name: 'password',
        placeholder: t('reset-password.form.password.placeholder'),
      },
      {
        type: 'password',
        name: 'confirmPassword',
        placeholder: t('reset-password.form.confirm-password.placeholder'),
      },
    ],
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    schema: yup.object({
      password: yup
        .string()
        .required(t('reset-password.form.password.error.required')),
      confirmPassword: yup
        .string()
        .required(t('reset-password.form.confirm-password.error.required'))
        .oneOf(
          [yup.ref('password'), null],
          t('reset-password.form.confirm-password.error.match'),
        ),
    }),
  };

  const { handleSubmit, control } = useForm<ResetPasswordFormTypes>({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
    reValidateMode: 'onBlur',
  });

  return (
    <VStack flex={1} minW="480px" justify="center" align="stretch">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <Text type="h2" mb={1}>
            {t('reset-password.page.title')}
          </Text>
          <Text type="p" mb={10}>
            {t('reset-password.page.subtitle')}
          </Text>
          <VStack align="stretch" gap="30px">
            {formValues.inputs.map(({ type, name, placeholder }, index) => (
              <Input
                key={index}
                type={type}
                name={name}
                control={control}
                placeholder={placeholder}
              />
            ))}
            <FormErrorMessage
              testId="reset-password.error"
              error={t('reset-password.error')}
            />
            <Button type="submit" isLoading={isLoading}>
              {t('reset-password.button')}
            </Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}
