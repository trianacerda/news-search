import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import NewsSearchContainer from './NewSearchContainer';

describe('News Search Testing', () => {
  it('should display a list of articles', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();

    const titleInput = await screen.findByLabelText('Article Title');
    userEvent.type(titleInput, 'Health');

    const submitBtn = await screen.findByRole('button', {
      name: 'get-articles',
    });
    userEvent.click(submitBtn);

    return waitFor(() => {
      const articles = screen.getAllByText('Health', {
        exact: false,
      });
      expect(articles).toHaveLength(5);
    });
  });
});
