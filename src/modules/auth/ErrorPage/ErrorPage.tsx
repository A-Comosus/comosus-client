import React from 'react';
import { useTranslation } from 'react-i18next';
import { VStack, Text, Link } from '@chakra-ui/react';

export default function ErrorPage() {
  const { t } = useTranslation('auth');

  return (
    <VStack height="1342px" align="center">
      <VStack
        background="rgba(173, 178, 198, 0.2)"
        borderRadius="10px"
        padding="36px 0"
        minW="799px"
        minH="316.02px"
        top="150px"
      >
        <VStack
          fontSize="30px"
          fontWeight="400"
          align="center"
          paddingBottom="22px"
          width="359px"
        >
          <Text>{t('error-page.page.title')}</Text>
          <Text>{t('error-page.page.subtitle')}</Text>
        </VStack>

        <Text
          fontSize="15px"
          fontWeight="400"
          align="center"
          paddingBottom="78px"
          letterSpacing="-0.015em"
          width="477px"
        >
          {t('error-page.page.description')}
        </Text>
        <Link fontSize="17px" fontWeight="700" textDecoration="underline">
          {t('error-page.page.help')}
        </Link>
      </VStack>
      <Text
        fontSize="15px"
        fontWeight="400"
        align="center"
        letterSpacing="-0.015em"
        width="683px"
        height="137px"
        paddingTop="67.98px"
      >
        {t('error-page.page.solution')}
      </Text>
    </VStack>
  );
}
