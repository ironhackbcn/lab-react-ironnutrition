import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = e => {
    this.props.searchBar(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          name="searchBar-query"
          onChange={this.handleChange}
          placeholder="Search food name here"
        ></input>
      </div>
    );
  }
}
