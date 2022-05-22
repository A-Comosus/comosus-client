import React from 'react';

import { render } from '@utils/test-utils';
import {
  Title,
  Description,
  NextInformation,
} from '@modules/NextTemplate/sections';

jest.mock('react-i18next', (): any => ({
  useTranslation: (): any => ({
    t: (key: string): string => key.toUpperCase(),
  }),
}));

describe('Next Template Modules', () => {
  it('should renders a title', () => {
    const { getByText } = render(<Title />);
    const title = getByText(/title/i);
    expect(title).toBeVisible;
  });

  it('should render a description', () => {
    const { getByText } = render(<Description />);

    const description = getByText(/getStarted/i);
    expect(description).toBeVisible;
  });

  it('should render four cards', () => {
    const mockData = {
      cardSet1: [{ href: '', title: '', description: '' }],
      cardSet2: [
        { href: '', title: '', description: '' },
        { href: '', title: '', description: '' },
        { href: '', title: '', description: '' },
        { href: '', title: '', description: '' },
        { href: '', title: '', description: '' },
      ],
    };

    const { rerender, getAllByTestId } = render(
      <NextInformation cards={mockData.cardSet1} />,
    );
    expect(getAllByTestId('next-template-card').length).toBe(
      mockData.cardSet1.length,
    );

    rerender(<NextInformation cards={mockData.cardSet2} />);
    expect(getAllByTestId('next-template-card').length).toBe(
      mockData.cardSet2.length,
    );
  });
});
