import React from 'react';
import { isNil } from 'lodash';
import { useController } from 'react-hook-form';

import {
  FormControl,
  Checkbox as CKCheckbox,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FormErrorMessage } from '@src/common/components';

type PolicyProps = {
  name: string;
  control: any;
  content: string;
};

export function Checkbox({ name, control, content }: PolicyProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <FormControl id={name} isInvalid={!isNil(error)}>
      <HStack alignItems="flex-start" color="#F8F5F1">
        <CKCheckbox value={value} onChange={onChange} size="lg" mt=".4rem" />
        <Text fontSize="1.6rem" lineHeight="2rem">
          {content}
        </Text>
      </HStack>
      {error && (
        <FormErrorMessage testId={`error-${name}`} error={error.message} />
      )}
    </FormControl>
  );
}
