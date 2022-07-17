import React from 'react';
import { HStack, VStack, Button, Image } from '@chakra-ui/react';
import { Link, Text } from '@common/components';

type HeroProps = {
  flexDirection: any;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  src: string;
  alt: string;
};

export default function Hero({
  flexDirection,
  title,
  subtitle,
  cta,
  link,
  src,
  alt,
}: HeroProps) {
  return (
    <HStack
      flexDirection={flexDirection}
      gap="5rem"
      justifyContent="space-between"
      background="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
      marginTop="0rem !important"
      padding="0 5rem"
      height="100vh"
      width="100vw"
      scrollSnapAlign="start"
    >
      <VStack alignItems="flex-start" gap="1rem">
        <Text type="h1" color="#F0F435">
          {title}
        </Text>
        <Text type="h4" color="#F0F435">
          {subtitle}
        </Text>
        <Link href={link} color="#fff">
          <Button background="linear-gradient(180deg, #FF3F66 0%, #E75784 100%)">
            {cta}
          </Button>
        </Link>
      </VStack>
      <VStack>
        <Image src={src} alt={alt} />
      </VStack>
    </HStack>
  );
}
