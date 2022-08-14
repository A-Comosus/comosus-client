/* eslint-disable react/no-children-prop */
import React from 'react';
import { useController } from 'react-hook-form';

import {
  InputGroup,
  InputLeftElement,
  Input as CKInput,
  VStack,
  FormControl,
  Text,
} from '@chakra-ui/react';
import { FormErrorMessage } from '@common/components';
import { isNil } from 'lodash';

export type InputVariants = 'underline' | 'outline';
type InputProps = {
  type?: string;
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  variant?: InputVariants;
};

export default function Input({
  name,
  control,
  label,
  placeholder = 'Placeholder',
  leftElement,
  rightElement,
  variant = 'underline',
  ...props
}: InputProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const propsVariant = {
    underline: {
      label: { p: '0.4rem', color: '#ADB2C6', fontSize: '1.2rem' },
      input: {
        border: '0',
        borderRadius: '0',
        borderBottom: '0.1rem solid #ADB2C6',
        p: leftElement ? 'auto' : '0.4rem',
        pt: '0',
        _placeholder: {
          color: '#4F4F58',
          fontSize: '1.6rem',
        },
        _focus: {},
        _invalid: {
          borderBottom: '0.1rem solid #FB446C',
        },
      },
    },
    outline: {
      label: {
        pb: '2rem',
        color: '#F8F5F1',
        fontSize: '1.6rem',
        fontWeight: 700,
      },
      input: {
        borderRadius: '1rem',
        p: '2rem 1.6rem',
        _placeholder: {
          color: '#4F4F58',
          fontSize: '1.6rem',
        },
      },
    },
  };

  return (
    <FormControl id={name} isInvalid={!isNil(error)}>
      <VStack alignItems="flex-start" spacing="0">
        {label && <Text {...propsVariant[variant].label}>{label}</Text>}
        <InputGroup>
          {leftElement && (
            <InputLeftElement
              children={leftElement}
              color={`${error ? '#FB446C' : '#ADB2C6'}`}
              fontSize="1.6rem"
            />
          )}
          <CKInput
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            color="#F8F5F1"
            fontSize="1.6rem"
            {...propsVariant[variant].input}
            {...props}
          />
          {rightElement && <InputLeftElement children={rightElement} />}
        </InputGroup>
        {error && (
          <FormErrorMessage testId={`error-${name}`} error={error.message} />
        )}
      </VStack>
    </FormControl>
  );
}
