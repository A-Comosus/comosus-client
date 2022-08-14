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
    <VStack justify="space-between">
      <Text textAlign="center" fontSize={24} fontWeight={600}>
        {name || login}
      </Text>

      {location && (
        <HStack>
          <Icon variant="location" />
          <Text textAlign="center" fontSize={20} fontWeight={500}>
            {location}
          </Text>
        </HStack>
      )}

      {bio && (
        <Text textAlign="center" fontSize={16} fontWeight={500}>
          {bio}
        </Text>
      )}

      {email && (
        <HStack
          as="button"
          onClick={() => router.push(`mailto:${email}`)}
          _hover={{ borderBottom: '1px solid white' }}
        >
          <Icon variant="email" />
          <Text textAlign="center" fontSize={16} fontWeight={500}>
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
          bg={color}
        />
        <IconButton
          isDisabled={!blog}
          onClick={() => router.push(blog)}
          icon={<Icon variant="linkedin" />}
          aria-label="linkedin"
          rounded="full"
          bg={color}
        />
        <IconButton
          onClick={() => router.push(html_url)}
          icon={<Icon variant="github" />}
          aria-label="github"
          rounded="full"
          bg={color}
        />
      </HStack>
    </VStack>
  );
}
