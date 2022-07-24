import React from 'react';
import axios from 'axios';
import { LambdaUrl } from '@src/constants';

import { PageContainer, Text } from '@src/common/components';
import { VStack } from '@chakra-ui/react';
import { Repositories, Teams } from '@src/modules/about-this-project';

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
  projectInfo,
}: AboutThisProjectProps) {
  const head = {
    title: 'About this project',
  };

  return (
    <PageContainer head={head}>
      <VStack border="1px solid red">
        <Text>{projectInfo.org.login}</Text>

        <Repositories repos={projectInfo.repos} />

        <Teams teams={projectInfo.teams} />
      </VStack>
    </PageContainer>
  );
}
