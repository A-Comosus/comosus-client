import React, { useMemo } from 'react';
import { useAuth } from '@common/contexts';
import { GraphQLClient } from 'graphql-request';
import axios, { AxiosInstance } from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const apiEndpoint = {
  gql:
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
    process.env.DEFAULT_ENDPOINT ??
    'http://localhost:3100/graphql/',
  rest:
    process.env.REST_ENDPOINT ??
    process.env.DEFAULT_ENDPOINT ??
    'http://localhost:3100/graphql/',
};

type ApiClientContextType = {
  gqlClient: GraphQLClient;
  restClient: AxiosInstance;
};
const ApiClientContext = React.createContext<ApiClientContextType>(
  {} as ApiClientContextType,
);

type ApiClientProviderProps = {
  children: React.ReactNode;
};
export function ApiClientProvider({ children }: ApiClientProviderProps) {
  const { accessToken } = useAuth();

  const headers = useMemo(() => {
    const _header = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (accessToken) {
      return { ..._header, Authorization: 'Bearer ' + accessToken };
    } else return _header;
  }, [accessToken]);

  // Create an instance of GraphQLClient
  const gqlClient = useMemo(() => {
    // @ts-ignore
    const client = new GraphQLClient(apiEndpoint.gql, {
      headers,
    });
    return client;
  }, [headers]);

  // Create an instance of RestClient because why not
  const restClient = useMemo(() => {
    const client = axios.create({
      baseURL: apiEndpoint.rest,
      headers,
    });
    return client;
  }, [headers]);

  const queryStaleTime = parseInt(process.env.QUERY_STALE_TIME ?? '1', 10);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: queryStaleTime * 1000,
      },
    },
  });

  return (
    <ApiClientContext.Provider value={{ gqlClient, restClient }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </ApiClientContext.Provider>
  );
}

export function useApiClient() {
  return React.useContext(ApiClientContext);
}
