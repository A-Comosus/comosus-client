import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { VStack, FormControl, Heading, Text } from '@chakra-ui/react';
import {
  Button,
  FormErrorMessage,
  FormSuccessAction,
  FormSuccessMessage,
  Input,
} from '@common/components';

type ResetPasswordFormProps = {
  onSubmit: (values: ResetPasswordFormTypes) => void;
  isLoading: boolean;
  isInvalid: boolean;
  successMessage: string;
  successAction: string;
  successActionLink: string;
};
export default function ResetPasswordForm({
  onSubmit,
  isLoading,
  isInvalid,
  successMessage,
  successAction,
  successActionLink,
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
          <Heading as="h1" size="lg" fontWeight="500" mb={1}>
            {t('reset-password.page.title')}
          </Heading>
          <Text mb={10}>{t('reset-password.page.subtitle')}</Text>
          {/* <Text fontWeight="600" mb={2}>
            {t('reset-password.form.password.label')}
          </Text> */}
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
            <FormErrorMessage error={t('reset-password.error')} />
            <VStack>
              <FormSuccessMessage message={successMessage} />
              <FormSuccessAction
                action={successAction}
                actionLink={successActionLink}
              />
            </VStack>
            <Button type="submit" isLoading={isLoading}>
              {t('reset-password.button')}
            </Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}
