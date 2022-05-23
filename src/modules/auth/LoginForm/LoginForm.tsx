import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { VStack, FormControl } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Logo, Input, Button, Text, Link } from '@common/components';

type LoginFormTypes = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (values: LoginFormTypes) => void;
};
export default function LoginForm({ onSubmit }: LoginFormProps) {
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

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<LoginFormTypes>({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
    reValidateMode: 'onBlur',
  });

  return (
    <VStack minW="480px" align="stretch" gap="60px">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={false}>
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
            <Button type="submit" isLoading={isSubmitting}>
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
        <Link href="/">{t('login.no-account.action')}</Link>
      </Text>
    </VStack>
  );
}
