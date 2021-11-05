import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Search query test', () => {
  it('taking in a query and change on submite', () => {
    const { asFragment } = render(
      <Search onSubmit="dog" value="dog" onChange="dog" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
