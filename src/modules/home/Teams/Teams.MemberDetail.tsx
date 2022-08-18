import React from 'react';
import { useRouter } from 'next/router';

import { HStack, IconButton, VStack } from '@chakra-ui/react';
import { Icon, Text } from '@src/common/components';

type MemberDetailProps = {
  member: Member;
  color: string;
};
export default function MemberDetail({
  member: {
    login,
    name,
    location,
    bio,
    email,
    twitter_username,
    blog,
    html_url,
  },
  color,
}: MemberDetailProps) {
  const router = useRouter();

  return (
    <VStack justify="space-between" fontSize="1.6rem">
      <Text textAlign="center" fontSize="2.4rem" fontWeight={600}>
        {name || login}
      </Text>

      {location && (
        <HStack>
          <Icon variant="location" />
          <Text textAlign="center" fontSize="2rem" fontWeight={500}>
            {location}
          </Text>
        </HStack>
      )}

      {bio && (
        <Text textAlign="center" fontSize="1.6rem" fontWeight={500}>
          {bio}
        </Text>
      )}

      {email && (
        <HStack
          as="button"
          onClick={() => router.push(`mailto:${email}`)}
          _hover={{ borderBottom: '.1rem solid white' }}
        >
          <Icon variant="email" />
          <Text textAlign="center" fontSize="1.6rem" fontWeight={500}>
            {email}
          </Text>
        </HStack>
      )}

      <HStack>
        <IconButton
          isDisabled={!twitter_username}
          onClick={() => router.push(`https://twitter.com/${twitter_username}`)}
          icon={<Icon variant="twitter" />}
          aria-label="twitter"
          rounded="full"
          w="4rem"
          h="4rem"
          fontSize="1.6rem"
          bg={color}
        />
        <IconButton
          isDisabled={!blog}
          onClick={() => router.push(blog)}
          icon={<Icon variant="linkedin" />}
          aria-label="linkedin"
          rounded="full"
          w="4rem"
          h="4rem"
          fontSize="1.6rem"
          bg={color}
        />
        <IconButton
          onClick={() => router.push(html_url)}
          icon={<Icon variant="github" />}
          aria-label="github"
          rounded="full"
          w="4rem"
          h="4rem"
          fontSize="1.6rem"
          bg={color}
        />
      </HStack>
    </VStack>
  );
}
