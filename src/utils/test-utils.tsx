import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ApiClientProvider, ThemeContextProvider } from '@common/contexts';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

type TestProviderProps = {
  children: React.ReactNode;
};
const TestProviders = ({ children }: TestProviderProps) => {
  return (
    <ApiClientProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ApiClientProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(ui, {
    ...options,
    wrapper: TestProviders,
  });
};

export * from '@testing-library/react';
export { customRender as render };
