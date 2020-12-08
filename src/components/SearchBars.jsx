import React from 'react';

const SearchBars = () => {
  return (
    <div className="search-bars">
      <h2>
        <label htmlFor="title-search">Search by Title</label>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.titleFilterOnChange}
        />
      </h2>
      <h2>
        <label htmlFor="author-search">Search by Author</label>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.authorFilterOnChange}
        />
      </h2>
    </div>
  )
}

export default SearchBars;