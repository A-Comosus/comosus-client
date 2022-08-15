import React from 'react';

import Head from 'next/head';
import { ColorModeScript, Flex, Center } from '@chakra-ui/react';
import { Footer, NavBar, NavBarProps } from '@common/components';

type PageContainerProps = {
  children: React.ReactNode;
  head: Head;
  disableFixedNavBar?: boolean;
} & NavBarProps;

export default function PageContainer({
  children,
  head,
  disableNavOptions,
  disableFixedNavBar,
}: PageContainerProps) {
  const { title, metas, links } = head;

  return (
    <Flex direction="column" justify="center" align="center" minH="100vh">
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
      <Center
        position={disableFixedNavBar ? 'relative' : 'fixed'}
        top="0"
        marginTop="1rem"
        w="clamp(50%, 1400px, 90%)"
        zIndex="999"
      >
        <NavBar disableNavOptions={disableNavOptions} />
      </Center>
      {children}
      {false && <Footer />}
    </Flex>
  );
}
