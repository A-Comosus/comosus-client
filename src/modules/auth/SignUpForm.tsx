import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRegisterMutation } from '@generated/graphql.queries';
import { FormErrorMessage, Logo, Input, Button } from '@src/common/components';
import { FormControl, VStack } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Please enter a username'),
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().min(4).max(15).required('Please enter a password'),
});

type SignUpFormProps = {
  onSubmit: () => void;
  isInvalid: boolean;
  isLoading: boolean;
};

export default function SignUpForm({
  onSubmit,
  isInvalid,
  isLoading,
}: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const formValues = {
    inputs: [
      {
        type: 'text',
        name: 'username',
        placeholder: 'Username',
        leftElement: <AiOutlineUser />,
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        leftElement: <AiOutlineMail />,
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        leftElement: <RiLockPasswordLine />,
      },
    ],
  };
  return (
    <VStack minW="480px" align="stretch" gap="60px">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
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
            <FormErrorMessage error={'Error'} />
            <Button type="submit" isLoading={isLoading}>
              Sign Up
            </Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}
