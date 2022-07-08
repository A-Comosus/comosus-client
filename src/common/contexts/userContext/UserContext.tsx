import React, { useMemo, useRef } from 'react';
import * as _ from 'lodash';
import { useApiClient, useAuth } from '@common/contexts';

import { User, useFindUserByIdQuery } from '@generated/graphql.queries';
import { parseJwt } from '@src/utils/parse-jwt';

type UserContextValueType = {
  user: User;
};
const UserContext = React.createContext<UserContextValueType>(
  {} as UserContextValueType,
);

type UserProdiverProps = {
  children: React.ReactNode;
};
export function UserProvider({ children }: UserProdiverProps) {
  const { accessToken } = useAuth();
  const { gqlClient } = useApiClient();

  const payload = useRef({ id: '' });
  const enabled = useMemo(() => {
    if (_.isNil(accessToken) || _.isNil(payload.current.id)) return false;
    payload.current = { id: parseJwt(accessToken).sub };
    return true;
  }, [accessToken]);

  const { data: user } = useFindUserByIdQuery(
    gqlClient,
    { payload: payload.current },
    {
      enabled,
      select: (data) => data.findUserById,
    },
  );

  const emptyUser = {
    id: '',
    name: '',
    email: '',
    status: '',
    username: '',
  };

  return (
    <UserContext.Provider value={{ user: user ?? emptyUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return React.useContext(UserContext);
}
