import React from 'react';
import PropTypes from 'prop-types';

export default function Article({ title, author, description }) {
  return (
    <figure>
      <figcaption>
        {title}
        {author}
        {description}
      </figcaption>
    </figure>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
};
