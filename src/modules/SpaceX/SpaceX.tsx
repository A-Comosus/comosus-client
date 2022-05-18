import React from 'react';
import {
  CompanyQuery,
  LaunchListQuery,
  useCompanyQuery,
  useLaunchListQuery,
} from '@generated/graphql.queries';
import { useApiClient } from '@common/contexts';

import { Container, Text } from '@common/components';
import LaunchList from './sections/LaunchList';
import CompanyInfo from './sections/CompanyInfo';

export default function SpaceX() {
  const { gqlClient } = useApiClient();
  const { data: companyQueryData } = useCompanyQuery<CompanyQuery, Error>(
    gqlClient,
  );
  const { data: launchListQueryData } = useLaunchListQuery<
    LaunchListQuery,
    Error
  >(gqlClient);

  return (
    <Container type="main">
      <Text type="h1">About SpaceX</Text>
      {/* TODO: need to investigate return type of graphql queries */}
      <CompanyInfo data={companyQueryData} />
      <LaunchList data={launchListQueryData} />
    </Container>
  );
}
