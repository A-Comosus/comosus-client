import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthRoute } from '@src/constants/PageRoutes';

import { VStack, FormControl } from '@chakra-ui/react';
import {
  Icon,
  Input,
  Button,
  Text,
  Link,
  FormErrorMessage,
} from '@common/components';
import { LoginError } from '@generated/graphql.queries';
import { isNil } from 'lodash';

type LoginFormProps = {
  onSubmit: (values: LoginFormTypes) => void;
  isLoading: boolean;
  error: LoginError | null;
};
export default function LoginForm({
  onSubmit,
  isLoading,
  error,
}: LoginFormProps) {
  const { t } = useTranslation('auth');

  // @TODO: need to create a type for this
  const formValues = {
    inputs: [
      {
        type: 'text',
        name: 'username',
        placeholder: t('login.username.placeholder'),
        leftElement: <Icon variant="account" />,
      },
      {
        type: 'password',
        name: 'password',
        placeholder: t('login.password.placeholder'),
        leftElement: <Icon variant="password" />,
      },
    ],
    defaultValues: {
      username: '',
      password: '',
    },
    schema: yup
      .object({
        username: yup
          .string()
          .required(t('login.username.error.required'))
          .min(6, t('login.username.error.min-length')),
        password: yup.string().required(t('login.password.error.required')),
      })
      .required(),
  };

  const { handleSubmit, control } = useForm<LoginFormTypes>({
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
        <FormControl isInvalid={!isNil(error)}>
          <VStack align="stretch" gap="3rem">
            {formValues.inputs.map(
              ({ type, name, placeholder, leftElement }, index) => (
                <Input
                  key={index}
                  type={type}
                  name={name}
                  control={control}
                  placeholder={placeholder}
                  leftElement={leftElement}
                />
              ),
            )}
            <FormErrorMessage
              testId="login.error"
              error={t(`login.error.${error?.key}`)}
            />
            <Button
              type="submit"
              isLoading={isLoading}
              variant="accent"
              size="lg"
            >
              {t('login.button')}
            </Button>
            <Link href={AuthRoute.forgetPassword} variant="accent">
              {t('login.forget-password')}
            </Link>
          </VStack>
        </FormControl>
      </form>
      <Text textAlign="center">
        {t('login.no-account.description')}
        <Link href={AuthRoute.SignUp} variant="highlight">
          {t('login.no-account.action')}
        </Link>
      </Text>
    </VStack>
  );
}
