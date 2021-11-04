import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewSearchContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

describe('News Search Testing', () => {
  const server = setupServer(
    rest.get(`/`, (req, res, ctx) => {
      return res(
        ctx.json({
          author: 'Reuters Editorial',
          title: 'Bitcoin tops $67,000 in record high - Reuters.com',
          description:
            'Bitcoin climbed to a record high on Wednesday amid new interest as the first U.S. bitcoin futures-based exchange-traded funds come to market.  Conway G. Gittens has more.',
        })
      );
    })
  );

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should display a list of articles', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});
