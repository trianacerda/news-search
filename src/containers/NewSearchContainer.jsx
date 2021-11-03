import React, { Component } from 'react';
import { fetchNewsArticles } from '../services/NewsApi';

class NewsSearchContainer extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await fetchNewsArticles();
    this.setSet({ loading: false });
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading ? <h1>Loading...</h1> : <Article title author description />}
      </>
    );
  }
}

export default NewsSearchContainer;
