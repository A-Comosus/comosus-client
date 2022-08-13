import React, { useMemo } from 'react';
import { useWeb3 } from '@src/stores';

import { Button, Text } from '@src/common/components';
import {
  AdminSectionContainer,
  AdminSectionItemCard,
} from '@src/modules/admin/components';
import { useTranslation } from 'react-i18next';

export function Wallet() {
  const { t } = useTranslation('admin');
  const { error, walletAddress, connectWallet, mintNFT } = useWeb3();

  const truncatedWalletAddress = useMemo(
    () =>
      walletAddress
        ? String(walletAddress).substring(0, 6) +
          '...' +
          String(walletAddress).substring(38)
        : '???',
    [walletAddress],
  );

  return (
    <AdminSectionContainer heading={t('nft.wallet.heading')}>
      <AdminSectionItemCard>
        <Text as="h3" color="#F8F5F1" fontWeight={600} fontSize="1.6rem">
          {t('nft.wallet.message')}
        </Text>

        <Text as="p" color="#F8F5F1" fontSize="1.4rem">
          {`${t(
            'nft.wallet.address-label',
          )} ${truncatedWalletAddress.toUpperCase()}`}
        </Text>

        {walletAddress ? (
          <>
            <Button onClick={mintNFT}>{t('nft.wallet.action.mint')}</Button>
            {error.mintNFT && (
              <Text as="p" color="red" fontSize="1.4rem">
                {error.mintNFT}
              </Text>
            )}
          </>
        ) : (
          <>
            <Button onClick={connectWallet}>
              {t('nft.wallet.action.connect')}
            </Button>
            {error.connectWallet && (
              <Text as="p" color="red" fontSize="1.4rem">
                {error.connectWallet}
              </Text>
            )}
          </>
        )}
      </AdminSectionItemCard>
    </AdminSectionContainer>
  );
}
