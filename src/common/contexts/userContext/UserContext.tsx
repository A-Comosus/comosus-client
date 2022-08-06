import React, { useMemo, useRef, useState } from 'react';
import * as _ from 'lodash';
import { useApiClient } from '@common/contexts';
import { useAuth } from '@src/stores';

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
  const [user, setUser] = useState<User>({} as User);

  const payload = useRef({ id: '' });
  const enabled = useMemo(() => {
    if (_.isNil(accessToken) || _.isNil(payload.current.id)) return false;
    payload.current = { id: parseJwt(accessToken).sub };
    return true;
  }, [accessToken]);
  useFindUserByIdQuery(
    gqlClient,
    { payload: payload.current },
    {
      enabled,
      onSettled: (data, error) => {
        if (error) {
          // TODO: handle this error
        } else if (data) {
          const { findUserById: userData } = data;
          setUser((preValue) => ({ ...preValue, ...userData }));
        }
      },
    },
  );

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return React.useContext(UserContext);
}
