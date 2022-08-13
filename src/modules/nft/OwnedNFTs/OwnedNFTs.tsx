import React, { useMemo } from 'react';

import {
  AdminSectionContainer,
  AdminSectionItemCard,
} from '@src/modules/admin/components';
import { NFTCard } from './OwnedNFTs.NFTCard';

import { Text } from '@src/common/components';
import { isNil } from 'lodash';
import { useGetNFTsQuery } from '@src/services';
import SkeletonCard from './OwnedNFTs.SkeletonCard';
import { useTranslation } from 'react-i18next';

export function OwnedNFTs() {
  const { t } = useTranslation('admin');
  const { nfts, error, isLoading } = useGetNFTsQuery();

  const content = useMemo(() => {
    if (isLoading) {
      return <SkeletonCard />;
    } else if (isNil(nfts)) {
      return (
        <AdminSectionItemCard border="2px solid #A2FF2A">
          <Text as="p" color="#F8F5F1" fontSize="1.6rem">
            {t('nft.owned-nfts.message')}
          </Text>
        </AdminSectionItemCard>
      );
    } else if (error) {
      return (
        <AdminSectionItemCard border="2px solid #A2FF2A">
          <Text as="p" color="red" fontSize="1.6rem">
            {(error as Error).message}
          </Text>
        </AdminSectionItemCard>
      );
    } else {
      return nfts.map((nft, index) => (
        <NFTCard key={`${index}${nft.id.tokenId}`} nft={nft} />
      ));
    }
  }, [nfts, isLoading, error]);

  return (
    <AdminSectionContainer
      heading={t('nft.owned-nfts.heading', {
        value: nfts ? `(${nfts.length})` : '',
      })}
    >
      {content}
    </AdminSectionContainer>
  );
}
