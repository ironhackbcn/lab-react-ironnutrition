import React, { Component } from 'react';

class SearchBar extends Component {
constructor(props) {
  super(props);
  this.state={
    search:'',
  }
}

handleChange= (e) => {
  this.props.doSearch(e.target.value);
}

  render() {
    
    return (
      <form>
        <input type='text' onChange={(e) => {this.handleChange(e)}}></input>
      </form>
    );
  }
}

export default SearchBar;