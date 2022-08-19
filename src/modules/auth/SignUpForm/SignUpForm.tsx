import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthRoute } from '@src/constants/PageRoutes';

import { FormControl, VStack, Text } from '@chakra-ui/react';
import {
  Icon,
  Input,
  Checkbox,
  Button,
  FormErrorMessage,
  Link,
} from '@src/common/components';

type SignUpFormProps = {
  onSubmit: (values: SignUpFormTypes) => void;
  isInvalid: boolean;
  isLoading: boolean;
};

export default function SignUpForm({
  onSubmit,
  isInvalid,
  isLoading,
}: SignUpFormProps) {
  const { t } = useTranslation('auth');

  const formValues = {
    inputs: [
      {
        type: 'text',
        name: 'username',
        placeholder: t('sign-up.username.placeholder'),
        leftElement: <Icon variant="account" />,
      },
      {
        type: 'email',
        name: 'email',
        placeholder: t('sign-up.email.placeholder'),
        leftElement: <Icon variant="email" />,
      },
      {
        type: 'password',
        name: 'password',
        placeholder: t('sign-up.password.placeholder'),
        leftElement: <Icon variant="password" />,
      },
    ],
    defaultValues: {
      username: '',
      email: '',
      password: '',
      acceptPolicy: 0,
    },
    schema: yup
      .object({
        username: yup
          .string()
          .required(t('sign-up.username.error.required'))
          .min(6, t('sign-up.username.error.min-length'))
          .lowercase('username must be lowercase'),
        email: yup.string().email().required(t('sign-up.email.error.required')),
        password: yup.string().required(t('sign-up.password.error.required')),
        acceptPolicy: yup.boolean().isTrue(t('sign-up.policy.error.required')),
      })
      .required(),
  };

  const { handleSubmit, control } = useForm({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
    reValidateMode: 'onBlur',
  });

  return (
    <VStack
      align="stretch"
      gap="6rem"
      w="clamp(62.5%, 48rem, 100%)"
      maxW="48rem"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <VStack align="stretch" gap="3rem">
            {formValues.inputs.map(
              ({ type, name, placeholder, leftElement }, index) => {
                return (
                  <Input
                    key={index}
                    type={type}
                    name={name}
                    control={control}
                    placeholder={placeholder}
                    leftElement={leftElement}
                  />
                );
              },
            )}

            <Checkbox
              name="acceptPolicy"
              control={control}
              content={t('sign-up.policy.description')}
            />
            <FormErrorMessage
              testId="sign-up.error"
              error={t('sign-up.error.user-exist')}
            />
            <Button
              type="submit"
              isLoading={isLoading}
              variant="accent"
              size="lg"
            >
              {t('sign-up.button')}
            </Button>
          </VStack>
        </FormControl>
      </form>
      <Text textAlign="center">
        {t('sign-up.have-account.description')}
        <Link href={AuthRoute.Login} variant="highlight">
          {t('sign-up.have-account.action')}
        </Link>
      </Text>
    </VStack>
  );
}
