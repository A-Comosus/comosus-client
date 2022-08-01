import { GlobalRoute } from '@src/constants';
import { createStore, StoreActions } from '@src/stores';
import { useRouter } from 'next/router';

export type AuthStoreState = {
  id: string | null;
  accessToken: string | null;
};

export type AuthStoreAction = {
  initStore: (value: AuthStoreState) => void;
  setId: (id: string) => void;
  setAccessToken: (accessToken: string) => void;
  logout: () => void;
};

export enum AuthStore {
  Name = 'AuthStore',
  InitStore = 'InitStore',
  SetId = 'SetId',
  SetAccessToken = 'SetAccessToken',
  Logout = 'Logout',
}

export function useAuth() {
  const { push } = useRouter();
  const name = AuthStore.Name;
  const initialState: AuthStoreState = {
    id: null,
    accessToken: null,
  };
  const actions: StoreActions<AuthStoreState, AuthStoreAction> = (set) => ({
    initStore: (value) => set(() => value, false, AuthStore.InitStore),
    setId: (id) => set(() => ({ id }), false, AuthStore.SetId),
    setAccessToken: (accessToken) =>
      set(() => ({ accessToken }), false, AuthStore.SetAccessToken),
    logout: () => {
      set(() => initialState, false, AuthStore.Logout);
      push(GlobalRoute.Root);
    },
  });

  const useStore = createStore(initialState, actions, name);

  return useStore();
}
