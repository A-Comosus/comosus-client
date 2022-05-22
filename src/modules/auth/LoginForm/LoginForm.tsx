import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { VStack, FormControl, Button } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Input, Text, Link, Logo } from '@common/components';

type LoginFormProps = {
  formValues: FormValue;
};
export default function LoginForm({ formValues }: LoginFormProps) {
  const { t } = useTranslation('auth');
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
    reValidateMode: 'onBlur',
  });

  const onSubmit = () => {
    console.log('submitting form');
  };

  return (
    <VStack minW="480px" align="stretch" gap="60px">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={false}>
          <VStack align="stretch" gap="30px">
            <Input
              name="username"
              control={control}
              placeholder={t('login.username.placeholder')}
              leftElement={<AiOutlineUser />}
            />
            <Input
              type="password"
              name="password"
              control={control}
              placeholder={t('login.password.placeholder')}
              leftElement={<RiLockPasswordLine />}
            />
            <Button type="submit" isLoading={isSubmitting}>
              {t('login.button')}
            </Button>
            <Link textAlign="center">{t('login.forget-password')}</Link>
          </VStack>
        </FormControl>
      </form>
      <Text textAlign="center">
        {t('login.no-account.description')}
        <Link>{t('login.no-account.action')}</Link>
      </Text>
    </VStack>
  );
}
