import React, { Component } from 'react';

class NewsSearchContainer extends Component {
  state = {
    loading: true,
  };

  // componentDidMount() {
  //   //fetch articles
  //   this.setSet({ loading: false });
  // }

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
