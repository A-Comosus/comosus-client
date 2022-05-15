import React from 'react';
import { isNil } from 'lodash';
import { LaunchListQuery } from '@src/_generated/graphql.queries';

import { Text } from '@src/common/components';

type LaunchListProps = {
  data?: LaunchListQuery;
};

export default function LaunchList({ data }: LaunchListProps) {
  if (isNil(data)) {
    return <Text>Loading...</Text>;
  } else {
    const { launches } = data;

    return (
      <section>
        {!isNil(launches) &&
          launches.map((launch, index) => {
            if (!isNil(launch)) {
              return (
                launch.rocket && (
                  <div key={index}>
                    <hr />
                    <Text type="h2">{`${launch.mission_name} [${launch.launch_year}]`}</Text>
                    <Text>{`${launch.rocket.rocket_name}:${launch.rocket.rocket_type}`}</Text>
                  </div>
                )
              );
            }
          })}
      </section>
    );
  }
}
