import React, { Component } from 'react'

class Search extends Component {

  handleSearchInput = (event) => {
    const searchInput = event.target.value;
    this.props.referenceSearchFood(searchInput);
  }

  render() {
    return (
        <input className="input is-info" type="text" onChange={this.handleSearchInput} />
    )
  }
}

export default Search;
