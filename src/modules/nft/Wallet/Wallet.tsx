import React, { useMemo } from 'react';
import { useWeb3 } from '@src/stores';

import { Button, Text } from '@src/common/components';
import {
  AdminSectionContainer,
  AdminSectionItemCard,
} from '@src/modules/admin/components';

export function Wallet() {
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
    <AdminSectionContainer heading="Wallet">
      <AdminSectionItemCard>
        <Text as="h3" color="#F8F5F1" fontWeight={600} fontSize="1.6rem">
          Connect Your Crypto Wallet
        </Text>

        <Text as="p" color="#F8F5F1" fontSize="1.4rem">
          {`Wallet Address: ${truncatedWalletAddress.toUpperCase()}`}
        </Text>

        {walletAddress ? (
          <>
            <Button id="mintButton" onClick={mintNFT}>
              Mint NFT
            </Button>
            {error.mintNFT && (
              <Text as="p" color="red" fontSize="1.4rem">
                {error.mintNFT}
              </Text>
            )}
          </>
        ) : (
          <>
            <Button id="walletButton" onClick={connectWallet}>
              Connect
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
