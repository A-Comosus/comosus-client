/* eslint-disable react/no-children-prop */
import React from 'react';
import { Controller, Control, ControllerRenderProps } from 'react-hook-form';

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
  isUnderline?: boolean;
} & InputProps;

export default function CustomInput({
  name,
  control,
  leftElement,
  rightElement,
  isUnderline,
  ...props
}: CustomInputProps) {
  const variants = (
    name: string,
    field: ControllerRenderProps<any, string>,
    props: any,
  ) => ({
    isUnderline: (
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
    ),
    default: <Input id={name} {...props} {...field} borderRadius="15px" />,
  });
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
              {isUnderline
                ? variants(name, field, props).isUnderline
                : variants(name, field, props).default}
              {rightElement && <InputLeftElement children={rightElement} />}
            </InputGroup>
            {error && <FormErrorMessage error={error.message} />}
          </VStack>
        </FormControl>
      )}
    />
  );
}
