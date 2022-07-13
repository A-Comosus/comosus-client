import React from 'react';
import { request } from 'graphql-request';

import { Avatar, Center, VStack } from '@chakra-ui/react';
import { Text, ProfileItem } from '@src/common/components';

type ServerSideContextType = { query: { username: string } };
export async function getServerSideProps(context: ServerSideContextType) {
  const { username } = context.query;

  const gqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '';

  try {
    const { findUserByUsername } = await request(
      gqlEndpoint,
      `
      query FindByUsername($payload: FindUserByUsernameInput!) {
        findUserByUsername(username: $payload) {
          id
          displayName
          username
          links {
            id
            title
            url
            logoUrl
          }
        }
      }
      `,
      { payload: { username } },
    );
    return {
      props: { userData: findUserByUsername }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

type PublicProfileProps = {
  userData: {
    id: string;
    displayName: string;
    username: string;
    links: {
      id: string;
      title: string;
      url: string;
    }[];
  };
};
export default function PublicProfile({ userData }: PublicProfileProps) {
  return (
    <VStack
      p="10rem"
      minH="100vh"
      bgGradient="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
    >
      <VStack alignSelf="stretch" gap={5}>
        <VStack>
          <Avatar size="lg" src="https://picsum.photos/200" />
          <Text color="white">
            {userData?.displayName ?? userData?.username}
          </Text>
        </VStack>

        <VStack alignSelf="stretch" align="stretch" gap={4}>
          {userData &&
            userData.links.map((link, index) => {
              return <ProfileItem key={index} link={link} />;
            })}
        </VStack>
      </VStack>
    </VStack>
  );
}
