import React from 'react';
import axios from 'axios';
import { LambdaUrl } from '@src/constants';
import { useTranslation } from 'react-i18next';

import { VStack, Text } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { Organisation, Repositories, Teams } from '@src/modules/home';

const getProjectInfo = async () => {
  const { data } = await axios.get(LambdaUrl.GetProjectInfo);
  return data;
};

export async function getStaticProps() {
  try {
    const projectInfo = await getProjectInfo();
    return { props: { projectInfo }, revalidate: 24 * 60 * 60 };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

type AboutThisProjectProps = {
  projectInfo: ProjectInfo;
};
export default function AboutThisProject({
  projectInfo: { org, repos, teams },
}: AboutThisProjectProps) {
  const { t } = useTranslation('project');
  const head = {
    title: 'About project',
  };

  return (
    <PageContainer head={head}>
      <VStack align="stretch" spacing={['4rem', '10rem']}>
        <VStack>
          <Text
            as="h1"
            fontSize={['6rem', '9rem']}
            fontWeight={700}
            fontFamily="Blinker"
            lineHeight="100%"
          >{`${t('header.heading-1')} ${org.login}`}</Text>
          <Text
            as="h4"
            color="#ADB2C6"
            fontSize={['1.2rem', '1.6rem']}
            fontWeight={600}
            lineHeight="2rem"
          >
            {t('header.heading-2')}
          </Text>
        </VStack>

        <Organisation org={org} />

        <Repositories repos={repos} />

        <Teams teams={teams} />
      </VStack>
    </PageContainer>
  );
}
