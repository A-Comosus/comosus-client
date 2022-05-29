import { AppContainer } from '@src/common/components';
import SignupForm from '@src/modules/auth/SignupForm';

export default function SignUp() {
  const head = { title: 'signup' };
  return (
    <AppContainer head={head}>
      <SignupForm />
    </AppContainer>
  );
}
