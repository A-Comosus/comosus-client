import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ApiClientProvider } from '@common/contexts';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(ui, { ...options, wrapper: ApiClientProvider });
};

export * from '@testing-library/react';
export { customRender as render };
