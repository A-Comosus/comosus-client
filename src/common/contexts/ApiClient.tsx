import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GraphQLClient } from 'graphql-request';
import axios, { AxiosInstance } from 'axios';

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
  // Common header
  // AuthOption 1: Insert Auth Token here with axios.interceptors.request
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Create an instance of GraphQLClient
  const gqlClient = useMemo(() => {
    const client = new GraphQLClient(apiEndpoint.gql, {
      headers,
    });

    // AuthOption 2: Insert Auth Token here with axios.interceptors.request

    return client;
  }, []);

  // Create an instance of RestClient because why not
  const restClient = useMemo(() => {
    const client = axios.create({
      baseURL: apiEndpoint.rest,
      headers,
    });

    // AuthOption 2: Insert Auth Token here with axios.interceptors.request

    return client;
  }, []);

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
