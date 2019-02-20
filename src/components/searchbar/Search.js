import React, { Component } from 'react'

class Search extends Component {
  
  state = {
    searchInput: '',
  }

  handleSearchInput = (e) => {

    const searchInput = e.target.value;

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
