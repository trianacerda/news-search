import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewSearchContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

describe('News Search Testing', () => {
  it('should display a list of articles', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});
