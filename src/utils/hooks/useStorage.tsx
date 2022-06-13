import { useState, useEffect } from 'react';
import { StorageType } from '@src/constants/StorageKey';

type useStorageReturnType = [
  string | undefined | null,
  (value: string | null) => void,
];

export default function useStorage(
  key: string,
  type?: StorageType,
  defaultValue?: string,
): useStorageReturnType {
  const [value, setValue] = useState<string | null>();

  const storeValue = (value: string | null) => {
    if (type === StorageType.Session)
      window.sessionStorage.setItem(key, value ?? '');
    else window.localStorage.setItem(key, value ?? '');
    setValue(value);
  };

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);

    if (type === StorageType.Session)
      setValue(window.sessionStorage.getItem(key));
    else setValue(window.localStorage.getItem(key));
  }, [defaultValue, key, type]);

  return [value, storeValue];
}
