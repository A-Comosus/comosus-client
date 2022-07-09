import React from 'react';

import { VStack } from '@chakra-ui/react';
import ReCAPTCHA from 'react-google-recaptcha';

type ReCaptchaProps = {
  onChange: () => void;
};
export default function ReCaptcha({ onChange }: ReCaptchaProps) {
  return (
    <VStack>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
        onChange={onChange}
      />
    </VStack>
  );
}
