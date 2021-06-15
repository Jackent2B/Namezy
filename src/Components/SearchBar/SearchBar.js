import React, { useEffect, useState } from 'react';
import './Searchbar.css';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [words, setWords] = useState([]);
  const name = require('@rstacruz/startup-name-generator');
  useEffect(() => {
    //console.log(name(search).slice(0, 12));
    if (search === '') setWords([]);
    else if (name(search).length >= 12) {
      setWords(name(search).slice(0, 12));
    } else setWords(name(search));
  }, [search]);

  return (
    <div id='searchBox'>
      <div>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search Name'
        />
      </div>
      <div>
        {words.map((word) => (
          <p>{word}</p>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
