import React, { Component } from 'react';
import { fetchNewsArticles } from '../services/NewsApi';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/articles/Search';

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

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const articles = await fetchNewsArticles(this.state.title);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, title } = this.state;

    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Search
              title={title}
              onTitleChange={this.handleTitleChange}
              onSubmit={this.handleSubmit}
            />

            <ArticleList articles={articles} />
          </>
        )}
      </>
    );
  }
}

export default NewsSearchContainer;
