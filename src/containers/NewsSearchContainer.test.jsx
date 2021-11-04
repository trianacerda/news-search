import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewSearchContainer';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// const server = setupServer(
//   // Describe the requests to mock.
//   rest.get(
//     `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`,
//     (req, res, ctx) => {
//       rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
//         const query = req.url.searchParams;
//         const q = query.get('q');
//         const apiKey = query.get('apiKey');
//       });
//       return res(
//         ctx.json({
//           title:
//             'JPMorgan CEO Says Bitcoin Has No Intrinsic Value After Claiming That Its Price Could Rise 10X',
//           author: 'noreply@blogger.com (Unknown)',
//           description:
//             'JPMorgan CEO Jamie Dimon is still not a Bitcoin fan despite rapid price appreciation   from U.Today https://ift.tt/3iyi5nR https://ift.tt/eA...',
//         })
//       );
//     }
//   )
// );

describe('News Search Testing', () => {
  // beforeAll(() => {
  //   // Establish requests interception layer before all tests.
  //   server.listen();
  // });
  // afterAll(() => {
  //   // Clean up after all tests are done, preventing this
  //   // interception layer from affecting irrelevant tests.
  //   server.close();
  // });

  it('should display a list of articles', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');

    // const ul = await screen.findByRole('list', { name: 'articles' });
    // expect(ul).toMatchSnapshot();
  });
});
