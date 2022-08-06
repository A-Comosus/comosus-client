import create from 'zustand';
import { devtools, persist, combine } from 'zustand/middleware';
import { StoreActions } from '@src/stores';

export const createStore = <State extends object, Action extends object>(
  initialState: State,
  actions: StoreActions<State, Action>,
  name: string,
) =>
  create(devtools(persist(combine(initialState, actions), { name }), { name }));
