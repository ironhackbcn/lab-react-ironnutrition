import React, { Component } from 'react';
import SearchField from "react-search-field";


export default class Search extends Component {
  render() {
    return (
      <div className="searchbar">
        <SearchField
          placeholder="Search..."
          searchText="Search your food"
          classNames="test-class"
        />
      </div>
    )
  }
}
