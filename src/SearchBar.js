import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.state.searchValue(e.target.value);
  }

  render() {
    return (
      <input className="search-bar" type="text" name="searchBar" placeholder="Search for a food..." onChange={(e) => this.handleSearch(e)} />
    );
  }
}

export default SearchBar;