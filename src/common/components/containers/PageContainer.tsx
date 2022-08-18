import React from 'react';

import Head from 'next/head';
import { ColorModeScript, VStack } from '@chakra-ui/react';
import { Footer, NavBar, NavBarProps } from '@common/components';

type PageContainerProps = {
  children: React.ReactNode;
  head: Head;
} & NavBarProps;

export default function PageContainer({
  children,
  head,
  disableNavOptions,
}: PageContainerProps) {
  const { title, metas, links } = head;

  return (
    <VStack justify="space-between" align="stretch" spacing="0" minH="100vh">
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

      <NavBar disableNavOptions={disableNavOptions} />
      <VStack
        as="main"
        flex={1}
        alignSelf="center"
        align="stretch"
        py={['3rem', '6rem']}
        w="clamp(62.5%, 120rem, 90%)"
        maxW="120rem"
      >
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}
