import * as React from 'react';

export interface SearchProps {
  onSearchChange: Function;
}

const apiKey = '87dfa1c669eea853da609d4968d294be';

const Search: React.FC<SearchProps> = props => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleKeyUp = React.useCallback(
    e => {
      if (searchTerm === '') {
        props.onSearchChange(null);
        return;
      }

      if (e.key === 'Enter') {
        var searchUrl = 'search/multi?query=' + searchTerm + '&api_key=' + apiKey;
        props.onSearchChange(searchUrl);
      }
    },
    [searchTerm, props.onSearchChange]
  );

  const handleChange = React.useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div id="search" className="Search">
      <input
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        type="search"
        placeholder="Search for a title..."
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
