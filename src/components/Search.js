import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  handleInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSearchSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state);
    console.log("sending data");
  }
  render() {
    return (
      <form
        className="search-container columns is-3-desktop"
        onSubmit={this.handleSearchSubmit}
      >
        <input
          className="input column is-four-fifths"
          type="text"
          name="name"
          placeholder="Search a food"
          onChange={this.handleInput}
        />
        <button className="button is-info">Search</button>
      </form>
    );
  }
}

export default Search;
