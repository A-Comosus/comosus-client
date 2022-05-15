import React, { useEffect } from 'react';
import i18next, { Callback, TFunction } from 'i18next';

import { cn, en } from './locales';

type LocalisationContextType = {
  t: TFunction;
  setDefaultNamespace: (ns: string) => void;
  changeLanguage: (lng?: string, callback?: Callback) => Promise<TFunction>;
};

// @ts-ignore
const LocalisationContext = React.createContext<LocalisationContextType>({});

type LocalisationProviderProps = {
  children: React.ReactNode;
};

export function LocalisationProvider({ children }: LocalisationProviderProps) {
  useEffect(() => {
    i18next
      .init({
        lng: 'cn',
        debug: true,
        resources: {
          en,
          cn,
        },
      })
      .then(() => {})
      .catch((error) => {
        console.error('[Localisation] Error initialising i18next', error);
      });
  }, []);

  const { t, setDefaultNamespace, changeLanguage } = i18next;

  return (
    <LocalisationContext.Provider
      value={{ t, setDefaultNamespace, changeLanguage }}
    >
      {children}
    </LocalisationContext.Provider>
  );
}

export function useLocalisation() {
  return React.useContext(LocalisationContext);
}
