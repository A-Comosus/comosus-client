import React from 'react';
import { useRouter } from 'next/router';
import useStorage from '@utils/hooks/useStorage';
import { AuthKey, StorageType } from '@src/constants/StorageKey';
import { GlobalRoute } from '@src/constants/PageRoutes';

type AuthContextValueType = {
  accessToken: string | null | undefined;
  setAccessToken: (value: string | null) => void;
  logout: () => void;
};
const AuthContext = React.createContext({} as AuthContextValueType);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useStorage(
    AuthKey.AccessToken,
    StorageType.Session,
  );

  const logout = () => {
    setAccessToken(null);
    router.push(GlobalRoute.Root);
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
