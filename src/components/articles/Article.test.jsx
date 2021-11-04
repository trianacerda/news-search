import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('article test', () => {
  it('should render a single article for the list', () => {
    const { asFragment } = render(
      <Article
        title="triana loves candy"
        author="triana"
        description="triana goes to a candy shop"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
