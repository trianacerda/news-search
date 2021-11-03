import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewSearchContainer';

describe('News Search Testing', () => {
  it('should display a list of articles', () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');
  });
});
