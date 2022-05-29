import { AppContainer } from '@src/common/components';
import { SignUpForm } from '@src/modules/auth';
import { VStack } from '@chakra-ui/react';

export default function SignUp() {
  const head = { title: 'signup' };
  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <SignUpForm />
      </VStack>
    </AppContainer>
  );
}
