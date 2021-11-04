import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ title, onTitleChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Article Title</label>
      <input
        id="title"
        title="title"
        type="text"
        value={title}
        onChange={onTitleChange}
      />
      <button aria-label="get-articles">Give Me Articles!</button>
    </form>
  );
}

Search.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
