import React, { Component } from 'react'

class SearchBar extends Component {

  state = {
    searchInput: '',
  }

  handleSearchInput = (e) => {
    const { updateFoodListHandler } = this.props;
    updateFoodListHandler(e.target.value);
    this.setState({
      searchInput: e.target.value,
    });
  }

  render() {
    return (
      <div className="control">
        <input className="input" type="text" value={this.state.searchInput} placeholder="Search" onChange={this.handleSearchInput}></input>
      </div>
    )
  }
}

export default SearchBar;
