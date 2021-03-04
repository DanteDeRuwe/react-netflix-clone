import * as React from 'react';

export interface SearchState {
    searchTerm: string;
    searchUrl: string;
}
export interface SearchProps {
    onSearchChange: any;
}

export default class Search extends React.Component<SearchProps, SearchState> {
    apiKey: string = '87dfa1c669eea853da609d4968d294be';
  
    constructor(props) {
      super(props);
      this.state = { searchTerm: '', searchUrl: '' };
    }
  
    handleKeyUp = e => {
      if (e.key === 'Enter' && this.state.searchTerm !== '') {
        var searchUrl = 'search/multi?query=' + this.state.searchTerm + '&api_key=' + this.apiKey;
        this.props.onSearchChange(searchUrl);
      }
    };
  
    handleChange = e => {
      this.setState({ searchTerm: e.target.value });
    };

    render() {
        return (
            <div id="search" className="Search">
            <input
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            type="search"
            placeholder="Search for a title..."
            value={this.state.searchTerm}
            />
      </div>
        )
    }
}


