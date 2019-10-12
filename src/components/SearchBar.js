import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: ''
  };

  filterSearch = e => {
    console.log('pasas?');
    this.setState({ search: e.target.value.substr(0, 40) });
  };

  filteredFood = () =>
    this.props.foods.filter(food => {
      return food.name.indexOf(this.state.search) !== -1;
    });

  render() {
    // console.log(filteredFood);
    return (
      <div className="box">
        <input
          id="search-bar"
          type="text"
          value={this.state.search}
          placeholder="Search"
          onChange={this.filterSearch}
          filteredFood={this.filteredFood}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
