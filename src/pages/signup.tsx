import { AppContainer } from '@src/common/components';
import { SignUpForm } from '@src/modules/auth';
import { VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const { t } = useTranslation('auth');
  const head = { title: t('signup.title') };
  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <SignUpForm onSubmit={() => {}} isInvalid={false} isLoading={false} />
      </VStack>
    </AppContainer>
  );
}
