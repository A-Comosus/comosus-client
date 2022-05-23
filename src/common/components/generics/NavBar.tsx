import React from 'react';

import { HStack, Link, Button } from '@chakra-ui/react';
import { SelectLanguage, ToggleThemeButton } from '@common/components';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <HStack justify="space-between" borderBottom="1px solid #eaeaea" p="1rem">
      <HStack>
        <Link href="/">
          <Button>{t('nav.home')}</Button>
        </Link>
        <Link href="/space-x">
          <Button>{t('nav.space-x')}</Button>
        </Link>
        <Link href="/disabled">
          <Button isDisabled>{t('button.disabled')}</Button>
        </Link>
      </HStack>

      <HStack gap="2rem">
        <SelectLanguage />
        <ToggleThemeButton />
      </HStack>
    </HStack>
  );
}
