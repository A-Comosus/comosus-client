import React from 'react';
import { useTranslation } from 'react-i18next';

import { VStack, Text } from '@chakra-ui/react';
import { Button } from '@common/components';

export default function ForgetPasswordSuccess() {
  const { t } = useTranslation('auth');

  return (
    <VStack minW="567px" justify="center" align="stretch">
      <Text fontSize="30px" fontWeight="400">
        Success🎉
      </Text>
      <Text fontSize="15px" fontWeight="400">
        We have sent an email to your emailbox, please check and reset your
        password!
      </Text>
      <Button type="button">Homepage</Button>
    </VStack>
  );
}
