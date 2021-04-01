import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

function Search (props)  {

  const [input, setInput] = useState('');

  function handleChange (val) {
    setInput(val);
  }

  return (
    <div>
      <SearchBar
      onChange = {(value) => {handleChange(value)}}
      onRequestSearch = {() => {props.handleSearch(input)}}
      placeholder = 'Search for your city...'
      style={{
        maxWidth: 500,
        marginBottom: '20px',
        backgroundColor: '#ffffff1f',
        color: 'white'
      }}
      />
    </div>
  );
}

export default Search;