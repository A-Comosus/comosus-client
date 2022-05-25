import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GraphQLClient } from 'graphql-request';
import axios, { AxiosInstance } from 'axios';

import useStorage from '@src/utils/hooks/useStorage';
import { AuthKey, StorageType } from '@src/constants/StorageKey';

const apiEndpoint = {
  gql:
    process.env.GRAPHQL_ENDPOINT ??
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

export function useApiClient() {
  return React.useContext(ApiClientContext);
}

export function ApiClientProvider({ children }: ApiClientProviderProps) {
  const { accessToken } = useAuth();

  // Common header
  // AuthOption 1: Insert Auth Token here with axios.interceptors.request
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
    const client = new GraphQLClient(apiEndpoint.gql, {
      headers,
    });

    // AuthOption 2: Insert Auth Token here with axios.interceptors.request

    return client;
  }, [headers]);

  // Create an instance of RestClient because why not
  const restClient = useMemo(() => {
    const client = axios.create({
      baseURL: apiEndpoint.rest,
      headers,
    });

    // AuthOption 2: Insert Auth Token here with axios.interceptors.request

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

export function useAuth() {
  const [accessToken, setAccessToken] = useStorage(
    AuthKey.AccessToken,
    StorageType.Session,
  );
  return { accessToken, setAccessToken };
}
