import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  handleChange = event => {
    this.props.search(event.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} placeholder="Search"></input>
      </div>
    );
  }
}

export default Search;
