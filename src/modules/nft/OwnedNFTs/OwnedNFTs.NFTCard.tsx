import React from 'react';

import { AdminSectionItemCard } from '@src/modules/admin/components';
import { HStack, Image, VStack } from '@chakra-ui/react';
import { Button, Text } from '@src/common/components';
import { useUpdateAvatarApi } from '@src/services';

type NFTCardProps = {
  nft: NFT;
};
export function NFTCard({ nft }: NFTCardProps) {
  const { updateAvatar, isUpdating } = useUpdateAvatarApi();

  if (!nft.metadata.image) return <></>;

  const redirectToOpensea = () =>
    window.open(
      `${process.env.NEXT_PUBLIC_OPENSEA_URL}/${nft.contract.address}/${nft.metadata.edition}`,
      '_ blank',
    );

  const imageSrc = `https://gateway.pinata.cloud/ipfs/${nft.metadata.image.replace(
    'ipfs://',
    '',
  )}`;

  return (
    <AdminSectionItemCard>
      <HStack alignSelf="stretch" alignItems="flex-start" spacing="2rem">
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          src={imageSrc}
          alt="nft"
          borderRadius="1.6rem"
          boxSize="150px"
        />

        <VStack
          flex={1}
          justifyContent="space-between"
          alignItems="stretch"
          spacing="1rem"
        >
          <VStack alignItems="flex-start">
            <Text
              as="h3"
              color="#F8F5F1"
              fontSize="1.6rem"
              fontWeight={600}
              lineHeight="2rem"
            >
              {nft.title}
            </Text>
            <Text as="h4" pt="0.4rem" color="#F8F5F1" fontSize="1.4rem">
              Collection
            </Text>
            <Text as="p" pt="1rem" color="#F8F5F1" fontSize="1.6rem">
              {nft.description}
            </Text>
          </VStack>

          <HStack spacing="2rem">
            <Button onClick={redirectToOpensea}>View on OpenSea</Button>
            <Button
              onClick={() => updateAvatar({ url: imageSrc })}
              isLoading={isUpdating}
            >
              Set as Avatar
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </AdminSectionItemCard>
  );
}
