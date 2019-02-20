import React, { Component } from 'react'

class Search extends Component {

  handleSearchInput = (event) => {
    const searchInput = event.target.value;
    this.props.referenceSearchFood(searchInput);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearchInput} />
      </div>
    )
  }
}

export default Search;
