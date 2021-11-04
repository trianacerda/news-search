import React, { Component } from 'react';
import { fetchNewsArticles } from '../services/NewsApi';
import ArticleList from '../components/articles/ArticleList';

class NewsSearchContainer extends Component {
  state = {
    loading: true,
    articles: [],
    title: '',
  };

  async componentDidMount() {
    const articles = await fetchNewsArticles();
    this.setState({ articles, loading: false });
  }

  render() {
    const { loading, articles, title } = this.state;

    return (
      <>{loading ? <h1>Loading...</h1> : <ArticleList articles={articles} />}</>
    );
  }
}

export default NewsSearchContainer;
