import React from 'react';
import axios from 'axios';
import { LambdaUrl } from '@src/constants';

import { PageContainer, Text } from '@src/common/components';
import { VStack } from '@chakra-ui/react';

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
      <VStack>
        <Text>{projectInfo.login}</Text>
      </VStack>
    </PageContainer>
  );
}

type ProjectInfo = {
  avatar_url: string;
  login: string;
  url: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  teams: {
    name: string;
    slug: string;
    members: {
      login: string;
      name: string;
      avatar_url: string;
      html_url: string;
      blog: string;
      location: string;
      email: string;
      bio: string;
      twitter_username: string;
      created_at: string;
      updated_at: string;
    }[];
  }[];
  repos: {
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    languages: object;
  }[];
};
