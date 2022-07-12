import React, { useMemo } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useApiClient, useUser } from '@src/common/contexts';
import { useFindUserByUsernameQuery } from '@generated/graphql.queries';

import { Avatar, HStack, IconButton, Spinner, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Logo, Text, ProfileItem } from '@src/common/components';
import { BsShareFill } from 'react-icons/bs';
import { FaShareSquare } from 'react-icons/fa';

export default function ProfilePreview() {
  const { t } = useTranslation('admin');
  const {
    user: { username },
  } = useUser();

  const enabled = useMemo(() => {
    return !_.isNil(username);
  }, [username]);
  const { gqlClient } = useApiClient();
  const { data: userData, isLoading } = useFindUserByUsernameQuery(
    gqlClient,
    { payload: { username } },
    {
      enabled,
      select: (data) => data.findUserByUsername,
    },
  );

  return (
    <VStack flex={1} justify="center" align="center" p="20px">
      <VStack
        position="relative"
        justify="space-between"
        overflowY="scroll"
        __css={{
          '&::-webkit-scrollbar': { display: 'none' },
        }}
        gap={20}
        border="5px solid #3B3C46"
        borderRadius="20px"
        p="40px"
        w="300px"
        h="550px"
        bgGradient="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <VStack alignSelf="stretch" gap={5}>
            <IconButton
              aria-label={t('link.preview.share')}
              icon={<FaShareSquare />}
              position="absolute"
              top={5}
              right={2.5}
            />

            <VStack>
              <Avatar size="lg" src="https://picsum.photos/200" />
              <Text color="white">{userData?.username}</Text>
            </VStack>

            <VStack alignSelf="stretch" align="stretch" gap={4}>
              {userData &&
                userData.links.map((link, index) => {
                  return <ProfileItem key={index} link={link} />;
                })}
            </VStack>
          </VStack>
        )}

        <Logo color="white" variant="inline" />
      </VStack>

      <HStack>
        <BsShareFill />
        <Text textDecoration="underline">
          <Link href={`/${userData?.username}`} passHref>
            <a target="_blank" rel="noreferrer">
              {t('link.preview.share')}
            </a>
          </Link>
        </Text>
      </HStack>
    </VStack>
  );
}
