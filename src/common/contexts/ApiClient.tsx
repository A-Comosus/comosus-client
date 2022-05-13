import React, { useMemo } from 'react';
import _ from 'lodash';
import { GraphQLClient } from 'graphql-request';
import axios, { AxiosInstance } from 'axios';

// TODO: Fetch this from process.env
const apiEndpoint = {
  gql:
    process.env.GRAPHQL_ENDPOINT ??
    process.env.DEFAULT_ENDPOINT ??
    'https://api.spacex.land/graphql/',
  rest:
    process.env.REST_ENDPOINT ??
    process.env.DEFAULT_ENDPOINT ??
    'https://api.spacex.land/graphql/',
};
type ApiClientContextType = {
  gqlClient: GraphQLClient;
  restClient: AxiosInstance;
};

// @ts-ignore
const ApiClientContext = React.createContext<ApiClientContextType>({});

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

  return (
    <ApiClientContext.Provider value={{ gqlClient, restClient }}>
      {children}
    </ApiClientContext.Provider>
  );
}
