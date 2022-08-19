import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppContainer } from '@modules/admin/components';
import { Wallet, OwnedNFTs } from '@modules/nft';

export default function NFT() {
  const { t } = useTranslation('admin');
  const head = { title: t('admin.title') };

  return (
    <AppContainer head={head}>
      <Wallet />
      <OwnedNFTs />
    </AppContainer>
  );
}
