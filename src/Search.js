import React from 'react';
import SearchBar from 'material-ui-search-bar';

function Search ()  {
  return (
    <div>
      <SearchBar
      placeholder = 'Search for your city...'
      style={{
        maxWidth: 500,
        marginBottom: '20px'
      }}
      />
    </div>
  );
}

export default Search;