import React from 'react';

import { Button, ButtonProps, Text } from '@chakra-ui/react';

export type variantTypes = 'primary' | 'secondary' | 'accent';

type CustomButtonProps = {
  children: React.ReactNode;
  variantType?: variantTypes;
  color?: string;
} & ButtonProps;

export default function CustomButton({
  children,
  variantType = 'primary',
  color = '#fff',
  ...props
}: CustomButtonProps) {
  const variants = {
    accent: (
      <Button
        borderRadius="15px"
        py="20px"
        bg="linear-gradient(180deg, #FF3F66 0%, #E75784 100%)"
        boxShadow="0px 10px 10px rgba(251, 68, 109, 0.2)"
        {...props}
      >
        <Text color={color}>{children}</Text>
      </Button>
    ),
    secondary: (
      <Button py="20px" borderRadius="10px" size="sm" bg="#DADEE0" {...props}>
        <Text color={color}>{children}</Text>
      </Button>
    ),
    primary: (
      <Button borderRadius="15px" py="20px" bg="#55698C" {...props}>
        <Text color={color}>{children}</Text>
      </Button>
    ),
  };
  return variants[variantType];
}
