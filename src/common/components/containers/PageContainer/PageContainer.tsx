import React from 'react';

import Head from 'next/head';
import { ColorModeScript, Image, VStack } from '@chakra-ui/react';
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

  const backgroundElements = [
    {
      src: '/assets/eclipse_small.svg',
      top: 268,
      left: -118,
      w: '40rem',
      h: '40rem',
      filter: 'blur(10rem)',
    },
    {
      src: '/assets/eclipse_large.svg',
      top: 1130,
      left: 600,
      w: '60rem',
      h: '86rem',
      filter: 'blur(20rem)',
    },
    {
      src: '/assets/eclipse_small.svg',
      top: 2155,
      left: -118,
      w: '40rem',
      h: '40rem',
      filter: 'blur(10rem)',
    },
    {
      src: '/assets/eclipse_large.svg',
      top: 2837,
      left: 600,
      w: '60rem',
      h: '86rem',
      filter: 'blur(20rem)',
    },
  ];

  return (
    <VStack
      justify="space-between"
      align="stretch"
      spacing="0"
      minH="100vh"
      overflow="hidden"
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

      <NavBar disableNavOptions={disableNavOptions} />
      <VStack
        as="main"
        position="relative"
        flex={1}
        alignSelf="center"
        align="stretch"
        py={['3rem', '6rem']}
        w="clamp(62.5%, 120rem, 90%)"
        maxW="120rem"
      >
        {backgroundElements.map((element, index) => (
          <Image
            key={element.src + index}
            alt="background element"
            position="absolute"
            {...element}
          />
        ))}
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}
