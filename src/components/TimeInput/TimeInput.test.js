import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TimeInput from './TimeInput';

afterEach(cleanup);

describe('TimeInput', () => {
  it('renders', () => {
    const { asFragment } = render(<TimeInput />);

    expect(asFragment()).toMatchSnapshot();
  });
});
