export * from './createStore';
export * from './AuthStore';
export * from './Web3Store';

type Set<T extends object> = (
  partial: T | Partial<T> | ((state: T) => T | Partial<T>),
  replace?: boolean,
  actionType?: string,
) => void;

type Get<T extends object> = () => T;

export type StoreActions<State extends object, Action extends object> = (
  set: Set<State>,
  get: Get<State>,
) => Action;
