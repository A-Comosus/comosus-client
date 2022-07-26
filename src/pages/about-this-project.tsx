import React from 'react';
import axios from 'axios';
import { LambdaUrl } from '@src/constants';

import { PageContainer, Text } from '@src/common/components';
import { VStack } from '@chakra-ui/react';
import {
  Organisation,
  Repositories,
  Teams,
} from '@src/modules/about-this-project';
import { useTranslation } from 'react-i18next';

const getProjectInfo = async () => {
  const { data } = await axios.get(LambdaUrl.GetProjectInfo);
  return data;
};

export async function getServerSideProps() {
  try {
    const projectInfo = await getProjectInfo();
    return { props: { projectInfo } };
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
    title: 'About this project',
  };

  return (
    <PageContainer head={head} disableFixedNavBar>
      <VStack gap="100px" my="100px" w="clamp(50%, 1600px, 90%)">
        <VStack>
          <Text type="h1">{`${t('header.heading-1')} ${org.login}`}</Text>
          <Text type="h4">{t('header.heading-2')}</Text>
        </VStack>

        <Organisation org={org} />

        <Repositories repos={repos} />

        <Teams teams={teams} />
      </VStack>
    </PageContainer>
  );
}
