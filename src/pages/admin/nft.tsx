import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { Wallet, OwnedNFTs } from '@modules/nft';
import { VStack } from '@chakra-ui/react';

export default function NFT() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <VStack
        flex={2}
        align="stretch"
        gap="1.6rem"
        borderRight="1px solid #E7E8EE"
        p="8rem 5.5rem"
        overflowY="scroll"
      >
        <Wallet />
        <OwnedNFTs />
      </VStack>
    </AppContainer>
  );
}
