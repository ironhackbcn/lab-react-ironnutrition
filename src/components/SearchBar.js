import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    console.log('dsfsf');
    //this.props.search(event.target.value);
  }

  render() {
    return <></>;
  }
}

export default SearchBar;
