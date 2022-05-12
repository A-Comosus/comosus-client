import React, { useMemo } from 'react';
import _ from 'lodash';
import { gql, GraphQLClient } from 'graphql-request';
import axios, { AxiosInstance } from 'axios';

// TODO: Fetch this from process.env
const API_CLIENT_DEFAULT_HOST = 'https://api.spacex.land/graphql/';

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
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Create an instance of GraphQLClient
  const gqlClient = useMemo(() => {
    const client = new GraphQLClient(API_CLIENT_DEFAULT_HOST, {
      headers,
    });

    return client;
  }, []);

  // Create an instance of RestClient because why not
  const restClient = useMemo(() => {
    const client = axios.create({
      baseURL: API_CLIENT_DEFAULT_HOST,
      headers,
    });

    return client;
  }, []);

  return (
    <ApiClientContext.Provider value={{ gqlClient, restClient }}>
      {children}
    </ApiClientContext.Provider>
  );
}
