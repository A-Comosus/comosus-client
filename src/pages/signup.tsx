import { AppContainer } from '@src/common/components';
import SignupForm from '@src/modules/auth/SignupForm';
import { VStack } from '@chakra-ui/react';

export default function SignUp() {
  const head = { title: 'signup' };
  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <SignupForm />
      </VStack>
    </AppContainer>
  );
}
