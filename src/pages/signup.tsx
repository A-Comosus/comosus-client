import { AppContainer } from '@src/common/components';
import { SignUpForm } from '@src/modules/auth';
import { VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useRegisterMutation } from '@generated/graphql.queries';
import { useApiClient } from '@common/contexts';
import { isNil } from 'lodash';

export default function SignUp() {
  const { gqlClient } = useApiClient();
  const { t } = useTranslation('auth');
  const head = { title: t('signup.title') };
  const {
    mutate: register,
    error,
    isLoading: isRegistering,
  } = useRegisterMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        // @ts-ignore
        console.error(error.message);
      }
    },
  });

  const onSubmit = (value: SignUpFormTypes) => {
    console.log('onSubmit');
    register({ payload: value });
  };

  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <SignUpForm
          onSubmit={onSubmit}
          isInvalid={!isNil(error)}
          isLoading={isRegistering}
        />
      </VStack>
    </AppContainer>
  );
}
