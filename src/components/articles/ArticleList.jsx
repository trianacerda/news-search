import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

export default function ArticleList({ articles }) {
  const articleList = articles.map(({ title, author, description }) => (
    <li key={`${title} by ${author}`}>
      <Article title={title} author={author} description={description} />
    </li>
  ));
  return <ul aria-label="articles">{articleList}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ),
};
