import SignupForm from '@src/modules/auth/SignupForm';
import Navlogo from '@src/modules/next-template/components/Navlogo';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 785px;
  margin: 0px auto;
`;

export default function SignUp() {
  return (
    <>
      <Navlogo />
      <MainContainer>
        <SignupForm />
      </MainContainer>
    </>
  );
}
