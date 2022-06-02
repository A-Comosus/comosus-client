import React from 'react';

import { Button, ButtonProps, Text } from '@chakra-ui/react';

type CustomButtonProps = {
  children: React.ReactNode;
} & ButtonProps;

export default function CustomButtonGray({
  children,
  ...props
}: CustomButtonProps) {
  return (
    <Button borderRadius="15px" py="20px" bg="#55698C" {...props}>
      <Text color="#fff">{children}</Text>
    </Button>
  );
}
