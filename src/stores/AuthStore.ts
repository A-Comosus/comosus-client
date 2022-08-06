import create from 'zustand';
import { devtools, persist, combine } from 'zustand/middleware';
import { StoreActions } from '@src/stores';
import { useRouter } from 'next/router';
import { GlobalRoute } from '@src/constants';

export type AuthStoreState = {
  id: string | null;
  accessToken: string | null;
};

export type AuthStoreAction = {
  initStore: (value: AuthStoreState) => void;
  logout: () => void;
};

export enum AuthStore {
  Name = 'AuthStore',
  InitStore = 'InitStore',
  Logout = 'Logout',
}

const name = AuthStore.Name;
const initialState: AuthStoreState = {
  id: null,
  accessToken: null,
};
const actions: StoreActions<AuthStoreState, AuthStoreAction> = (set) => ({
  initStore: (value) => set(() => value, false, AuthStore.InitStore),
  logout: () => {
    set(() => initialState, false, AuthStore.Logout);
  },
});
const useStore = create(
  devtools(persist(combine(initialState, actions), { name }), { name }),
);

export function useAuth() {
  const state = useStore();
  const router = useRouter();

  const logout = () => {
    state.logout();
    router.push(GlobalRoute.Root);
  };

  return { ...state, logout };
}
