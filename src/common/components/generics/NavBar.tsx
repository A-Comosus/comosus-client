import React from 'react';

import { HStack, Link, Button } from '@chakra-ui/react';
import { SelectLanguage, ToggleThemeButton } from '@common/components';

export default function NavBar() {
  return (
    <HStack justify="space-between" borderBottom="1px solid #eaeaea" p="1rem">
      <HStack>
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/space-x">
          <Button>SpaceX</Button>
        </Link>
        <Link href="/disabled">
          <Button isDisabled>Disabled</Button>
        </Link>
      </HStack>

      <HStack gap="2rem">
        <SelectLanguage />
        <ToggleThemeButton />
      </HStack>
    </HStack>
  );
}
