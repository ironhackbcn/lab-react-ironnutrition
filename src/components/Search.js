import React, { Component } from 'react';

export default class Search extends Component {
  handleSearch = (event) => {
    const { handleSearch } = this.props;
    handleSearch(event.target.value);
  };

  render() {
    return (
      <div>
        <input name="search" type="text" onChange={this.handleSearch}></input>
      </div>
    );
  }
}
