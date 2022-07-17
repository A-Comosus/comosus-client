import React from 'react';
import { Button, VStack, Image } from '@chakra-ui/react';
import { Text, Link } from '@src/common/components';
import { TextTypes } from '@src/common/components/text/Text';

type HeroContentProps = {
  title: string;
  subtitle: string;
  link: string;
  cta: string;
  src: string;
  alt: string;
  alignItems: any;
  type: TextTypes;
};

export default function Hero({
  title,
  subtitle,
  link,
  cta,
  src,
  alt,
  alignItems,
  type,
}: HeroContentProps) {
  return (
    <>
      <VStack alignItems="flex-start" gap="1rem" width="65%">
        <Text type={type} color="#F0F435">
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
      <VStack width="35%" alignItems={alignItems}>
        <Image src={src} alt={alt} />
      </VStack>
    </>
  );
}
