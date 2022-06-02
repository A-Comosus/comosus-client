import React from 'react';

import { Button, ButtonProps, Text } from '@chakra-ui/react';

type CustomButtonProps = {
  children: React.ReactNode;
  gray?: boolean;
} & ButtonProps;

export default function CustomButton({
  children,
  gray,
  ...props
}: CustomButtonProps) {
  const variants = {
    default: (
      <Button
        borderRadius="15px"
        py="20px"
        bg="linear-gradient(180deg, #FF3F66 0%, #E75784 100%)"
        boxShadow="0px 10px 10px rgba(251, 68, 109, 0.2)"
        {...props}
      >
        <Text color="#fff">{children}</Text>
      </Button>
    ),
    gray: (
      <Button borderRadius="15px" py="20px" bg="#55698C" {...props}>
        <Text color="#fff">{children}</Text>
      </Button>
    ),
  };
  return gray ? variants.gray : variants.default;
}
