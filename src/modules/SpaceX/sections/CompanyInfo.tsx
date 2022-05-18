import React from 'react';
import { CompanyQuery } from '@src/_generated/graphql.queries';

import { Text } from '@common/components';

type CompanyInfoProps = {
  data?: CompanyQuery;
};

export default function CompanyInfo({ data }: CompanyInfoProps) {
  if (!data) {
    return <Text>Loading Company Info...</Text>;
  }

  const { company } = data;

  return (
    <>
      {company && (
        <section>
          <Text>{company.name}</Text>
          <Text>{company.summary}</Text>
        </section>
      )}
    </>
  );
}
