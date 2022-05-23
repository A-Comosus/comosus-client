import React from 'react';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { VStack, FormControl } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import {
  Logo,
  Input,
  Button,
  Text,
  Link,
  FormErrorMessage,
} from '@common/components';

type LoginFormProps = {
  onSubmit: (values: LoginFormTypes) => void;
  isLoading: boolean;
  isInvalid: boolean;
};
export default function LoginForm({
  onSubmit,
  isLoading,
  isInvalid,
}: LoginFormProps) {
  const { t } = useTranslation('auth');

  // @TODO: need to create a type for this
  const formValues = {
    inputs: [
      {
        type: 'text',
        name: 'username',
        placeholder: t('login.username.placeholder'),
        leftElement: <AiOutlineUser />,
      },
      {
        type: 'password',
        name: 'password',
        placeholder: t('login.password.placeholder'),
        leftElement: <RiLockPasswordLine />,
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
    <VStack minW="480px" align="stretch" gap="60px">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <VStack align="stretch" gap="30px">
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
            <FormErrorMessage error={t('login.error')} />
            <Button type="submit" isLoading={isLoading}>
              {t('login.button')}
            </Button>
            <Link href="/" textAlign="center">
              {t('login.forget-password')}
            </Link>
          </VStack>
        </FormControl>
      </form>
      <Text textAlign="center">
        {t('login.no-account.description')}
        <Link highlight href="/">
          {t('login.no-account.action')}
        </Link>
      </Text>
    </VStack>
  );
}
