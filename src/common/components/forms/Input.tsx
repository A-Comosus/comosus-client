/* eslint-disable react/no-children-prop */
import React from 'react';
import { Controller, Control } from 'react-hook-form';

import { MdError } from 'react-icons/md';
import {
  InputGroup,
  InputLeftElement,
  Input as CKInput,
  InputProps as CKInputProps,
  FormErrorMessage,
  VStack,
  FormControl,
} from '@chakra-ui/react';

type InputProps = {
  name: string;
  control: Control<any, any>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & CKInputProps;

export default function Input({
  name,
  control,
  leftElement,
  rightElement,
  ...props
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <FormControl id={name} isInvalid={invalid}>
          <VStack>
            <InputGroup>
              {leftElement && (
                <InputLeftElement
                  children={leftElement}
                  color={`${error ? 'red' : 'auto'}`}
                />
              )}
              <CKInput
                border="0px"
                borderRadius="0"
                borderBottom="1px solid #ADB2C6"
                _placeholder={{ color: '#ffffff50' }}
                _focus={{
                  borderBottom: '1px solid',
                  borderColor: '#819CFF',
                }}
                _invalid={{
                  borderBottom: '1px solid #FB446C',
                }}
                id={name}
                {...props}
                {...field}
              />
              {rightElement && <InputLeftElement children={rightElement} />}
            </InputGroup>
            {error && (
              <FormErrorMessage flex={1} alignSelf="flex-start" gap="5px">
                <MdError />
                {error.message}
              </FormErrorMessage>
            )}
          </VStack>
        </FormControl>
      )}
    />
  );
}
