import React from 'react';
import styled from 'styled-components';
import Input from '../next-template/components/Input';
import Button from '../next-template/components/Button';

function LoginForm() {
  return (
    <MainContainer>
      <LoginContainer>
        <Title>Log in to your A-Comosus account</Title>
        <InputContent>
          <Form>
            <InputContainer>
              <Input type="text" placeholder="username" />
              <Input type="password" placeholder="Password" />
              <ButtonContainer>
                <Button content="Log in" />
              </ButtonContainer>
            </InputContainer>
          </Form>
        </InputContent>
        <ForgetPassword>Forgot Password?</ForgetPassword>
        <CreateAccount>
          <DontHaveAccount>
            Don't have an account? <CreateOne>Create One</CreateOne>
          </DontHaveAccount>
        </CreateAccount>
      </LoginContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const LoginContainer = styled.div`
  max-width: 640px;
  margin: 0px auto;
  border-radius: 16px;
  border: 1px solid #fff;
  padding: 48px 80px;
`;

const Form = styled.form``;

const CreateAccount = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  line-height: 1.25;
  letter-spacing: calc(-0.64px);
  font-weight: 200;
`;

const InputContainer = styled.div`
  display: grid;
  gap: 12px;
`;

const InputContent = styled.div`
  padding: 0 30px 48px 30px;
`;

const ButtonContainer = styled.div`
  width: 100%
  display: flex;
  align-items:center;
  justify-content:center;
`;

const ForgetPassword = styled.div`
  margin-top: -0.8rem;
  cursor: pointer;
  font-weight: lighter;
  color: white;
  text-align: center;
`;

const DontHaveAccount = styled.div`
  margin-top: 2rem;
  cursor: pointer;
  font-weight: lighter;
  color: white;
  width: 100%;
  text-align: center;
`;

const CreateOne = styled.div`
  font-weight: 20;
  text-decoration: underline;
  margin-left: 0.3rem;
  color: white;
`;

export default LoginForm;
