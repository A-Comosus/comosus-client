/* eslint-disable react/no-children-prop */
import React from 'react';
import { Controller, Control } from 'react-hook-form';

import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
  VStack,
  FormControl,
} from '@chakra-ui/react';
import { FormErrorMessage } from '@common/components';

type CustomInputProps = {
  name: string;
  control: Control<any, any>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
} & InputProps;

export default function CustomInput({
  name,
  control,
  leftElement,
  rightElement,
  ...props
}: CustomInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <FormControl id={name} isInvalid={invalid}>
          <VStack gap="30px">
            <InputGroup>
              {leftElement && (
                <InputLeftElement
                  children={leftElement}
                  color={`${error ? 'red' : 'auto'}`}
                />
              )}
              <Input
                border="0px"
                borderRadius="0"
                borderBottom="1px solid #ADB2C6"
                _focus={{}}
                _invalid={{
                  borderBottom: '1px solid #FB446C',
                }}
                id={name}
                {...props}
                {...field}
              />
              {rightElement && <InputLeftElement children={rightElement} />}
            </InputGroup>
            {error && <FormErrorMessage error={error.message} />}
          </VStack>
        </FormControl>
      )}
    />
  );
}
