import SignupForm from '@src/modules/auth/SignupForm';
import NavLogo from '@src/modules/next-template/components/NavLogo';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 785px;
  margin: 0px auto;
`;

export default function SignUp() {
  return (
    <>
      <NavLogo />
      <MainContainer>
        <SignupForm />
      </MainContainer>
    </>
  );
}
