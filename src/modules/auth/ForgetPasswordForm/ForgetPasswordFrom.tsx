import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { AuthRoute } from '@src/constants/PageRoutes';
import { VStack, FormControl, Heading, Text } from '@chakra-ui/react';
import { Button, FormErrorMessage, Input } from '@common/components';

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

  const router = useRouter();
  const forgetPasswordSuccess = () =>
    router.push(AuthRoute.forgetPasswordSuccess);

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
    <VStack flex={1} minW="480px" justify="center" align="stretch">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <Heading as="h1" size="lg" fontWeight="500" mb={1}>
            {t('forget-password.page.title')}
          </Heading>
          <Text mb={10}>{t('forget-password.page.subtitle')}</Text>
          <Text fontWeight="600" mb={2}>
            {t('forget-password.email.label')}
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
              testId="forget-password.error"
              error={t('forget-password.error')}
            />
            <Button
              type="submit"
              onClick={forgetPasswordSuccess}
              isLoading={isLoading}
            >
              {t('forget-password.button')}
            </Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}
