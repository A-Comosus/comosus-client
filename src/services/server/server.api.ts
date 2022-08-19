import { useGetServerInfoQuery } from '@generated/graphql.queries';
import { useApiClient } from '@src/common/contexts';

export function useServer() {
  const { gqlClient } = useApiClient();
  const staleTime = 1000;

  const {
    data: serverInfo,
    error,
    isFetching: isFetchingServerInfo,
  } = useGetServerInfoQuery(
    gqlClient,
    {},
    {
      staleTime,
    },
  );

  return { serverInfo, error, isFetchingServerInfo };
}
