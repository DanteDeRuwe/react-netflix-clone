import * as React from 'react';
import TitleList from './TitleList';

export interface SearchResultsProps {
  searchUrl: string;
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  return props.searchUrl ? (
    <div className="SearchResults">
      <TitleList title="Search Results" url={props.searchUrl} />
    </div>
  ) : null;
};

export default SearchResults;
