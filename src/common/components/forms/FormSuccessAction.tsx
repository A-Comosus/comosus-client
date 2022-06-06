import React from 'react';
import { Link } from '@chakra-ui/react';

type FormSuccessActionProps = {
  action?: string;
  actionLink?: string;
};
export default function FormSuccessAction({
  action,
  actionLink,
}: FormSuccessActionProps) {
  return (
    <Link
      href={actionLink}
      flex={1}
      alignSelf="flex-start"
      gap="5px"
      fontWeight={700}
      color="#FB446C"
    >
      {action} now !
    </Link>
  );
}
