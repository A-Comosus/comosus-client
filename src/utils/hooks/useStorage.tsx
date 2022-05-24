import React, { useEffect, useState } from 'react';
import { StorageType } from '@src/constants/StorageKey';

type useStorageReturnType = [
  string | undefined | null,
  (value: string) => void,
];

export default function useStorage(
  key: string,
  type?: StorageType,
  defaultValue?: string,
): useStorageReturnType {
  const [value, setValue] = useState<string | null>();

  const storeValue = (value: string) => {
    if (type === StorageType.Session) {
      window.sessionStorage.setItem(key, value);
    }
    window.localStorage.setItem(key, value);
  };

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);

    if (type === StorageType.Session) {
      setValue(window.sessionStorage.getItem(key));
    }

    setValue(window.localStorage.getItem(key));
  }, [defaultValue, key, type]);

  return [value, storeValue];
}
