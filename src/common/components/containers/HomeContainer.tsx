import React from 'react';
import Head from 'next/head';
import { ColorModeScript, Flex, HStack } from '@chakra-ui/react';
import { NavBar } from '@src/common/components';

type HomeContainerProps = {
  children: React.ReactNode;
  head: Head;
};

export default function HomeContainer({ children, head }: HomeContainerProps) {
  const { title, metas, links } = head;

  return (
    <Flex
      direction="column"
      minH="100vh"
      minW="100vw"
      scrollSnapType="y mandatory"
      overflowY="scroll"
      height="100vh"
      position="relative"
    >
      <Head>
        <title>{title}</title>
        {metas &&
          metas.map(({ name, content }, index) => (
            <meta key={index} name={name} content={content} />
          ))}
        {links &&
          links.map(({ rel, href }, index) => (
            <link key={index} rel={rel} href={href} />
          ))}
      </Head>

      <ColorModeScript />
      <HStack
        width="100vw"
        justifyContent="center"
        position="fixed"
        top="0"
        left="0"
        right="0"
        marginTop="1rem"
        zIndex="999"
      >
        <NavBar />
      </HStack>
      {children}
    </Flex>
  );
}
