import { useState } from 'react';

export default function useToggle(
  defaultValue?: boolean,
): [boolean, () => void] {
  const [state, setState] = useState(defaultValue ?? false);
  const toggleState = () => setState((preValue) => !preValue);

  return [state, toggleState];
}
