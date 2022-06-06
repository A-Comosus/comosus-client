import React from 'react';
import { Text } from '@chakra-ui/react';

type FormSuccessMessageProps = {
  message?: string;
};
export default function FormSuccessMessage({
  message,
}: FormSuccessMessageProps) {
  return (
    <Text flex={1} alignSelf="flex-start" gap="5px">
      {message}
    </Text>
  );
}
