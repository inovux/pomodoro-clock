import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TimeInput from './TimeInput';

describe('TimeInput', () => {
  it('renders', () => {
    const { asFragment } = render(<TimeInput />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an input when number is clicked', () => {
    const { queryByText, queryByDisplayValue } = render(
      <TimeInput value={0} />
    );
    const span = queryByText('0');

    fireEvent.click(span);

    const inputField = queryByDisplayValue('0');

    expect(inputField).toBeInTheDocument();
  });
});
